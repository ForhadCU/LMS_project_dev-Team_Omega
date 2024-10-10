import 'package:get/get.dart';

import '../controllers/create_course_contents_controller.dart';

class CreateCourseContentsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateCourseContentsController>(
      () => CreateCourseContentsController(),
    );
  }
}
