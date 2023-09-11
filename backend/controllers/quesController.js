import asyncHandler from "express-async-handler";
import Question from "../models/quesModel.js";

// @desc Get all questions related to an exam
// @route GET /api/exam/questions/:examId
// @access Public
const getQuestionsByExamId = asyncHandler(async (req, res) => {
  //   const { examId } = req.params;
  const { examId } = req.body;
  if (!examId) {
    return res.status(400).json({ error: "examId is missing or invalid" });
  }

  console.log(examId);
  const questions = await Question.find({ examId });
  res.status(200).json(questions);
});

// @desc Create a new question for an exam
// @route POST /api/exam/questions/:examId
// @access Private (admin)
const createQuestion = asyncHandler(async (req, res) => {
  //   const { examId } = req.params;
  //   const { question, options } = req.body;
  const { question, options, examId } = req.body;

  // Verify that examId is not undefined or empty
  if (!examId) {
    return res.status(400).json({ error: "examId is missing or invalid" });
  }

  console.log(examId, question, options);
  const newQuestion = new Question({
    question,
    options,
    examId,
  });

  const createdQuestion = await newQuestion.save();

  if (createdQuestion) {
    res.status(201).json(createdQuestion);
  } else {
    res.status(400);
    throw new Error("Invalid Question Data");
  }
});

export { getQuestionsByExamId, createQuestion };
