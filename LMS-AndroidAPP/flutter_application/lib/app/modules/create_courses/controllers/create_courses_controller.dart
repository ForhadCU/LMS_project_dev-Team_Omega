import 'package:flutter/material.dart';
import '../../../routes/app_pages.dart';
import '../../../data/data_lib.dart';

import 'package:get/get.dart';

class CreateCoursesController extends GetxController {
  //TODO: Implement CreateCoursesController
  TextEditingController titleCtrlr = TextEditingController();
  TextEditingController codeCtrlr = TextEditingController();
  TextEditingController descCtrlr = TextEditingController();
  RxList<Student> students = <Student>[].obs;
  Rx<Student> student = Student().obs;
  RxList<Teacher> teachers = <Teacher>[].obs;
  Rx<Teacher> teacher = Teacher().obs;

  Rx<Student> selectedStudent = Student().obs;
  Rx<Teacher> selectedTeacher = Teacher().obs;

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

  void mTapCreateBtn() {
    Get.offNamed(Routes.HOME);
  }

  void mChangeStudentDropdownValue(Student student) {}
}
