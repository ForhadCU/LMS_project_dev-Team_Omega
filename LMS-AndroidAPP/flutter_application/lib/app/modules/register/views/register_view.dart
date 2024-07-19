import 'dart:developer';
import 'dart:html';

import 'package:flutter_application/app/core/styles/btn_style.dart';
import 'package:flutter_application/app/core/styles/spacing_style.dart';
import 'package:flutter_application/app/core/styles/txt_style.dart';
import 'package:flutter_application/app/core/utils/int_extensions.dart';
import 'package:flutter_application/app/core/utils/screensize.dart';
import 'package:flutter_application/app/modules/register/views/widgets/user_role_dropdown.dart';
import 'package:flutter_application/app/widgets/baseWidget.dart';
import 'package:flutter_application/app/widgets/textfields.dart';
import 'package:get/get.dart';
import '../../../core/values/colors.dart';
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
            vUserNameTextField(),
            AppSpacing.md.height,
            vEmailTextField(),
            AppSpacing.md.height,
            vPassTextField(),
            AppSpacing.md.height,
            vUserRoles(),
            AppSpacing.md.height,
            vBatches(),
            AppSpacing.xl.height,
            vRegisterButton(),
          ],
        )));
  }

  vEmailTextField() {
    return TextFormField(
      controller: controller.emailCtrl,
      onChanged: (String value) {},
      textInputAction: TextInputAction.next,
      textAlignVertical: TextAlignVertical.center,
      textAlign: TextAlign.left,
      decoration: InputDecoration(
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
          color: AppColor.primary,
        )),
        floatingLabelStyle: TextStyle(color: AppColor.primary),
        label: Text(
          "Email",
        ),
        prefixIcon: Icon(
          Icons.email,
          color: AppColor.secondaryIcon,
        ),
        isDense: true,
        contentPadding: EdgeInsets.all(AppSpacing.md),
        enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: AppColor.textFieldBorder)),
      ),
    );
  }

  vPassTextField() {
    return Row(
      children: [
        Expanded(
          child: TextFormField(
            controller: controller.passCtrl,
            obscureText: false,
            textInputAction: TextInputAction.next,
            textAlignVertical: TextAlignVertical.center,
            textAlign: TextAlign.left,
            decoration: const InputDecoration(
              focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                color: AppColor.primary,
              )),
              floatingLabelStyle: TextStyle(color: AppColor.primary),
              label: Text(
                "Password",
              ),
              prefixIcon: Icon(
                Icons.lock,
                color: AppColor.secondaryIcon,
              ),
              suffixIcon: Icon(
                Icons.visibility,
                color: AppColor.secondaryIcon,
              ),
              isDense: true,
              contentPadding: EdgeInsets.all(AppSpacing.md),
              enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: AppColor.textFieldBorder)),
            ),
          ),
        ),
      ],
    );
  }

  vRegisterButton() {
    return ElevatedButton(
        onPressed: () {
          controller.mTapRegisterBtn();
        },
        style: AppSubmitBtnStyle.submit.copyWith(
            fixedSize: MaterialStatePropertyAll(
                Size(DeviceScreenWidth.eightyPercent, 0))),
        child: const Text("Register"));
  }

  vGotoSingup() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          "Already have account?",
          style: AppTextStyle.normal,
        ),
        AppSpacing.sm.width,
        Text(
          "Register",
          style: AppTextStyle.clickable,
        )
      ],
    );
  }

  vUserNameTextField() {
    return TextFormField(
      controller: controller.userNameCtrl,
      onChanged: (String value) {},
      textInputAction: TextInputAction.next,
      textAlignVertical: TextAlignVertical.center,
      textAlign: TextAlign.left,
      decoration: InputDecoration(
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
          color: AppColor.primary,
        )),
        floatingLabelStyle: TextStyle(color: AppColor.primary),
        label: Text(
          "Username",
        ),
        prefixIcon: Icon(
          Icons.person,
          color: AppColor.secondaryIcon,
        ),
        isDense: true,
        contentPadding: EdgeInsets.all(AppSpacing.md),
        enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: AppColor.textFieldBorder)),
      ),
    );
  }

  vUserRoles() {
    return UserRoleDropdown(controller: controller);
  }

  vBatches() {
    return UserRoleDropdown(controller: controller);
  }
}
