import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/login/payloads/login_payload.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/data/providers/api_provider.dart';

class LoginRepository {
  final ApiProvider apiProvider;
  LoginRepository({required this.apiProvider});

  Future<LoginResponse?> mLoginUser(
      {required LoginPayload loginPayload}) async {
    gLogger.t(loginPayload.toMap());
    final response = await apiProvider.post(
      ApiEndpoint.loginUser.url,
      body: loginPayload.toMap(),
      // headers: AppHelpers().mHeadersGenerator(token: token),
    );
    return LoginResponse.fromJson(AppHelpers().mHandleRemoteResponse(response));
  }

  Future<bool> mSaveSessionToLocal({required String value}) async {
    bool? res = await apiProvider.setString(
        key: AppConstants.apiKeys.accessToken, value: value);
    return AppHelpers().mHandleLocalResponse(res);
  }

  Future<bool> mSaveCurrentUserDataToLocal(
      {required String value, required String key}) async {
    bool? res = await apiProvider.setString(key: key, value: value);
    return AppHelpers().mHandleLocalResponse(res);
  }
}
