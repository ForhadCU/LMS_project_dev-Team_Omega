import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/create_courses/controllers/create_courses_controller.dart';
import 'package:flutter_application/app/common_widgets/widgets_lib.dart';

class CodeTextFiled extends StatelessWidget {
  final CreateCoursesController controller;
  const CodeTextFiled({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return AppTextFiled(
        title: "Course Code",
        onChanged: (String text) {},
        textEditingController: controller.codeCtrlr);
  }
}
