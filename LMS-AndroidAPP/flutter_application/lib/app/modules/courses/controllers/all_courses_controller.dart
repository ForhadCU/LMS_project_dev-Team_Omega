import 'package:get/get.dart';

import '../../../core/utils/common_controller.dart';

class AllCoursesController extends GetxController {
  //TODO: Implement HomeController

  final count = 0.obs;
  CommonController commonController = Get.find();
  @override
  void onInit() {
    print("Called Home Controller");

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

  openDrawer() {
    commonController.openDrawer();
  }

  void increment() => count.value++;
}
