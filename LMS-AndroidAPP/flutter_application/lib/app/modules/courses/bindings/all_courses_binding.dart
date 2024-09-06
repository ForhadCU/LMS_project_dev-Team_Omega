import 'package:get/get.dart';

import '../../../core/utils/common_controller.dart';
import '../controllers/all_courses_controller.dart';

class AllCoursesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<AllCoursesController>(
      () => AllCoursesController(),
    );
    Get.lazyPut<CommonController>(() => CommonController());
  }
}
