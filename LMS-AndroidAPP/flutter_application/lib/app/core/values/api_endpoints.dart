class ApiEndpoint {
  // Private Constructor
  ApiEndpoint._internal();
  // Singleton instance
  static final ApiEndpoint _singletone = ApiEndpoint._internal();
  // Factory constructor to return a singleton instance
  factory ApiEndpoint() {
    return _singletone;
  }

  /// base url
  final String baseUrl = 'https://';

  final String demoEndpoint = "/api/web-app/demo";
}
