import mongoose from "mongoose";

const contractSchema = new mongoose.Schema({
  text: String,
  analysis: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Contract", contractSchema);