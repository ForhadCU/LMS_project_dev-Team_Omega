// ignore_for_file: non_constant_identifier_names

class AppAssetLocations {
  // make this class singleton
  AppAssetLocations._internal();
  static final AppAssetLocations _singleton = AppAssetLocations._internal();
  factory AppAssetLocations() {
    return _singleton;
  }
  // codes start from here
  // Methods or variables shouldn't be static

  // icons
  final String ic_bjet = "assets/icons/bjet.png";
  final String ic_course = "assets/icons/course.png";
  final String ic_course2 = "assets/icons/course2.png";
  final String ic_forgot_password = "assets/icons/forgot_password.png";
  final String ic_back = "assets/icons/ic_back.png";
  final String ic_clock = "assets/icons/ic_clock.png";
  final String ic_courses = "assets/icons/ic_courses.png";
  final String ic_home = "assets/icons/ic_home.png";
  final String ic_mic = "assets/icons/ic_mic.png";
  final String ic_notification = "assets/icons/ic_notification.png";
  final String ic_profile_settings = "assets/icons/ic_profile_settings.png";
  final String ic_search = "assets/icons/ic_search.png";
  final String ic_user = "assets/icons/ic_user.png";
  final String ic_filter = "assets/icons/ic_filter.png";
  final String ic_drawer = "assets/icons/ic_drawer.png";

  // animations
  final String anim_success = "assets/animations/success.gif";
  final String anim_error = "assets/animations/error.gif";
}
