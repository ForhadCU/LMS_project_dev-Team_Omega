import 'package:flutter_application/app/data/models/contents/payloads/create_general_resources_payload.dart';

import '../../core/core_lib.dart';
import '../../core/values/gloabal_values.dart';
import '../providers/api_provider.dart';

class CreateGenResoursesRepo {
  final ApiProvider apiProvider;
  CreateGenResoursesRepo({required this.apiProvider});

// get user data
  mGetCurrentUserDataFromLocal() {
    return AppHelpers().mGetCurrentUserDataFromLocal();
  }

  mSaveGeneralResource(
      {required String userAccessToken,
      required CreateGeneralResourcesPayload payload}) async {
    // print
    gLogger.t(payload.toJson());

    // send req and get response
    final res = await apiProvider.post(ApiEndpoint.createGenResources.url,
        headers: AppHelpers().mHeadersGenerator(token: userAccessToken),
        body: payload.toJson());

    // decode response
    Map<String, dynamic> decodedBody = AppHelpers().mHandleRemoteResponse(res);

    // print
    gLogger.i(decodedBody['message']);

    return decodedBody;
  }
}

