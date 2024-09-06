class AppData {
  // make this class singleton
  AppData._internal();
  static final AppData _singleton = AppData._internal();
  factory AppData() {
    return _singleton;
  }
  // codes start from here
  // All methods or variables shouldn't be static

  final double appBarIconWidth = 24;
  final double appBarIconHeight = 24;
  
}
