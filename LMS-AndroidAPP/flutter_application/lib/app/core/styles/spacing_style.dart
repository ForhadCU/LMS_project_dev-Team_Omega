class AppSpacing {
  // make this class singleton
   AppSpacing._internal();
  static final AppSpacing _singleton = AppSpacing._internal();
  factory AppSpacing() {
    return _singleton;
  }

  // codes start from here
  // All methods should be static to maintain singleton instances

  final double smh = 2.0;
  final double sm = 4.0;
  final double md = 8.0;
  final double xl = 16.0;
  final double xxl = 32.0;
}
