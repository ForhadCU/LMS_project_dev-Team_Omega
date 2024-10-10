import 'package:flutter/src/widgets/form.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/get.dart';

class CreateQuizesController extends GetxController {
  // Observable for quiz type selection
  var selectedQuizType = 'daily'.obs;

  // Method to update quiz type
  void updateQuizType(String newType) {
    selectedQuizType.value = newType;
  }

  void mSaveQuiz(GlobalKey<FormState> formKey) {}
}
