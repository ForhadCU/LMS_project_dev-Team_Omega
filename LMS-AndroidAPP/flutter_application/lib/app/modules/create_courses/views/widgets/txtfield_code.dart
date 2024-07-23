import 'package:flutter/material.dart';

import '../../../../widgets/widgets_lib.dart';
import '../../controllers/create_courses_controller.dart';


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
