// ignore_for_file: non_constant_identifier_names

class AppAssetLocations {
  // make this class singleton
  AppAssetLocations._internal();
  static final AppAssetLocations _singleton = AppAssetLocations._internal();
  factory AppAssetLocations() {
    return _singleton;
  }
  // codes start from here
  // All methods should be static to maintain singleton instances

  // icons
  final String ic_bjet = "assets/icons/bjet.png";

  // images
}
