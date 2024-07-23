import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../widgets/widgets_lib.dart';
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
              Card(
                child: Column(
                  children: [
                    Text(
                      "Please wait...",
                    ),
                  ],
                ),
              ),
            ],
          ),
        ));
  }
}
