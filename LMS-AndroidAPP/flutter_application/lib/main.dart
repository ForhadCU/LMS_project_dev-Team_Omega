import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/styles/status_bar.dart';

import 'package:get/get.dart';

import 'app/core/core_lib.dart';
import 'app/routes/app_pages.dart';

void main() {
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
