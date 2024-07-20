import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/login/controllers/login_controller.dart';
import 'package:get/get.dart';

import '../../../../core/values/colors.dart';

class SessionCheckbox extends StatelessWidget {
  final LoginController controller;
  const SessionCheckbox({
    super.key,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        const Text("Remember me"),
        Obx(() => Checkbox(
              checkColor: AppColor.defaultBg,
              value: controller.isSessionChecked.value,
              onChanged: (bool? value) {
                controller.isSessionChecked.value = value ?? false;
              },
            )),
      ],
    );
    ;
  }
}
