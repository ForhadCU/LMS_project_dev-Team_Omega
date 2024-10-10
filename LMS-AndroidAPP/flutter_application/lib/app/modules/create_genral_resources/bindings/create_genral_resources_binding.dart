import 'package:get/get.dart';

import '../controllers/create_genral_resources_controller.dart';

class CreateGenralResourcesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateGenralResourcesController>(
      () => CreateGenralResourcesController(),
    );
  }
}
