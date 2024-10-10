import 'package:flutter/src/widgets/form.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/get.dart';

class CreateCourseContentsController extends GetxController {  // Observable for content type selection
  var selectedContentType = 'lecture'.obs;

  // Method to update content type
  void updateContentType(String newType) {
    selectedContentType.value = newType;
  }

  void mSaveCourseContent(GlobalKey<FormState> formKey) {}
}
