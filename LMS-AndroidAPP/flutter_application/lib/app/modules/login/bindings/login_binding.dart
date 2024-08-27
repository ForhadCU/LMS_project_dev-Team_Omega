import 'package:flutter_application/app/data/providers/api_provider.dart';
import 'package:flutter_application/app/data/repositories/login_repo.dart';
import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginBinding extends Bindings {
  @override
  void dependencies() {
    // Lazy put ApiProvider
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    // Lazy put LoginRepository with the injected ApiProvider
    Get.lazyPut<LoginRepository>(
        () => LoginRepository(apiProvider: Get.find<ApiProvider>()));
    // Lazy put LoginController with the injected LoginRepository
    Get.lazyPut<LoginController>(
        () => LoginController(loginRepository: Get.find<LoginRepository>()));
  }
}
