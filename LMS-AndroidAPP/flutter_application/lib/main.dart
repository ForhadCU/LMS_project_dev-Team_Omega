import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/styles/status_bar.dart';
import 'package:flutter_application/app/core/utils/common_controller.dart';

import 'package:get/get.dart';

import 'app/core/core_lib.dart';
import 'app/routes/app_pages.dart';

void main() {
  Get.put(CommonController());
  AppStatusBar().mLight();
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: AppPages.initial,
      getPages: AppPages.routes,
      theme: appTheme,
      useInheritedMediaQuery: true,
    ),
  );
}
