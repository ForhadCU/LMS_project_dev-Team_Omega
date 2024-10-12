import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/widgets/waiting_dialog.dart';
import 'package:flutter_application/app/data/models/courses/payloads/create_course_payload.dart';
import 'package:flutter_application/app/data/models/users/params/user_data_param.dart';
import 'package:flutter_application/app/data/models/users/response/all_users_response.dart';
import 'package:flutter_application/app/data/repositories/create_course_repo.dart';
import 'package:get/get.dart';

import '../../../routes/app_pages.dart';

class CreateCourseController extends GetxController {
  final CreateCourseRepo repo;

  var selectedIndex = (-1).obs;
  CreateCourseController({required this.repo});

  // Observable list to track selected instructors
  var selectedInstructorsId = <String>[].obs;

  String selectedCourseType = "language";

  var allInstructors = <Datum>[].obs;

  late String userAccessToken;

  var isInitialLoading = true.obs;

  @override
  Future<void> onInit() async {
    userAccessToken = await repo.mGetSessionFromLocal() ?? "";
    await mGetAllInstructors();
    isInitialLoading.value = false;
    super.onInit();
  }

  // Toggle instructor selection
  void toggleInstructorSelection(String instructorId, int index) {
    if (selectedInstructorsId.contains(instructorId)) {
      selectedInstructorsId.remove(instructorId);
    } else {
      selectedIndex.value = index;
      selectedInstructorsId.add(instructorId);
    }
  }

  void mSaveCourse(
      GlobalKey<FormState> formKey,
      TextEditingController titleController,
      TextEditingController codeController,
      TextEditingController descriptionController,
      TextEditingController durationController) async {
    if (formKey.currentState!.validate() && selectedInstructorsId.isNotEmpty) {
      // show loading dialog
      showLoadingDialog();
      await AppHelpers().mWait();

      // send req, get res
      Map<String, dynamic> resBodyDecoded = await repo.mCreateCourse(
          userAccessToken: userAccessToken,
          createCoursePayload: CreateCoursePayload(
              title: titleController.text,
              code: codeController.text,
              description: descriptionController.text,
              duration: int.parse(durationController.text),
              instructors: selectedInstructorsId,
              courseType: selectedCourseType));

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

  mGetAllInstructors() async {
    UserDataResponse userDataResponse = await repo.mGetAllInstructors(
        userDataParam: UserDataParam(role: AppConstants.apiKeys.instructor),
        userAccessToken: userAccessToken);
    allInstructors.value = userDataResponse.data;
  }
}
