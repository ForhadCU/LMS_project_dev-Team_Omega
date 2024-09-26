import 'package:flutter/material.dart';
import 'package:flutter_application/app/data/models/password_recover/payloads/change_pass_payload.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/password_recover_controller.dart';

class PasswordRecoverView extends GetView<PasswordRecoverController> {
  const PasswordRecoverView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Change Password",
        child: Center(
            child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _vLogo(),
              (AppSpacing().xxl*2).height,
              _vPassTextField(),
              AppSpacing().xxl.height,
              _vPassSubmitBtn(),
            ],
          ),
        )));
  }

  _vPassSubmitBtn() {
    return Obx(
      () => AnimatedContainer(
        duration: const Duration(milliseconds: 500),
        width: controller.isLoading.value && !controller.isSuccess.value
            ? 100
            : DeviceScreenWidth.seventyPercent,
        height: DeviceScreenHeight.tenPercent / 2.2,
        curve: Curves.easeInOut,
        decoration: BoxDecoration(
            color: AppColor().primary, borderRadius: BorderRadius.circular(50)),
        child: ElevatedButton(
          onPressed: () {
            controller.isLoading.value
                ? null
                : controller.handlePassRecovery(ChangePasswordPayload(
                    newPassword: controller.passCtrl.text));
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
                  ? Icon(Icons.done, color: AppColor().defaultBg)
                  /* : controller.isFailed.value
                      ? Icon(Icons.error, color: AppColor().appRed,) */
                  : Text(
                      'Submit',
                    ),
        ),
      ),
    );
  }

  _vLogo() {
    return Image(
      image: AssetImage(
        AppAssetLocations().ic_forgot_password,
      ),
      height: DeviceScreenHeight.tenPercent,
      fit: BoxFit.contain,
    );
  }

  _vPassTextField() {
    return Obx(() => AppTextFiled(
          title: "New Password",
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
}
