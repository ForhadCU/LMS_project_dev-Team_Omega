import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/courses/params/all_courses_of_instructor_param.dart';
import 'package:flutter_application/app/data/models/courses/responses/all_courses_of_instructor_response.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/data/repositories/courses_repo.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
import 'package:get/get.dart';

import '../../../core/utils/common_controller.dart';

class AllCoursesController extends GetxController {
  final CoursesRepo repo;
  AllCoursesController({required this.repo});

  final count = 0.obs;
  CommonController commonController = Get.find();
  final myCourses = <Datum>[].obs;
  late final LoginResponse userData;
  var isInitialLoading = true.obs;
  @override
  void onInit() async {
    userData = await AppHelpers().mGetCurrentUserDataFromLocal();
    await mGetMyCourses();

    // initial loading
    await AppHelpers().mWait();
    isInitialLoading.value = false;

    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  openDrawer() {
    commonController.openDrawer();
  }

  void increment() => count.value++;

  void mNavigateToDtailsPage(Datum clickedCourse) {
    Get.toNamed(Routes.COURSE_DETAILS, arguments: clickedCourse);
  }

  mGetMyCourses() async {
    final AllCoursesOfInstructorResponse response = await repo.mGetMyCourses(
        token: userData.accesToken,
        param: AllCoursesOfInstructorParams(instructors: userData.data.id));
    myCourses.value = response.data;
  }
}
