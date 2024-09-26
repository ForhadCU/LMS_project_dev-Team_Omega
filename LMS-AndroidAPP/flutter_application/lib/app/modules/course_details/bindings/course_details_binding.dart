import 'package:flutter_application/app/data/providers/api_provider.dart';
import 'package:flutter_application/app/data/repositories/course_details_repo.dart';
import 'package:get/get.dart';

import '../controllers/course_details_controller.dart';

class CourseDetailsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<CourseDetailsRepo>(
        () => CourseDetailsRepo(apiProvider: Get.find<ApiProvider>()));
    Get.lazyPut<CourseDetailsController>(
      () => CourseDetailsController(
          courseDetailsRepo: Get.find<CourseDetailsRepo>()),
    );
  }
}
