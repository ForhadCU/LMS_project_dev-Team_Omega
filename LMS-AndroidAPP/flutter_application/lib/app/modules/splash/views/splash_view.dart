import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../widgets/baseWidget.dart';
import '../controllers/splash_controller.dart';

class SplashView extends GetView<SplashController> {
  const SplashView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    controller.onInit();
    return BaseWidget(
        title: "Splash",
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Please wait...",
              ),
            ],
          ),
        ));
  }
}
