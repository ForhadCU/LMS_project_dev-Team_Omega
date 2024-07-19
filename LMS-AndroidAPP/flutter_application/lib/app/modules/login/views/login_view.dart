import 'package:flutter_application/app/core/styles/btn_style.dart';
import 'package:flutter_application/app/core/styles/spacing_style.dart';
import 'package:flutter_application/app/core/styles/txt_style.dart';
import 'package:flutter_application/app/core/utils/int_extensions.dart';
import 'package:flutter_application/app/core/utils/screensize.dart';
import 'package:flutter_application/app/widgets/baseWidget.dart';
import 'package:get/get.dart';
import '../../../core/values/colors.dart';
import '../controllers/login_controller.dart';
import 'package:flutter/material.dart';

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
            vEmailTextField(),
            AppSpacing.md.height,
            vPassTextField(),
            AppSpacing.md.height,
            vSessionCheckBox(),
            AppSpacing.xl.height,
            vLoginButton(),
            /* AppSpacing.xl.height,
            vGotoRegister(), */
          ],
        )));
  }

  vEmailTextField() {
    return Row(
      children: [
        Expanded(
          child: TextFormField(
            controller: controller.emailCtrl,
            onChanged: (String value) {},
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
          ),
        ),
      ],
    );
  }

  vPassTextField() {
    return Row(
      children: [
        Expanded(
          child: TextFormField(
            controller: controller.passCtrl,
            onChanged: (String value) {},
            obscureText: true,
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
                Icons.visibility_off,
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

  vLoginButton() {
    return ElevatedButton(
        onPressed: () {
          controller.mTapLoginBtn();
        },
        style: AppSubmitBtnStyle.submit.copyWith(
            fixedSize: MaterialStatePropertyAll(
                Size(DeviceScreenWidth.eightyPercent, 0))),
        child: const Text("Login"));
  }

  vSessionCheckBox() {
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
  }

  vGotoRegister() {
    return InkWell(
      onTap: () {
        controller.mTapRegisterText();
      },
      child: Row(
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
      ),
    );
  }
}
