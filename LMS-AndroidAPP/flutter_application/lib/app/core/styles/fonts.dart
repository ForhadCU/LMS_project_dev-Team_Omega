class AppFonts {
  // make this class singleton
  AppFonts._internal();
  static final AppFonts _singleton = AppFonts._internal();
  factory AppFonts() {
    return _singleton;
  }
  // codes start from here
  // All methods should be static to maintain singleton instances
  final String inter = "Inter";
}
