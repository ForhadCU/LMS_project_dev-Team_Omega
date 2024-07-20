import 'package:flutter/material.dart';
import 'package:get/get.dart';

class LoginController extends GetxController {
  //TODO: Implement HomeController

  final count = 0.obs;
  TextEditingController emailCtrl = TextEditingController();
  TextEditingController passCtrl = TextEditingController();
  RxBool isSessionChecked = false.obs;
  RxBool isPassObscure = true.obs;
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
