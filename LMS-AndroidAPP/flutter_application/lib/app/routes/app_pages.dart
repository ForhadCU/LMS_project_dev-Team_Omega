import 'package:get/get.dart';

import '../modules/content_details/bindings/content_details_binding.dart';
import '../modules/content_details/views/content_details_view.dart';
import '../modules/course_details/bindings/course_details_binding.dart';
import '../modules/course_details/views/course_details_view.dart';
import '../modules/courses/bindings/all_courses_binding.dart';
import '../modules/courses/views/all_courses_view.dart';
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
  static const initial = Routes.ALLCOURSES;
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
      page: () =>  AllCoursesView(),
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
  ];
}
