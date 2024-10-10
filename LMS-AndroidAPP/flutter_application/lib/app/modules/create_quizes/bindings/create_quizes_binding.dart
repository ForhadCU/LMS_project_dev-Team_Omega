import 'package:get/get.dart';

import '../controllers/create_quizes_controller.dart';

class CreateQuizesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateQuizesController>(
      () => CreateQuizesController(),
    );
  }
}
