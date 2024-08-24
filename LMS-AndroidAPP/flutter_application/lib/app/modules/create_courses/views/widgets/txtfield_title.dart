import 'package:flutter/material.dart';


import '../../../../widgets/textfield.dart';
import '../../controllers/create_courses_controller.dart';

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
