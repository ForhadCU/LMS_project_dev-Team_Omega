
import 'package:get/get.dart';
import '../../../core/core_lib.dart';
import '../../../widgets/baseWidget.dart';
import '../controllers/register_controller.dart';
import 'package:flutter/material.dart';

import 'widgets/btn_register.dart';
import 'widgets/dropdown_batch.dart';
import 'widgets/dropdown_user_role.dart';
import 'widgets/txtfld_email.dart';
import 'widgets/txtfld_pass.dart';
import 'widgets/txtfld_username.dart';

class RegisterView extends GetView<RegisterController> {
  const RegisterView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Register User",
        child: Center(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            UsernameTextFiled(controller: controller),
            AppSpacing.md.height,
            EmailTextField(controller: controller),
            AppSpacing.md.height,
            PassTextField(controller: controller),
            AppSpacing.md.height,
            UserRoleDropdown(controller: controller),
            AppSpacing.md.height,
            BatchDropdown(controller: controller),
            AppSpacing.xl.height,
            RegisterButton(controller: controller),
          ],
        )));
  }
}
/* 
  vEmailTextField() {
    return;
  }

  vPassTextField() {
    return;
  }

  vRegisterButton() {
    ;
  }

  vUserNameTextField() {
    return;
  }

  vUserRoles() {
    return;
  }

  vBatches() {
    return;
  } */