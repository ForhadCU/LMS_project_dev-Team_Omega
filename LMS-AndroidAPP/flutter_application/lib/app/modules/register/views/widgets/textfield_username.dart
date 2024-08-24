import 'package:flutter/material.dart';


import '../../../../widgets/textfield.dart';
import '../../controllers/register_controller.dart';

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
