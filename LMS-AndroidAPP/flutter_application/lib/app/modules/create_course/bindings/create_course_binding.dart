import 'package:get/get.dart';

import '../controllers/create_course_controller.dart';

class CreateCourseBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateCourseController>(
      () => CreateCourseController(),
    );
  }
}
