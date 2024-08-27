class AppFonts {
  // make this class singleton
  AppFonts._internal();
  static final AppFonts _singleton = AppFonts._internal();
  factory AppFonts() {
    return _singleton;
  }
  // codes start from here
  // Methods or variables shouldn't be static
  final String inter = "Inter";
}
