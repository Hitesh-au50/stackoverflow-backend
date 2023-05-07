import express from "express";
import { AskQuestion } from "../controllers/Question.js";
import {
  getAllquestions,
  deleteQuestion,
  voteQuestion,
} from "../controllers/Question.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/ask", auth, AskQuestion);
router.get("/get", getAllquestions);
router.delete("/delete/:id", auth, deleteQuestion);
router.patch("/vote/:id", auth, voteQuestion);
export default router;
