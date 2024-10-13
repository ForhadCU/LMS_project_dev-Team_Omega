import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/repositories/password_recover_repo.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
import 'package:get/get.dart';

class SplashController extends GetxController {
  final PasswordRecoverRepository passwordRecoverRepository;
  SplashController({required this.passwordRecoverRepository});

  @override
  void onInit() async {
    super.onInit();

    await Future.delayed(const Duration(milliseconds: 2000));
    await mCheckSessionStatus();
  }

  mCheckSessionStatus() async {
    try {
      final userAccessToken =
          await passwordRecoverRepository.mGetSessionFromLocal();
      if (userAccessToken == null) {
        Get.offNamed(Routes.LOGIN);
        return;
      } else {
        // Get.offNamed(Routes.HOME);
        // Get.offNamed(Routes.ALLCOURSES);
        Get.offNamed(Routes.HOME);
        return;
      }
    } catch (e) {
      _handleError(e);
    }
  }

  void _handleError(Object e) {
    gLogger.e(e, error: "Local Strorage Error");
  }
}
