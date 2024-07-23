import 'package:flutter/material.dart';

import 'package:get/get.dart';

import 'app/core/core_lib.dart';
import 'app/routes/app_pages.dart';

void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Application",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
      theme: appTheme,
      useInheritedMediaQuery: true,
    ),
  );
}
