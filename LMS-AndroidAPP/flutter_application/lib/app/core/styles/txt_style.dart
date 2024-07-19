import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/values/colors.dart';

class AppTextStyle {
  // make this class singleton
  AppTextStyle._internal();
  static final AppTextStyle _singleton = AppTextStyle._internal();
  factory AppTextStyle() {
    return _singleton;
  }
  // codes start from here
  // All methods should be static to maintain singleton instances

  static TextStyle clickable = TextStyle(color: AppColor.clickableText);
  static TextStyle normal = TextStyle(color: AppColor.normalText);
  static TextStyle primary = TextStyle(color: AppColor.primary);
}
