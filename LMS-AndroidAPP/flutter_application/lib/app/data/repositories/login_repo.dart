import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/data/models/login/payloads/login_payload.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/data/providers/api_provider.dart';

class LoginRepository {
  final ApiProvider apiProvider;
  LoginRepository({required this.apiProvider});

  Future<LoginResponse?> mLoginUser(
      {required LoginPayload loginPayload}) async {
    final response = await apiProvider.post(
      ApiEndpoint().login_user,
      body: loginPayload.toMap(),
      // headers: AppHelpers().mHeadersGenerator(token: token),
    );
    return LoginResponse.fromJson(AppHelpers().mHandleResponse(response));
  }
}
