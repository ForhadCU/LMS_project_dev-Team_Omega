import 'package:flutter_application/app/data/repositories/create_gen_res_repo.dart';
import 'package:get/get.dart';

import '../../../data/providers/api_provider.dart';
import '../controllers/create_genral_resources_controller.dart';

class CreateGenralResourcesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<CreateGenResoursesRepo>(
        () => CreateGenResoursesRepo(apiProvider: Get.find<ApiProvider>()));

    Get.lazyPut<CreateGenralResourcesController>(
      () => CreateGenralResourcesController(
          repo: Get.find<CreateGenResoursesRepo>()),
    );
  }
}
