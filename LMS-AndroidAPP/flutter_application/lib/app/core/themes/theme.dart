import 'package:flutter/material.dart';
import 'package:school_management_system/app/core/themes/card_theme.dart';
import 'package:school_management_system/app/core/themes/checkbox_theme.dart';

import '../core_lib.dart';

ThemeData appTheme = ThemeData(
  textTheme: appTextTheme,
  fontFamily: Fonts.inter,
  primarySwatch: Colors.green,
  scaffoldBackgroundColor: AppColor.defaultBg,
  checkboxTheme: appCheckboxTheme,
  cardTheme: appCardTheme,
  useMaterial3: false,
  appBarTheme: appbarTheme,
  elevatedButtonTheme: appElevatedButtonThemeData,
  
);
