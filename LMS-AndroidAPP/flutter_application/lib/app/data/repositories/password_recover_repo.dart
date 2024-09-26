import 'package:flutter_application/app/data/models/password_recover/payloads/change_pass_payload.dart';
import 'package:flutter_application/app/data/models/password_recover/responses/chnage_pass_response_model.dart';
import 'package:flutter_application/app/data/providers/api_provider.dart';

import '../../core/core_lib.dart';

class PasswordRecoverRepository {
  final ApiProvider apiProvider;
  PasswordRecoverRepository({required this.apiProvider});

  Future<ChangePasswordResponseModel?> mChangePassword({
    required ChangePasswordPayload changePasswordPayload,
    required String userAccessToken,
  }) async {
    final response = await apiProvider.post(
      ApiEndpoint().change_password,
      headers: AppHelpers().mHeadersGenerator(token: userAccessToken),
      body: changePasswordPayload.toMap(),
      // headers: AppHelpers().mHeadersGenerator(token: token),
    );
    return ChangePasswordResponseModel.fromMap(
        AppHelpers().mHandleRemoteResponse(response));
  }

  //  get user access token
  Future<String?> mGetSessionFromLocal() async {
    String? response = await apiProvider.getString(key: AppKeys().accessToken);
    return response;
  }
}
