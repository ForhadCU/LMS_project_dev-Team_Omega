import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/register/controllers/register_controller.dart';
import 'package:get/get.dart';

import '../../../../common_widgets/widgets_lib.dart';

class PassTextField extends StatelessWidget {
  final RegisterController controller;
  const PassTextField({super.key, required this.controller});

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
