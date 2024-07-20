import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/create_courses/controllers/create_courses_controller.dart';
import 'package:flutter_application/app/common_widgets/widgets_lib.dart';

class TitleTextFiled extends StatelessWidget {
  final CreateCoursesController controller;
  const TitleTextFiled({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return AppTextFiled(
        title: "Title",
        onChanged: (String text) {},
        textEditingController: controller.titleCtrlr);
  }
}
