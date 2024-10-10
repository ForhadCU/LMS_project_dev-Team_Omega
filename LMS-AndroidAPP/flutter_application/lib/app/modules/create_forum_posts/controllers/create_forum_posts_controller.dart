import 'package:flutter/src/widgets/form.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/get.dart';

class CreateForumPostsController extends GetxController {
  //TODO: Implement CreateForumPostsController

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

  void mSavePost(GlobalKey<FormState> formKey) {}
}
