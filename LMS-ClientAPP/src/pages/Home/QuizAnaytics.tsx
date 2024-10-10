import WeeklyQuizChart from "../../components/Anaytics/WeeklyQuizChart";
import DailyQuizChart from "../../components/Anaytics/DailyQuizChart";
import ScoreDistributionChart from "../../components/Anaytics/ScoreDistributionChart";
import Rankings from "../../components/Anaytics/Rankings";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const QuizAnalytics = () => {
  const [quizType, setQuizType] = useState("weekly");

  const handleToggle = (event, newQuizType) => {
    if (newQuizType !== null) {
      setQuizType(newQuizType);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Header with Toggle Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-indigo-700 text-center flex-grow">
          {quizType === "weekly"
            ? "Weekly Quiz Analytics"
            : "Daily Quiz Analytics"}
        </h2>
        <ToggleButtonGroup
          value={quizType}
          exclusive
          onChange={handleToggle}
          aria-label="quiz type toggle"
        >
          <ToggleButton
            value="weekly"
            aria-label="weekly quiz"
            className={`rounded-lg shadow-md ${
              quizType === "weekly"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-indigo-600"
            } hover:bg-indigo-700 transition-colors border border-indigo-500`}
          >
            Weekly
          </ToggleButton>
          <ToggleButton
            value="daily"
            aria-label="daily quiz"
            className={`rounded-lg shadow-md ${
              quizType === "daily"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-indigo-600"
            } hover:bg-indigo-700 transition-colors border border-indigo-500`}
          >
            Daily
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizType === "weekly" ? <WeeklyQuizChart /> : <DailyQuizChart />}
        <ScoreDistributionChart />
      </div>

      {/* Rankings Section */}
      <Rankings type={quizType} />
    </div>
  );
};

export default QuizAnalytics;
