import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/register/controllers/register_controller.dart';
import 'package:flutter_application/app/common_widgets/widgets_lib.dart';

class UsernameTextFiled extends StatelessWidget {
  final RegisterController controller;
  const UsernameTextFiled({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return AppTextFiled(
      textEditingController: controller.userNameCtrl,
      onChanged: (String value) {},
      title: "Username",
      prefixIconData: Icons.person,
    );
  }
}
