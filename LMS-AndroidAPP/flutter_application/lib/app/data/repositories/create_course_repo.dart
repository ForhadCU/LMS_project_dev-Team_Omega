import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/courses/payloads/create_course_payload.dart';
import 'package:flutter_application/app/data/models/users/params/user_data_param.dart';
import 'package:flutter_application/app/data/models/users/response/all_users_response.dart';
import 'package:get/get.dart';

import '../providers/api_provider.dart';

class CreateCourseRepo {
  final ApiProvider apiProvider;
  CreateCourseRepo({required this.apiProvider});

  // Create courses by instructor
  Future<Map<String, dynamic>> mCreateCourse(
      {required CreateCoursePayload createCoursePayload,
      required String userAccessToken}) async {
    // print
    gLogger.t(createCoursePayload.toJson());

    // send req and get response
    final res = await apiProvider.post(ApiEndpoint.createNewCourse.url,
        headers: AppHelpers().mHeadersGenerator(token: userAccessToken),
        body: createCoursePayload.toJson());

    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);

    // print
    gLogger.i(decodedBody['message']);

    return decodedBody;
  }

  Future<UserDataResponse> mGetAllInstructors(
      {required UserDataParam userDataParam,
      required String userAccessToken}) async {
    // print
    gLogger.t(userDataParam.toJson());
    // send req and get response
    final res = await apiProvider.get(ApiEndpoint.getAllUsers.url,
        headers: AppHelpers().mHeadersGenerator(token: userAccessToken),
        params: userDataParam.toJson());
    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);
    return UserDataResponse.fromJson(decodedBody);
  }

  //  get user access token
  Future<String?> mGetSessionFromLocal() async {
    String? response =
        await apiProvider.getString(key: AppConstants.apiKeys.accessToken);
    return response;
  }
}
