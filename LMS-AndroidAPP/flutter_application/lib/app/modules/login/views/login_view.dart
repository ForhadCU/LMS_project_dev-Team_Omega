import 'package:get/get.dart';

import 'package:flutter/material.dart';

import '../../../core/core_lib.dart';
import '../../../widgets/widgets_lib.dart';
import '../controllers/login_controller.dart';
import 'widgets/btn_login.dart';
import 'widgets/checkbx_session.dart';
import 'widgets/txtfld_email.dart';
import 'widgets/txtfld_pass.dart';

class LoginView extends GetView<LoginController> {
  const LoginView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Login",
        child: Center(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            EmailTextField(controller: controller),
            AppSpacing.md.height,
            PassTextField(controller: controller),
            AppSpacing.md.height,
            SessionCheckbox(controller: controller),
            AppSpacing.xl.height,
            LoginBtn(controller: controller),
           
          ],
        )));
  }
}