import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/create_courses/controllers/create_courses_controller.dart';
import 'package:flutter_application/app/common_widgets/widgets_lib.dart';

class DescTextFiled extends StatelessWidget {
  final CreateCoursesController controller;
  const DescTextFiled({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return AppTextFiled(
        title: "Description",
        onChanged: (String text) {},
        textEditingController: controller.descCtrlr);
  }
}
