import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';

import 'package:get/get.dart';

import '../../../core/widgets/baseWidget.dart';
import '../controllers/splash_controller.dart';

class SplashView extends GetView<SplashController> {
  const SplashView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    controller.onInit();
    return BaseWidget(
        // title: "Splash",
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image(image: AssetImage(AppAssetLocations().ic_bjet)),
             /*  Text(
                "Please wait...",
              ), */
            ],
          ),
        ));
  }
}
