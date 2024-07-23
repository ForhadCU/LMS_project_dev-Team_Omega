import 'package:flutter/material.dart';

import '../../../../widgets/widgets_lib.dart';
import '../../controllers/register_controller.dart';

class EmailTextField extends StatelessWidget {
  final RegisterController controller;
  const EmailTextField({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return AppTextFiled(
      textEditingController: controller.emailCtrl,
      onChanged: (String value) {},
      title: "Email",
      prefixIconData: Icons.email,
    );
  }
}
