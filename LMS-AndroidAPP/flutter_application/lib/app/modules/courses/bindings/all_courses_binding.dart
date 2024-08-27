import 'package:get/get.dart';

import '../controllers/all_courses_controller.dart';

class AllCoursesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<AllCoursesController>(
      () => AllCoursesController(),
    );
  }
}
