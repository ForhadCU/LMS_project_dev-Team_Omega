import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/login/payloads/login_payload.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';
import 'package:get/get.dart';
import 'package:loading_btn/loading_btn.dart';
import 'package:loading_btn/loading_btn.dart';

import '../../../core/core_lib.dart';
import '../controllers/login_controller.dart';

class LoginView extends GetView<LoginController> {
  const LoginView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppColor.secondaryBg,
        appBar: AppBar(
          title: Text("Login".toUpperCase()),
          backgroundColor: Colors.white,
          elevation: 0,
        ),
        body: Center(
            child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                _vLogo(),
                AppSpacing().xxl.height,
                _vEmailTextField(),
                AppSpacing().md.height,
                _vPassTextField(),
                /*       AppSpacing().md.height,
                _vSessionCheckbox(), */
                AppSpacing().xxl.height,
                _vLoginBtn(),
                AppSpacing().xxl.height,
                _vForgotPass(),
              ],
            ),
          ),
        )));
  }

  _vForgotPass() {
    return InkWell(
      onTap: () {
        controller.mHandleForgotPassText();
      },
      child: Text(
        "Forgot password?",
        style: AppTextStyle().normal.copyWith(
              color: AppColor.secondary,
            ),
      ),
    );
  }

  _vEmailTextField() {
    return AppTextFiled(
      title: "Email",
      onChanged: (String text) {},
      textEditingController: controller.emailCtrl,
      prefixIconData: Icons.email,
    );
  }

  _vLogo() {
    return Image(
      image: AssetImage(
        AppAssetLocations.ic_bjet,
      ),
      height: DeviceScreenHeight.twentyPercent,
      fit: BoxFit.contain,
    );
  }

  _vPassTextField() {
    return Obx(() => AppTextFiled(
          title: "Password",
          textEditingController: controller.passCtrl,
          isObscureText: controller.isPassObscure.value,
          textInputAction: TextInputAction.done,
          prefixIconData: Icons.lock,
          suffixIconData: controller.isPassObscure.value
              ? Icons.visibility_off
              : Icons.visibility,
          onTapSuffixIcon: () {
            controller.isPassObscure.value = !controller.isPassObscure.value;
          },
        ));
  }

  /* _vSessionCheckbox() {
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
  } */

  _vLoginBtn() {
    return Obx(
      () => AnimatedContainer(
        duration: const Duration(milliseconds: 500),
        width: controller.isLoading.value && !controller.isSuccess.value
            ? 100
            : DeviceScreenWidth.seventyPercent,
        height: DeviceScreenHeight.tenPercent / 2.2,
        curve: Curves.easeInOut,
        decoration: BoxDecoration(
            color: AppColor.primary, borderRadius: BorderRadius.circular(50)),
        child: ElevatedButton(
          onPressed: () {
            controller.isLoading.value
                ? null
                : controller.handleLogin(LoginPayload(
                    email: controller.emailCtrl.text,
                    password: controller.passCtrl.text));
            // controller.isLoading.value ? null : controller.handleButtonClick();
          },
          style: ElevatedButton.styleFrom(),
          child: controller.isLoading.value && !controller.isSuccess.value
              ? const SizedBox(
                  height: 24,
                  width: 24,
                  child: CircularProgressIndicator(
                    strokeWidth: 2,
                    backgroundColor: Colors.white,
                  ),
                )
              : controller.isSuccess.value
                  ? Icon(Icons.done, color: AppColor.defaultBg)
                  /* : controller.isFailed.value
                      ? Icon(Icons.error, color: AppColor.appRed,) */
                  : Text(
                      'Login',
                    ),
        ),
      ),
    );

    /* return NeumorphicButton(
      onPressed: () {
        _mLoginBtn();
      },
      
      
      style: AppButtonStyle().submit,
      child: Container(
        width: DeviceScreenWidth.seventyPercent,
        alignment: Alignment.center,
        child: const Text(
          'Login',
          style: TextStyle(
            fontSize: 18,
            color: Colors.white,
          ),
        ),
      ),
    ); */
  }
}
