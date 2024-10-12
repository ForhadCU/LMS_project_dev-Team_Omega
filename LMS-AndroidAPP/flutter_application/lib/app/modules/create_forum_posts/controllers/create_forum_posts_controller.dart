import 'package:flutter/cupertino.dart';
import 'package:flutter/src/widgets/editable_text.dart';
import 'package:flutter/src/widgets/form.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/forums/payloads/create_new_forum_payload.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../../../core/widgets/waiting_dialog.dart';
import '../../../data/repositories/create_forum_repo.dart';

class CreateForumPostsController extends GetxController {
  //TODO: Implement CreateForumPostsController
  final CreateForumRepo repo;
  CreateForumPostsController({required this.repo});
  late String userAccessToken;
  late LoginResponse _currentUserData;

  final count = 0.obs;
  @override
  void onInit() async {
    _currentUserData = await repo.mGetCurrentUserDataFromLocal();
    userAccessToken = _currentUserData.accesToken;
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

  void mSaveForumPost(
    GlobalKey<FormState> formKey,
    TextEditingController titleController,
    TextEditingController descriptionController,
  ) async {
    if (formKey.currentState!.validate()) {
      showLoadingDialog();
      await AppHelpers().mWait();

      // send req, get res
      Map<String, dynamic> resBodyDecoded = await repo.mSaveForumPost(
          userAccessToken: userAccessToken,
          payload: CreateNewForumPayload(
              userId: _currentUserData.data.id,
              title: titleController.text,
              body: descriptionController.text,
              imgs: [],
              likes: 0,
              createdAt: DateTime.now(),
              updatedAt: DateTime.now()));

      // dismiss loading dialog
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
