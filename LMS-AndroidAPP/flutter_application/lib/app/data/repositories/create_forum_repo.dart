import 'dart:convert';

import 'package:flutter_application/app/data/models/forums/payloads/create_new_forum_payload.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';

import '../../core/core_lib.dart';
import '../../core/values/gloabal_values.dart';
import '../providers/api_provider.dart';

class CreateForumRepo {
  final ApiProvider apiProvider;
  CreateForumRepo({required this.apiProvider});

  //  get user access token
  Future<String?> mGetSessionFromLocal() async {
    String? response =
        await apiProvider.getString(key: AppConstants.apiKeys.accessToken);
    return response;
  }

  // create forum
  Future<Map<String, dynamic>> mSaveForumPost(
      {required String userAccessToken,
      required CreateNewForumPayload payload}) async {
    // print
    gLogger.t(payload.toJson());

    // send req and get response
    final res = await apiProvider.post(ApiEndpoint.createForumPost.url,
        headers: AppHelpers().mHeadersGenerator(token: userAccessToken),
        body: payload.toJson());

    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);

    // print
    gLogger.i(decodedBody['message']);

    return decodedBody;
  }

  mGetCurrentUserDataFromLocal() {
    return AppHelpers().mGetCurrentUserDataFromLocal();
  }
}
