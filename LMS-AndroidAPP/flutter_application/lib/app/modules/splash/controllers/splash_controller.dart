import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../../../routes/app_pages.dart';

class SplashController extends GetxController {
  //TODO: Implement HomeController

  final count = 0.obs;

  var fontsize = 0.0.obs;
  @override
  void onInit() async {
    super.onInit();
    // print("Called Splash Controller");
    mSaveAppData();
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

  mSaveAppData() async {
    // appFontsize = DeviceScreenLongestSide.tenPercent;
    // print("before");
    await Future.delayed(Duration(seconds: 2));
    Get.offNamed(Routes.LOGIN);
    // print("after");
  }
}
