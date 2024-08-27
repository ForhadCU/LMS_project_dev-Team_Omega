import 'package:flutter_application/app/data/models/login/payloads/login_payload.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';
import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/login_controller.dart';

class LoginView extends GetView<LoginController> {
  const LoginView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Login",
        child: Center(
            child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _vLogo(),
              AppSpacing().md.height,
              _vEmailTextField(),
              AppSpacing().md.height,
              _vPassTextField(),
              AppSpacing().md.height,
              _vSessionCheckbox(),
              AppSpacing().xl.height,
              _vLoginBtn(),
              AppSpacing().xxl.height,
              _vForgotPass(),
            ],
          ),
        )));
  }

  _vForgotPass() {
    return InkWell(
      onTap: () {},
      child: Text(
        "Forgot password?",
        style: AppTextStyle().normal.copyWith(
              color: AppColor().secondary,
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
        AppAssetLocations().ic_bjet,
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
          prefixIconData: Icons.lock,
          suffixIconData: controller.isPassObscure.value
              ? Icons.visibility_off
              : Icons.visibility,
          onTapSuffixIcon: () {
            controller.isPassObscure.value = !controller.isPassObscure.value;
          },
        ));
  }

  _vSessionCheckbox() {
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
  }

  _vLoginBtn() {
    return NeumorphicButton(
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
    );
  }

  void _mLoginBtn() async {
    await controller.mLoginUser(LoginPayload(
      email: controller.emailCtrl.text,
      password: controller.passCtrl.text,
    ));
  }
}
