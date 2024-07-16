import 'package:get/get.dart';

import '../controllers/create_courses_controller.dart';

class CreateCoursesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateCoursesController>(
      () => CreateCoursesController(),
    );
  }
}
