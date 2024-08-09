import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { timestamps: true }
);

export const CommentModel = new mongoose.model("CommentModel", CommentSchema);
