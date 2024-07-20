import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/register/controllers/register_controller.dart';
import 'package:flutter_application/app/common_widgets/widgets_lib.dart';

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
