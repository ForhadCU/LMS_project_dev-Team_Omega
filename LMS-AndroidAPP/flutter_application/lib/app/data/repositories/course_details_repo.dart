import 'package:flutter_application/app/data/models/contents/params/course_contents_by_type_params.dart';
import 'package:flutter_application/app/data/models/enrollments/params/all_enrolled_courses_params.dart';
import 'package:flutter_application/app/data/models/enrollments/responses/all_enrolled_courses_response.dart';
import 'package:flutter_application/app/data/providers/api_provider.dart';

import '../../core/core_lib.dart';
import '../../core/values/gloabal_values.dart';
import '../models/contents/responses/all_contents_response.dart';

class CourseDetailsRepo {
  final ApiProvider apiProvider;
  CourseDetailsRepo({required this.apiProvider});

  mGetAllEnrolledStudents(
      {required String token, required AllEnrolledCoursesParams params}) async {
    // print
    gLogger.t(params.toJson());
    // send req and get response
    final res = await apiProvider.get(ApiEndpoint.getEnrolledStudents.url,
        headers: AppHelpers().mHeadersGenerator(token: token),
        params: params.toJson());
    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);
    // gLogger.t(decodedBody);
    return AllEnrolledStudentResponse.fromJson(decodedBody);
  }

  // get Lecture of current Course
  mGetLectureOfCourse(
      {required String token,
      required CourseContentsByTypeParams params}) async {
    // print
    gLogger.t(params.toJson());
    // send req and get response
    final res = await apiProvider.get(ApiEndpoint.getAllContents.url,
        headers: AppHelpers().mHeadersGenerator(token: token),
        params: params.toJson());
    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);
    // gLogger.t(decodedBody);
    return AllContentsResponse.fromJson(decodedBody);
  } 
  // get files of current Course
  mGetFilesOfCourse(
      {required String token,
      required CourseContentsByTypeParams params}) async {
    // print
    gLogger.t(params.toJson());
    // send req and get response
    final res = await apiProvider.get(ApiEndpoint.getAllContents.url,
        headers: AppHelpers().mHeadersGenerator(token: token),
        params: params.toJson());
    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);
    // gLogger.t(decodedBody);
    return AllContentsResponse.fromJson(decodedBody);
  } 
  // get videos of current Course
  mGetVideosOfCourse(
      {required String token,
      required CourseContentsByTypeParams params}) async {
    // print
    gLogger.t(params.toJson());
    // send req and get response
    final res = await apiProvider.get(ApiEndpoint.getAllContents.url,
        headers: AppHelpers().mHeadersGenerator(token: token),
        params: params.toJson());
    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);
    // gLogger.t(decodedBody);
    return AllContentsResponse.fromJson(decodedBody);
  } 
}
