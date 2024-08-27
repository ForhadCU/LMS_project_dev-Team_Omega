import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/repositories/login_repo.dart';
import 'package:get/get.dart';

import 'package:flutter_application/app/data/models/login/payloads/login_payload.dart';

class LoginController extends GetxController {
  final LoginRepository loginRepository;

  LoginController({required this.loginRepository});

  final count = 0.obs;
  var emailCtrl = TextEditingController();
  var passCtrl = TextEditingController();
  var isSessionChecked = false.obs;
  var isPassObscure = true.obs;
  final _isLoading = false.obs;

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  // login user
  Future<void> mLoginUser(LoginPayload loginPayload) async {
    if (AppHelpers().isEmpty(loginPayload.email) &&
        AppHelpers().isEmpty(loginPayload.password)) {
      AppHelpers()
          .showSnackBarWarning(message: "Email and Password cannot be empty");
      return;
    }

    _isLoading.value = true;
    gLoggerNoStack.i("Loging start...");
    try {
      final response =
          await loginRepository.mLoginUser(loginPayload: loginPayload);

      if (response != null) {
        gLogger.t(response.toJson());
      } else {
        gLogger.i("response: null");
      }
    } catch (e) {
      gLogger.e(e, error: 'Api error');
      // AppHelpers().showSnackBarFailed(message: e.toString());
    } finally {
      _isLoading.value = false;
      gLoggerNoStack.i("Loging end...");
    }
  }

  mUpdateSessionChecked(bool v) {
    isSessionChecked.value = v;
  }

  void mTapLoginBtn() {
    // Get.offNamed(Routes.CREATE_COURSES);
  }

  void mTapRegisterText() {
    // Get.offNamed(Routes.REGISTER);
  }
}
