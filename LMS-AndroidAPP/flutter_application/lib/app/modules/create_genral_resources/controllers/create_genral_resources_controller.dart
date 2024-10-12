import 'package:flutter/src/widgets/editable_text.dart';
import 'package:flutter/src/widgets/form.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_application/app/data/models/contents/payloads/create_general_resources_payload.dart';
import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../../../core/widgets/waiting_dialog.dart';
import '../../../data/models/login/responses/login_response_model.dart';
import '../../../data/repositories/create_gen_res_repo.dart';

class CreateGenralResourcesController extends GetxController {
  final CreateGenResoursesRepo repo;
  CreateGenralResourcesController({required this.repo});
  late String _userAccessToken;
  late LoginResponse _currentUserData;

  final count = 0.obs;
  @override
  void onInit() async {
    _currentUserData = await repo.mGetCurrentUserDataFromLocal();
    _userAccessToken = _currentUserData.accesToken;
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

  void mSaveGeneralResource(
    GlobalKey<FormState> formKey,
    TextEditingController titleController,
    TextEditingController descriptionController,
    TextEditingController contentLinkController,
  ) async {
    if (formKey.currentState!.validate()) {
    
      showLoadingDialog();
      await AppHelpers().mWait();
      // send req, get res
      Map<String, dynamic> resBodyDecoded = await repo.mSaveGeneralResource(
          userAccessToken: _userAccessToken,
          payload: CreateGeneralResourcesPayload(
              title: titleController.text,
              description: descriptionController.text,
              img: "https://m.media-amazon.com/images/I/61I7nyAHeLL._AC_UF894,1000_QL80_.jpg",
              link: contentLinkController.text,
              status: "pending"));
      Get.back();

      if (resBodyDecoded['success']) {
        AppHelpers().showSnackBarSuccess(message: resBodyDecoded['message']);
        AppHelpers().mNavigateToHome();
      } else
        AppHelpers().showSnackBarWarning(message: resBodyDecoded['message']);
    } else {
      AppHelpers()
          .showSnackBarWarning(message: "Field is empty", title: "Warning");
    }
  }
}
