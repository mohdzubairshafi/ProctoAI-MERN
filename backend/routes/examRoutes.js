import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createExam, getExams } from "../controllers/examController.js";
import {
  createQuestion,
  getQuestionsByExamId,
} from "../controllers/quesController.js";
const examRoutes = express.Router();

// protecting Exam route using auth middleware protect
examRoutes.route("/exam").get(protect, getExams).post(protect, createExam);
examRoutes
  .route("/exam/questions")
  .get(protect, getQuestionsByExamId)
  .post(protect, createQuestion);

export default examRoutes;
