import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/data/repositories/login_repo.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
import 'package:get/get.dart';

import 'package:flutter_application/app/data/models/login/payloads/login_payload.dart';

class LoginController extends GetxController {
  final LoginRepository repo;

  LoginController({required this.repo});

  final count = 0.obs;
  var emailCtrl = TextEditingController();
  var passCtrl = TextEditingController();

  // Observables for managing UI state
  // var isSessionChecked = false.obs;
  var isPassObscure = true.obs;
  var isLoading = false.obs;
  var isSuccess = false.obs;
  var isFailed = false.obs;

  @override
  void onInit() {
    super.onInit();
  }

  // Login method
  Future<void> handleLogin(LoginPayload loginPayload) async {
    if (_validateInput(loginPayload)) {
      _showInputError();
      return;
    }

    // Start loading
    _setLoadingState();

    try {
      // Attempt login
      final response = await repo.mLoginUser(loginPayload: loginPayload);
      late bool isAccessTokenSaved;
      response != null
          ? {
              isAccessTokenSaved =
                  await _saveAccessToken(response.accesToken ?? ""),
              await _saveCurrentUserData(response),
            }
          : false;

      // Update UI state
      _updateState(response, isAccessTokenSaved);

      // Navigate if successful
      if (isSuccess.value) {
        // Show success message or animation

        // To finish button animation
        await Future.delayed(const Duration(milliseconds: 800));

        Get.offAllNamed(Routes.HOME);
      }
    } catch (e) {
      _handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  // Private methods
  bool _validateInput(LoginPayload loginPayload) {
    return AppHelpers().isEmpty(loginPayload.email) ||
        AppHelpers().isEmpty(loginPayload.password);
  }

  void _showInputError() {
    AppHelpers()
        .showSnackBarWarning(message: "Email or Password cannot be empty");
  }

  void _setLoadingState() {
    isLoading.value = true;
    isSuccess.value = false;
    isFailed.value = false;
    gLoggerNoStack.t("Logging start...");
  }

  Future<bool> _saveAccessToken(String accessToken) async {
    return await repo.mSaveSessionToLocal(value: accessToken);
  }

  void _updateState(LoginResponse? response, bool isAccessTokenSaved) {
    isSuccess.value = response != null && isAccessTokenSaved;
    isFailed.value = !isSuccess.value;
    gLoggerNoStack.t("Logging end...");
  }

  void _handleError(dynamic e) {
    gLogger.e(e, error: 'Api error');
    AppHelpers().showSnackBarFailed(message: 'Login failed. Please try again.');
  }

/*   mUpdateSessionChecked(bool v) {
    isSessionChecked.value = v;
  } */

  void mTapLoginBtn() {
    // Get.offNamed(Routes.CREATE_COURSES);
  }

  void mTapRegisterText() {
    // Get.offNamed(Routes.REGISTER);
  }

  void mHandleForgotPassBtn() {}

  void mHandleForgotPassText() {
    Get.toNamed(Routes.PASSWORD_RECOVER);
  }

  _saveCurrentUserData(LoginResponse response) async {
    // convert respnse object to json and then encode this json to  String
    String jsonString = jsonEncode(response.toJson());
    repo.mSaveCurrentUserDataToLocal(
      value: jsonString,
      key: AppConstants.apiKeys.currentUserData,
    );
  }
}
