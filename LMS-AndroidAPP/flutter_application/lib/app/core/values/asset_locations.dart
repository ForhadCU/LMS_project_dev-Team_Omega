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

  // images
}
