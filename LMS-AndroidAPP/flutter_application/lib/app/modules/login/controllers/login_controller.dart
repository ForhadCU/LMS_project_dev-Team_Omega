import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/data/repositories/login_repo.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
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
  Future<LoginResponse?> mLoginUser(LoginPayload loginPayload) async {
    if (AppHelpers().isEmpty(loginPayload.email) &&
        AppHelpers().isEmpty(loginPayload.password)) {
      AppHelpers()
          .showSnackBarWarning(message: "Email and Password cannot be empty");
      return null;
    }

    try {
      // send login request
      return await loginRepository.mLoginUser(loginPayload: loginPayload);
    } catch (e) {
      gLogger.e(e, error: 'Api error');
      // AppHelpers().showSnackBarFailed(message: e.toString());
    } finally {}
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

  ////////// Animated button ///////////////
  var isLoading = false.obs;
  var isSuccess = false.obs;
  var isFailed = false.obs;

  handleButtonClick(LoginPayload loginPayload) async {
    isLoading.value = true;
    isSuccess.value = false;
    isFailed.value = false;
    gLoggerNoStack.t("Logging start...");

    // send login request
    LoginResponse? response = await mLoginUser(loginPayload);

    bool? isAccessTokenSave = false;

    if (response != null) {
      gLoggerNoStack.i(response.message);
      // save token to local
      isAccessTokenSave = await _mSaveSessionToLocal(response.accesToken ?? "");
    } else {
      gLogger.i("response: null");
    }
    // control login button
    isLoading.value = false;
    isSuccess.value = response != null && isAccessTokenSave;
    isFailed.value = !isSuccess.value;
    gLoggerNoStack.t("Logging end...");

    // Navigate to Home
    if (response != null && isAccessTokenSave) {
      Get.offAllNamed(Routes.HOME);
    }
  }

  Future<bool> _mSaveSessionToLocal(String accessToken) async {
    return await loginRepository.mSaveSessionToLocal(value: accessToken);
  }
}
