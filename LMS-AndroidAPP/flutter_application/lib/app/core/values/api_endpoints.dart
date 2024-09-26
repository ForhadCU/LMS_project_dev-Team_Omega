// ignore_for_file: non_constant_identifier_names

class ApiEndpoint {
  // Private Constructor
  ApiEndpoint._internal();
  // Singleton instance
  static final ApiEndpoint _singletone = ApiEndpoint._internal();
  // Factory constructor to return a singleton instance
  factory ApiEndpoint() {
    return _singletone;
  }
  final String login_user = "/user/login-user";
  final String get_all_users = "/user/get-all-users";
  final String change_password = "/user/change-password";
  final String get_all_courses = "/courses/get-all-courses";
  final String create_content = "/contents/create-content";
}
