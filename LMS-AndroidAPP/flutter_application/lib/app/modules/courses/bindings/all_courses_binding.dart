import 'package:flutter_application/app/data/repositories/courses_repo.dart';
import 'package:get/get.dart';

import '../../../core/utils/common_controller.dart';
import '../../../data/providers/api_provider.dart';
import '../controllers/all_courses_controller.dart';

class AllCoursesBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<CoursesRepo>(
        () => CoursesRepo(apiProvider: Get.find<ApiProvider>()));
    Get.lazyPut<AllCoursesController>(
        () => AllCoursesController(repo: Get.find<CoursesRepo>()));
    Get.lazyPut<CommonController>(() => CommonController());
  }
}
