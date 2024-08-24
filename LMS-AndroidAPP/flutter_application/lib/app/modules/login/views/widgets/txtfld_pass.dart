import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../../widgets/textfield.dart';

import '../../controllers/login_controller.dart';

class PassTextField extends StatelessWidget {
  final LoginController controller;
  const PassTextField({
    super.key,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    return Obx(() => AppTextFiled(
          title: "Password",
          textEditingController: controller.passCtrl,
          isObscureText: controller.isPassObscure.value,
          prefixIconData: Icons.lock,
          suffixIconData: controller.isPassObscure.value
              ? Icons.visibility_off
              : Icons.visibility,
          onTapSuffixIcon: () {
            controller.isPassObscure.value = !controller.isPassObscure.value;
          },
        ));
  }
}
