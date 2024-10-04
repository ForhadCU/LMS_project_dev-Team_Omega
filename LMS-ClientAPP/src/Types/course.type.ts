export type TCourse = {
  id: string;
  title: string;
  code: string;
  description: string;
  duration: number;
  img: string;
  instructors: Array<string>;
  courseType: "language" | "technical" | "personalDevelopment";
  isActive: boolean;
};

export type TCourses = {
  courses: TCourse[];
};
