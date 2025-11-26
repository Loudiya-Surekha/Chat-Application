import jwt from "jsonwebtoken"
import User from "../models/user.model.js"


export const protectRoute = async (req, res, next)=>{
    try{
         const token = req.cookies.jwt
        // const token = req.headers.authorization?.split(" ")[1];
         if(!token){
            return res.status(401).json({message: "Unauthorized - No Token Provided"});
         }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    // Find user from decoded token payload (e password)
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
      //Attach user to request object for downstream access
    req.user = user;

    // Continue to next middleware/route
    next()
    }catch(error){
       console.log("Error in protectRoute middleware:", error.message);
    // return res.status(401).json({ message: "Unauthorized - Invalid or Expired Token" });
    res.status(500).json({ message: "Internal Server Error" });

    }
}