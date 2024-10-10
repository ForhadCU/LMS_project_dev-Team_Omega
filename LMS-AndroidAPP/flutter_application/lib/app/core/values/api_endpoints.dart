// ignore_for_file: non_constant_identifier_names

import 'package:flutter_application/app/core/core_lib.dart';

class ApiEndpoint {
  // Private Constructor
  ApiEndpoint._internal();
  // Singleton instance
  static final ApiEndpoint instance = ApiEndpoint._internal();

  // Helper class to store endpiont and method
  //// Users
  static final _loginUser = ApiRoute("/user/login-user", AppEnum.POST);
  static final _getAllUsers = ApiRoute("/user/get-all-users", AppEnum.GET);
  static final _changePassword =
      ApiRoute("/user/change-password", AppEnum.POST);
  //// Courses
  static final _getAllCourses =
      ApiRoute("/courses/get-all-courses", AppEnum.GET);
  static final _createNewCourse =
      ApiRoute("/courses/create-course", AppEnum.POST);

  // static final _ = ApiRoute("", AppEnum);

  //// Contents
  static final _createContent =
      ApiRoute("/contents/create-content", AppEnum.POST);
  static final _getAllContents =
      ApiRoute("/contents/get-contents", AppEnum.GET);
  static final _createGenResources =
      ApiRoute("/contents/post-gen-resources", AppEnum.POST);
  static final _getAllGenResources =
      ApiRoute("/contents/get-all-gen-resources", AppEnum.GET);
  static final _createClassRecords =
      ApiRoute("/contents/post-class-records", AppEnum.POST);
  static final _getAllClassRecords =
      ApiRoute("/contents/get-all-class-records", AppEnum.GET);

  //// Quiz
  static final _createAllPlatQuiz =
      ApiRoute("/quiz/create-all-plat-quiz", AppEnum.POST);
  static final _getAllPlatQuiz =
      ApiRoute("/quiz/get-all-plat-quiz", AppEnum.GET);

  //// Enrollment
  static final _getEnrolledStudents =
      ApiRoute("/enrollment/enrolled-courses", AppEnum.GET);

  //// Forum
  static final _createForumPost = ApiRoute("/forums/post-forum", AppEnum.POST);
  static final _commentOnForumPost =
      ApiRoute("/forums/post-forum-comment", AppEnum.POST);
  static final _getAllForumPost =
      ApiRoute("/forums/get-all-forums", AppEnum.GET);
  static final _getAllCommentsOfForumPost =
      ApiRoute("/forums/get-forum-comments", AppEnum.GET);

  // Public getter for routes
  static ApiRoute get loginUser => _loginUser;
  static ApiRoute get getAllUsers => _getAllUsers;
  static ApiRoute get changePassword => _changePassword;
  static ApiRoute get getAllCourses => _getAllCourses;
  static ApiRoute get createContent => _createContent;
  static ApiRoute get createNewCourse => _createNewCourse;
  static ApiRoute get getAllContents => _getAllContents;
  static ApiRoute get createGenResources => _createGenResources;
  static ApiRoute get getAllGenResources => _getAllGenResources;
  static ApiRoute get createClassRecords => _createClassRecords;
  static ApiRoute get getAllClassRecords => _getAllClassRecords;
  static ApiRoute get createAllPlatQuiz => _createAllPlatQuiz;
  static ApiRoute get getEnrolledStudents => _getEnrolledStudents;
  static ApiRoute get createForumPost => _createForumPost;
  static ApiRoute get commentOnForumPost => _commentOnForumPost;
  static ApiRoute get getAllForumPost => _getAllForumPost;
  static ApiRoute get getAllCommentsOfForumPost => _getAllCommentsOfForumPost;
  static ApiRoute get getAllPlatQuiz => _getAllPlatQuiz;

  // ApiRoute get loginUser =>
}

class ApiRoute {
  final String url;
  final AppEnum method;

  ApiRoute(this.url, this.method);
}
