class AppKeys {
  // make this class singleton
  AppKeys._internal();
  static final AppKeys _singleton = AppKeys._internal();
  factory AppKeys() {
    return _singleton;
  }
  // codes start from here
  // Methods or variables shouldn't be static
  final accessToken = "access_token";
}
