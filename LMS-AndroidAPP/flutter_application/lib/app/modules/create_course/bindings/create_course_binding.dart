import 'package:flutter_application/app/data/repositories/create_course_repo.dart';
import 'package:get/get.dart';

import '../../../data/providers/api_provider.dart';
import '../../../data/repositories/course_details_repo.dart';
import '../controllers/create_course_controller.dart';

class CreateCourseBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<CreateCourseRepo>(
        () => CreateCourseRepo(apiProvider: Get.find<ApiProvider>()));

    Get.lazyPut<CreateCourseController>(
      () => CreateCourseController(repo: Get.find<CreateCourseRepo>()),
    );
  }
}
