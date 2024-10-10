import 'package:flutter/material.dart';

import '../core_lib.dart';

ThemeData appTheme = ThemeData(
  textTheme: appTextTheme,
  fontFamily: AppFonts().roboto, // Default font
  primarySwatch: AppHelpers().mCreateMaterialColor(AppColor.primary),
  scaffoldBackgroundColor: AppColor.defaultBg,
  checkboxTheme: appCheckboxTheme,
  cardTheme: appCardTheme,
  useMaterial3: false,
  appBarTheme: appbarTheme,
  elevatedButtonTheme: appElevatedButtonThemeData,
);
