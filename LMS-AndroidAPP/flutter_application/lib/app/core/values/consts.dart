class AppConstants {
  // make this class singleton
  AppConstants._internal();
  static final AppConstants _singleton = AppConstants._internal();
  factory AppConstants() {
    return _singleton;
  }
  // codes start from here
  // All methods should be static to maintain singleton instances

  double sAppFontsize = 0;
  final String sOnGoing = "Ongoing";
  final String sUpComing = "Upcoming";
  final String sEnded = "Ended";
  final String sEdit = "Edit";
  final String sDelete = "Delete";
  final List<String> sCourseCardMenuItems = ["Edit", "Delete"];
}
