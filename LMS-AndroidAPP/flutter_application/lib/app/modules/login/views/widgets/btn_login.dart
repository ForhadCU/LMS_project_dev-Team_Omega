import 'package:flutter/material.dart';
import 'package:flutter_application/app/modules/login/controllers/login_controller.dart';

import '../../../../core/styles/btn_style.dart';
import '../../../../core/utils/screensize.dart';

class LoginBtn extends StatelessWidget {
  final LoginController controller;
  const LoginBtn({
    super.key,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () {
          controller.mTapLoginBtn();
        },
        style: AppSubmitBtnStyle.submit.copyWith(
            fixedSize: MaterialStatePropertyAll(
                Size(DeviceScreenWidth.eightyPercent, 0))),
        child: const Text("Login"));
    ;
  }
}
