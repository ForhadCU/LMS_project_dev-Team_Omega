import 'package:flutter/material.dart';

import '../../../../widgets/textfield.dart';
import '../../controllers/create_courses_controller.dart';


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
