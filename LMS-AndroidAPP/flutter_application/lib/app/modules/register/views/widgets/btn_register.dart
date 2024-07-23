import 'package:flutter/material.dart';

import '../../../../core/styles/btn_style.dart';
import '../../../../core/utils/screensize.dart';
import '../../controllers/register_controller.dart';

class RegisterButton extends StatelessWidget {
  final RegisterController controller;
  const RegisterButton({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () {
          controller.mTapRegisterBtn();
        },
        style: AppSubmitBtnStyle.submit.copyWith(
            fixedSize: MaterialStatePropertyAll(
                Size(DeviceScreenWidth.eightyPercent, 0))),
        child: const Text("Register"));
    ;
  }
}
