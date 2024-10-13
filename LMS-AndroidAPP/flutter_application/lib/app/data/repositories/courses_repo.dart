import 'package:flutter_application/app/data/models/courses/params/all_courses_of_instructor_param.dart';
import 'package:flutter_application/app/data/models/courses/responses/all_courses_of_instructor_response.dart';

import '../../core/core_lib.dart';
import '../../core/values/gloabal_values.dart';
import '../providers/api_provider.dart';

class CoursesRepo {
  final ApiProvider apiProvider;
  CoursesRepo({required this.apiProvider});

  mGetMyCourses(
      {required String token,
      required AllCoursesOfInstructorParams param}) async {
    // print
    gLogger.t(param.toJson());
    // send req and get response
    final res = await apiProvider.get(ApiEndpoint.getAllCourses.url,
        headers: AppHelpers().mHeadersGenerator(token: token),
        params: param.toJson());
    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);
    gLogger.t(decodedBody);
    return AllCoursesOfInstructorResponse.fromJson(decodedBody);
  }
}
