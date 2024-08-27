class AppStrings {
  // make this class singleton
  AppStrings._internal();
  static final AppStrings _singleton = AppStrings._internal();
  factory AppStrings() {
    return _singleton;
  }
  // codes start from here
  // Methods or variables shouldn't be static

  double sAppFontsize = 0;
  final String sOnGoing = "Ongoing";
  final String sUpComing = "Upcoming";
  final String sEnded = "Ended";
  final String sEdit = "Edit";
  final String sDelete = "Delete";
  final List<String> sCourseCardMenuItems = ["Edit", "Delete"];
}
