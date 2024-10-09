export type TCourse = {
  _id: string;
  title: string;
  code: string;
  description: string;
  duration: number;
  img: string;
  instructors: Array<string>;
  courseType: "language" | "technical" | "personalDevelopment";
  isActive: "pending" | "active" | "inactive";
};

export type TCourses = {
  courses: TCourse[];
};
