import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/password_recover/payloads/change_pass_payload.dart';
import 'package:flutter_application/app/data/models/password_recover/responses/chnage_pass_response_model.dart';
import 'package:flutter_application/app/data/repositories/password_recover_repo.dart';
import 'package:get/get.dart';
import 'package:loading_btn/loading_btn.dart';

class PasswordRecoverController extends GetxController {
  final PasswordRecoverRepository passwordRecoverRepository;
  PasswordRecoverController({required this.passwordRecoverRepository});

  var emailCtrl = TextEditingController();
  var passCtrl = TextEditingController();

  // Observables for managing UI state
  // var isSessionChecked = false.obs;
  var isPassObscure = true.obs;
  var isLoading = false.obs;
  var isSuccess = false.obs;
  var isFailed = false.obs;

  final count = 0.obs;
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

  void increment() => count.value++;

  // password changing method
  Future<void> handlePassRecovery(
      ChangePasswordPayload changePasswordPayload) async {
    if (_validateInput(changePasswordPayload)) {
      _showInputError();
      return;
    }

    // start loading
    _setLoadingState();

    try {
      // get user access token from local store
      final userAccessToken =
          await passwordRecoverRepository.mGetSessionFromLocal();

      // Attempt change password
      final response = await passwordRecoverRepository.mChangePassword(
          changePasswordPayload: changePasswordPayload,
          userAccessToken: userAccessToken);

      // show success or failure message
      _mShowMessage(response);

      // Update UI state
      _updateState(response);
    } catch (e) {
      _handleError(e);
    } finally {
      isLoading.value = false;
    }
  }

  void _handleError(dynamic e) {
    gLogger.e(e, error: 'Api error');
    AppHelpers().showSnackBarFailed(message: 'Login failed. Please try again.');
  }

  bool _validateInput(ChangePasswordPayload changePasswordPayload) {
    return AppHelpers().isEmpty(changePasswordPayload.newPassword);
  }

  void _showInputError() {
    AppHelpers().showSnackBarWarning(
        title: "Invalid Input", message: "Enter a new password");
  }

  void _setLoadingState() {
    isLoading.value = true;
    isSuccess.value = false;
    isFailed.value = false;
    gLoggerNoStack.t("Loading Start...");
  }

  void _updateState(ChangePasswordResponseModel? response) {
    isSuccess.value = response != null;
    isFailed.value = !isSuccess.value;
    gLoggerNoStack.t("Loading Ended.");
  }

  void _mShowMessage(ChangePasswordResponseModel? response) {
    if (response != null) {
      AppHelpers().showSnackBarSuccess(message: "Changed password");
    } else {
      AppHelpers().showSnackBarFailed(message: "Failed to change password");
    }
  }
}
