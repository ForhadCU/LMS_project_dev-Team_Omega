import 'package:flutter_application/app/data/repositories/course_details_repo.dart';
import 'package:get/get.dart';

class CourseDetailsController extends GetxController {
  final CourseDetailsRepo courseDetailsRepo;

  CourseDetailsController({required this.courseDetailsRepo});

  final count = 0.obs;
  @override
  void onInit() {
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

  void increment() => count.value++;
}
