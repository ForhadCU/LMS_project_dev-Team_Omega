import 'package:get/get.dart';

import '../modules/content_details/bindings/content_details_binding.dart';
import '../modules/content_details/views/content_details_view.dart';
import '../modules/course_details/bindings/course_details_binding.dart';
import '../modules/course_details/views/course_details_view.dart';
import '../modules/courses/bindings/all_courses_binding.dart';
import '../modules/courses/views/all_courses_view.dart';
import '../modules/create_course/bindings/create_course_binding.dart';
import '../modules/create_course/views/create_course_view.dart';
import '../modules/create_course_contents/bindings/create_course_contents_binding.dart';
import '../modules/create_course_contents/views/create_course_contents_view.dart';
import '../modules/create_forum_posts/bindings/create_forum_posts_binding.dart';
import '../modules/create_forum_posts/views/create_forum_posts_view.dart';
import '../modules/create_genral_resources/bindings/create_genral_resources_binding.dart';
import '../modules/create_genral_resources/views/create_genral_resources_view.dart';
import '../modules/create_quizes/bindings/create_quizes_binding.dart';
import '../modules/create_quizes/views/create_quizes_view.dart';
import '../modules/create_recordings/bindings/create_recordings_binding.dart';
import '../modules/create_recordings/views/create_recordings_view.dart';
import '../modules/forum/bindings/forum_binding.dart';
import '../modules/forum/views/forum_view.dart';
import '../modules/forum_comments/bindings/forum_comments_binding.dart';
import '../modules/forum_comments/views/forum_comments_view.dart';
import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/login/bindings/login_binding.dart';
import '../modules/login/views/login_view.dart';
import '../modules/password_recover/bindings/password_recover_binding.dart';
import '../modules/password_recover/views/password_recover_view.dart';
import '../modules/profile/bindings/profile_binding.dart';
import '../modules/profile/views/profile_view.dart';
import '../modules/splash/bindings/splash_binding.dart';
import '../modules/splash/views/splash_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  // static const initial = Routes.SPLASH;
  static const initial = Routes.HOME;
  static const _transitionDuration = Duration(milliseconds: 500);

  static final routes = [
    GetPage(
      name: _Paths.SPLASH,
      page: () => const SplashView(),
      binding: SplashBinding(),
    ),
    GetPage(
        name: _Paths.HOME,
        page: () => const HomeView(),
        binding: HomeBinding(),
        transition: Transition.rightToLeft,
        transitionDuration: _transitionDuration),
    GetPage(
      name: _Paths.LOGIN,
      page: () => const LoginView(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.PROFILE,
      page: () => const ProfileView(),
      binding: ProfileBinding(),
    ),
    GetPage(
      name: _Paths.ALLCOURSES,
      page: () => AllCoursesView(),
      binding: AllCoursesBinding(),
    ),
    GetPage(
      name: _Paths.PASSWORD_RECOVER,
      page: () => const PasswordRecoverView(),
      binding: PasswordRecoverBinding(),
      transition: Transition.downToUp,
      transitionDuration: _transitionDuration,
    ),
    GetPage(
      name: _Paths.COURSE_DETAILS,
      page: () => CourseDetailsView(),
      binding: CourseDetailsBinding(),
    ),
    GetPage(
      name: _Paths.CONTENT_DETAILS,
      page: () => const ContentDetailsView(),
      binding: ContentDetailsBinding(),
    ),
    GetPage(
      name: _Paths.FORUM,
      page: () => const ForumView(),
      binding: ForumBinding(),
    ),
    GetPage(
      name: _Paths.FORUM_COMMENTS,
      page: () => const ForumCommentsView(),
      binding: ForumCommentsBinding(),
    ),
    GetPage(
      name: _Paths.CREATE_COURSE,
      page: () => CreateCourseView(),
      binding: CreateCourseBinding(),
    ),
    GetPage(
      name: _Paths.CREATE_COURSE_CONTENTS,
      page: () => CreateCourseContentsView(),
      binding: CreateCourseContentsBinding(),
    ),
    GetPage(
      name: _Paths.CREATE_GENRAL_RESOURCES,
      page: () => CreateGenralResourcesView(),
      binding: CreateGenralResourcesBinding(),
    ),
    GetPage(
      name: _Paths.CREATE_RECORDINGS,
      page: () => CreateRecordingsView(),
      binding: CreateRecordingsBinding(),
    ),
    GetPage(
      name: _Paths.CREATE_FORUM_POSTS,
      page: () =>  CreateForumPostsView(),
      binding: CreateForumPostsBinding(),
    ),
    GetPage(
      name: _Paths.CREATE_QUIZES,
      page: () =>  CreateQuizesView(),
      binding: CreateQuizesBinding(),
    ),
  ];
}
