import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../../core/values/colors.dart';
import '../../controllers/login_controller.dart';

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
