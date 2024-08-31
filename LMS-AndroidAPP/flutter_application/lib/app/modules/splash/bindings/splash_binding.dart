import 'package:flutter_application/app/data/providers/api_provider.dart';
import 'package:flutter_application/app/data/repositories/password_recover_repo.dart';
import 'package:get/get.dart';

import '../controllers/splash_controller.dart';

class SplashBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<PasswordRecoverRepository>(
        () => PasswordRecoverRepository(apiProvider: Get.find<ApiProvider>()));
    Get.lazyPut<SplashController>(
      () => SplashController(
          passwordRecoverRepository: Get.find<PasswordRecoverRepository>()),
    );
  }
}
