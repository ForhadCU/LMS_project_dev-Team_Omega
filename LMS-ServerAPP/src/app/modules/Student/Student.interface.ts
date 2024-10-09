export type TStudentPerformance = {
  totalAttendance: number;
  avgDailyQuizMarks: number;
  avgWeeklyQuizMarks: number;
  classAttention: "Good" | "Avarage";
};
export type TStudent = {
  fullName: string;
  userID: string;
  age: number;
  subjectMajor: string;
  batch: string;
  address: string;
  img: string;
  performance: TStudentPerformance;
};
