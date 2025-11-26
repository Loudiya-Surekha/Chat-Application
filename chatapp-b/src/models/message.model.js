import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
     media: {
      type: String,
    },
    fileType: {
    type: String,
    },
  },
  {
    timestamps: true, 
  }
);
// senderId and receiverId is reference to the user model

const Message = mongoose.model("Message", messageSchema);

export default Message;
