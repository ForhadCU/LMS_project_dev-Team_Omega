import { useNavigate, useParams } from "react-router-dom";
import { TQuestion } from "../../Types/question.type";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { setAnswerScore } from "../../redux/feature/quiz/totalScoreSlice";

// Define the form values type to handle answers for multiple questions
type FormValues = {
  answers: { [key: string]: string }; // Keyed by question number or ID
};

export const QuizQuestions = () => {
  const params = useParams();
  const navigate = useNavigate();
  const quizID = params.id;
  const dispatch = useAppDispatch();
  console.log(quizID);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [score, setScore] = useState(0); // To keep track of the student's score

  const questions: TQuestion[] = [
    {
      Question_NO: 1,
      Question: "What is the capital of France?",
      Mark: 5,
      Options: ["Paris", "London", "Berlin", "Madrid"],
      Answer: "Paris",
    },
    {
      Question_NO: 2,
      Question: "What is 2 + 2?",
      Mark: 5,
      Options: ["3", "4", "5", "6"],
      Answer: "4",
    },
    {
      Question_NO: 3,
      Question: "Who wrote 'Hamlet'?",
      Mark: 5,
      Options: ["Shakespeare", "Dickens", "Hemingway", "Tolstoy"],
      Answer: "Shakespeare",
    },
  ];

  const onSubmit = (data: FormValues) => {
    let totalScore = 0;
    let rightAns = 0;
    let wrongAns = 0;
    // Loop through each question and compare the student's answer with the correct answer
    questions.forEach((question) => {
      const studentAnswer = data.answers[question.Question_NO];
      if (studentAnswer === question.Answer) {
        totalScore += question.Mark; // Increase score for correct answers
        rightAns += 1;
      } else {
        wrongAns += 1;
      }
    });

    const quizSummary = {
      totalScore,
      rightAns,
      wrongAns,
    };

    setScore(totalScore); // Update the total score
    console.log("Total Score:", totalScore);
    dispatch(setAnswerScore(quizSummary));
    navigate(`/course-quiz-result/${quizID}`);
  };

  return (
    <div className=" flex flex-col">
      <div className=" my-2  w-full text-center flex flex-col gap-1">
        <h2 className=" text-xl lg:text-2xl font-bold">Quiz Question</h2>
        <p className=" text-base lg:text-lg underline ">Quiz No</p>
        <p className=" text-base lg:text-lg">Date</p>
        <p className=" text-base lg:text-lg">Quiz type</p>
      </div>
      <div>
        <div className=" flex flex-col gap-2 p-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 bg-white shadow rounded-md"
          >
            {/* Loop through each question and render it */}
            {questions.map((question) => (
              <div className=" flex flex-row justify-between">
                <div key={question.Question_NO}>
                  {/* Display the question */}
                  <div>
                    <label className="block text-sm font-medium">
                      Question No: {question.Question_NO}
                    </label>
                    <p className="mt-1">{question.Question}</p>
                  </div>

                  {/* Display the options as radio buttons */}
                  <div>
                    <label className="block text-sm font-medium">Options</label>
                    {question.Options.map((option, index) => (
                      <div key={index} className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value={option}
                            {...register(`answers.${question.Question_NO}`, {
                              required: `You must select an answer for Question ${question.Question_NO}`,
                            })}
                            className="form-radio text-blue-600"
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      </div>
                    ))}
                    {errors.answers?.[question.Question_NO] && (
                      <p className="text-red-500 text-sm">
                        {errors.answers[question.Question_NO]?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p>{question.Mark}</p>
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md"
              >
                Submit Answer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
