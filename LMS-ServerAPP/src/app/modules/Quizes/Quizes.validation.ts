import { z } from "zod";

// Define the Zod schema for TQuestion
const QuestionSchema = z.object({
  Question_NO: z.number().min(1, "Question number must be at least 1"), // Ensure it's a positive number
  Question: z.string().nonempty("Question cannot be empty"), // Ensure it's a non-empty string
  Mark: z.number().min(0, "Mark must be at least 0"), // Ensure non-negative marks
  Options: z
    .array(z.string().nonempty("Option cannot be empty"))
    .min(2, "At least 2 options are required"), // At least 2 options
  Answer: z.string().nonempty("Answer cannot be empty"), // Ensure answer is non-empty
});

// Define the Zod schema for TQuiz
const QuizSchema = z.object({
  body: z.object({
    Course_ID: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format"), // Validate it as a MongoDB ObjectId
    Quiz_No: z.string().nonempty("Quiz number cannot be empty"), // Non-empty string for Quiz_No
    Quiz_Type: z.enum(["daily", "weekly"]), // Enum to ensure only 'daily' or 'weekly' values
    Date: z.string().nonempty("Date cannot be empty"), // You might use a more specific date format validation if needed
    Questions: z
      .array(QuestionSchema)
      .nonempty("Questions array cannot be empty"), // At least one question is required
    Form_link: z.string().optional(), // Optional form link with URL validation
  }),
});

export const QuizValidators = {
  QuizSchema,
};
