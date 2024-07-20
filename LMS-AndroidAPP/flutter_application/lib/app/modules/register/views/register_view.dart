import 'package:flutter_application/app/core/styles/spacing_style.dart';
import 'package:flutter_application/app/core/utils/int_extensions.dart';
import 'package:flutter_application/app/modules/register/views/widgets/dropdown_batch.dart';
import 'package:flutter_application/app/modules/register/views/widgets/txtfld_email.dart';
import 'package:flutter_application/app/modules/register/views/widgets/txtfld_pass.dart';
import 'package:flutter_application/app/modules/register/views/widgets/btn_register.dart';
import 'package:flutter_application/app/modules/register/views/widgets/dropdown_user_role.dart';
import 'package:flutter_application/app/modules/register/views/widgets/txtfld_username.dart';
import 'package:flutter_application/app/common_widgets/baseWidget.dart';
import 'package:get/get.dart';
import '../controllers/register_controller.dart';
import 'package:flutter/material.dart';

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