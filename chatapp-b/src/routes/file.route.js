import express from "express";
import cloudinary from "../lib/cloudinary.js"; // make sure this exists
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * Generate temporary Cloudinary URL for private files (PDF, DOC, etc.)
 * Example request: GET /api/files/pdf/:publicId
 */
router.get("/pdf/:publicId", protectRoute, (req, res) => {
  const { publicId } = req.params;

  try {
    const url = cloudinary.utils.private_download_url(publicId, {
      expires_at: Math.floor(Date.now() / 1000) + 300,
    });

    res.json({ url });
  } catch (err) {
    console.error("Failed to generate Cloudinary URL:", err);
    res.status(500).json({ message: "Failed to generate URL" });
  }
});
 
export default router;
