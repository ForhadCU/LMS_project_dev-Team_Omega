import 'package:flutter/src/widgets/form.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/get.dart';

class CreateCourseController extends GetxController {
  //TODO: Implement CreateCourseController

  // Observable list to track selected instructors
  var selectedInstructors = <String>[].obs;

  // Toggle instructor selection
  void toggleInstructorSelection(String instructorId) {
    if (selectedInstructors.contains(instructorId)) {
      selectedInstructors.remove(instructorId);
    } else {
      selectedInstructors.add(instructorId);
    }
  }

  void mSaveCourse(GlobalKey<FormState> formKey) {
    if (formKey.currentState!.validate()) {
      
    }
  }
}
