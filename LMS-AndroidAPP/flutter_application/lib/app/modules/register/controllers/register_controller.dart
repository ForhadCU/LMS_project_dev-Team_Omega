import 'package:flutter/material.dart';
import 'package:flutter_application/app/data/models/batches_response_model.dart';
import 'package:flutter_application/app/data/models/user_roles_response_model.dart';
import 'package:get/get.dart';

class RegisterController extends GetxController {
  final count = 0.obs;
  TextEditingController emailCtrl = TextEditingController();
  TextEditingController passCtrl = TextEditingController();
  TextEditingController userNameCtrl = TextEditingController();
  RxBool isSessionChecked = false.obs;
  Rx<UserRole> selectedUserRole = UserRole().obs;
  RxList<UserRole> userRoleList = <UserRole>[].obs;
  Rx<Batch> selectedBatch = Batch().obs;
  RxList<Batch> batchList = <Batch>[].obs;
  RxBool isLoading = true.obs;
  RxBool isPassObscure = true.obs;

  @override
  void onInit() {
    super.onInit();

    // some dummy data
    mGetUserRoleResponse();
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

  void mTapRegisterBtn() {
    // log(passCtrl.text);
    // Get.offNamed(Routes.CREATE_COURSES);
  }

  void mChangeUserRoleDropdownValue(UserRole userRole) {}
  void mChangeBatchDropdownValue(Batch batch) {}

  void mGetUserRoleResponse() async {}
  void mGetBatchResponse() async {}
}
