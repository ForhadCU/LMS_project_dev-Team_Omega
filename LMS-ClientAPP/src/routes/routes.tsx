import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { About } from "../pages/About/About";
import { Home } from "../pages/Home/Home";
import { CreateUser } from "../pages/AdminPages/CreateUser";
import { StudentCourses } from "../pages/StudentPages/StudentCourses";
import { CreateCourse } from "../pages/TeacherPages/CreateCourse";
import App from "../App";
import { GetUser } from "../pages/AdminPages/GetUser";
import { StudentReportViewr } from "../components/PDF/StudentReportViewr";
import { StudentDetails } from "../pages/AdminPages/StudentDetails";
import { CoursesList } from "../pages/Courses/CoursesList";
import { CourseDetails } from "../pages/Courses/CourseDetails";
import { AttendanceList } from "../pages/AdminPages/AttendanceList";
import { Forums } from "../pages/Forum/Forums";
import { MyCourses } from "../pages/TeacherPages/MyCourses";
import { AllQuiz } from "../pages/Quiz/AllQuiz";
import { Lectures } from "../pages/Lectures/Lectures";
import { Resources } from "../pages/Resources/Resources";
import { CreateContents } from "../pages/TeacherPages/CreateContents";
import CreateQuiz from "../pages/Quiz/CreateQuiz";
import { QuizQuestions } from "../pages/Quiz/QuizQuestions";
import { PostQuiz } from "../pages/Quiz/PostQuiz";
import { ClassRecordings } from "../pages/ClassRecordings/ClassRecordings";
import { CreateClassRecordings } from "../pages/ClassRecordings/CreateClassRecordings";
import { GeneralResources } from "../pages/Resources/GeneralResources";
import { CreateGeneralResources } from "../pages/Resources/CreateGeneralResources";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/courses",
        element: <StudentCourses />,
      },
      {
        path: "/create-course",
        element: <CreateCourse />,
      },
      {
        path: "/get-users",
        element: <GetUser />,
      },
      {
        path: "/student-report",
        element: <StudentReportViewr />,
      },
      {
        path: "/student-details",
        element: <StudentDetails />,
      },
      {
        path: "/course-list",
        element: <CoursesList />,
      },
      {
        path: "/course-details/:id",
        element: <CourseDetails />,
      },
      {
        path: "/attendance-list",
        element: <AttendanceList />,
      },
      {
        path: "/forums",
        element: <Forums />,
      },
      {
        path: "/instructor-courses",
        element: <MyCourses />,
      },
      {
        path: "/course-quizzes/:id",
        element: <AllQuiz />,
      },
      {
        path: "/course-quiz-create/:id",
        element: <CreateQuiz />,
      },
      {
        path: "/course-quiz-questions/:id",
        element: <QuizQuestions />,
      },
      {
        path: "/course-quiz-result/:id",
        element: <PostQuiz />,
      },
      {
        path: "/course-lectures/:id",
        element: <Lectures />,
      },
      {
        path: "/course-resources/:id",
        element: <Resources />,
      },
      {
        path: "/course-content-create/:id",
        element: <CreateContents />,
      },
      {
        path: "/class-recordings",
        element: <ClassRecordings />,
      },
      {
        path: "/add-class-recordings",
        element: <CreateClassRecordings />,
      },
      {
        path: "/general-resources",
        element: <GeneralResources />,
      },
      {
        path: "/add-general-resources",
        element: <CreateGeneralResources />,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default routes;
