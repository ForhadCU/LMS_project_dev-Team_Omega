import 'package:flutter_application/app/data/providers/api_provider.dart';
import 'package:flutter_application/app/data/repositories/password_recover_repo.dart';
import 'package:get/get.dart';

import '../controllers/password_recover_controller.dart';

class PasswordRecoverBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<PasswordRecoverRepository>(
        () => PasswordRecoverRepository(apiProvider: Get.find<ApiProvider>()));
    Get.lazyPut<PasswordRecoverController>(
      () => PasswordRecoverController(
          passwordRecoverRepository: Get.find<PasswordRecoverRepository>()),
    );
  }
}
