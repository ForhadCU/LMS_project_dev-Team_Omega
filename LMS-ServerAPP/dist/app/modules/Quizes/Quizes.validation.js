"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizValidators = void 0;
const zod_1 = require("zod");
// Define the Zod schema for TQuestion
const QuestionSchema = zod_1.z.object({
    Question_NO: zod_1.z.number().min(1, "Question number must be at least 1"), // Ensure it's a positive number
    Question: zod_1.z.string().nonempty("Question cannot be empty"), // Ensure it's a non-empty string
    Mark: zod_1.z.number().min(0, "Mark must be at least 0"), // Ensure non-negative marks
    Options: zod_1.z
        .array(zod_1.z.string().nonempty("Option cannot be empty"))
        .min(2, "At least 2 options are required"), // At least 2 options
    Answer: zod_1.z.string().nonempty("Answer cannot be empty"), // Ensure answer is non-empty
});
// Define the Zod schema for TQuiz
const QuizSchema = zod_1.z.object({
    body: zod_1.z.object({
        Course_ID: zod_1.z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format"), // Validate it as a MongoDB ObjectId
        Quiz_No: zod_1.z.string().nonempty("Quiz number cannot be empty"), // Non-empty string for Quiz_No
        Quiz_Type: zod_1.z.enum(["daily", "weekly"]), // Enum to ensure only 'daily' or 'weekly' values
        Date: zod_1.z.string().nonempty("Date cannot be empty"), // You might use a more specific date format validation if needed
        Questions: zod_1.z
            .array(QuestionSchema)
            .nonempty("Questions array cannot be empty"), // At least one question is required
        Form_link: zod_1.z.string().optional(), // Optional form link with URL validation
    }),
});
exports.QuizValidators = {
    QuizSchema,
};
