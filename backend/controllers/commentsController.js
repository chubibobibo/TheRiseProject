import "express-async-errors";
import { ExpressError } from "../expressError/expressError.js";
import { CommentModel } from "../models/Comments.js";
import { TaskModel } from "../models/TaskSchema.js";

export const addComment = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data received", 400);
  }
  console.log(req.body);
  const { id } = req.params;
  /** create an author property in the comment by using the logged user */
  req.body.author = req.user.id;
  /** find the specific task using the id passed as params then populate the comment property (which is referencing the CommentSchema) */
  const foundTask = await TaskModel.findById(id).populate("comment");
  /** create the comment then push it in the array of the foundTask*/
  const newComment = await CommentModel.create(req.body);
  await foundTask.comment.push(newComment);
  /** save the changes */
  await newComment.save();
  await foundTask.save();
  console.log(`this is the found task: ${foundTask}`);
  if (!newComment) {
    throw new ExpressError("Cannot create new comment", 400);
  }
  res.status(200).json({ message: "New comment created", foundTask });
};
