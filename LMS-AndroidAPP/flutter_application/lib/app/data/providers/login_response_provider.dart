/* import 'package:get/get.dart';

import '../models/login/responses/login_response_model.dart';

class LoginResponseProvider extends GetConnect {
  @override
  void onInit() {
    httpClient.defaultDecoder = (map) {
      if (map is Map<String, dynamic>) return LoginResponse.fromJson(map);
      if (map is List)
        return map.map((item) => LoginResponse.fromJson(item)).toList();
    };
    httpClient.baseUrl = 'YOUR-API-URL';
  }

  Future<LoginResponse?> getLoginResponse(int id) async {
    final response = await get('loginresponse/$id');
    return response.body;
  }

  Future<Response<LoginResponse>> postLoginResponse(
          LoginResponse loginresponse) async =>
      await post('loginresponse', loginresponse);
  Future<Response> deleteLoginResponse(int id) async =>
      await delete('loginresponse/$id');
}
 */