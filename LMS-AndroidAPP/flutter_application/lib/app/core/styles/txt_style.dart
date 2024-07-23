import 'package:flutter/material.dart';
import '../../core/values/colors.dart';
import '../core_lib.dart';

class AppTextStyle {
  // make this class singleton
  AppTextStyle._();
  // codes start from here
  // All methods should be static to maintain singleton instances

  static TextStyle clickable =
      TextStyle(color: AppColor.clickableText, fontSize: 24);
  static TextStyle normal = TextStyle(color: AppColor.normalText);
  static TextStyle clickableText =
      TextStyle(color: AppColor.clickableText, fontSize: 24);

  // Headlines
  static TextStyle headLineLarge =
      TextStyle(color: AppColor.testHeadLine, fontSize: 24);
  static TextStyle headLineMedium =
      TextStyle(color: AppColor.testHeadLine, fontSize: 24);
  static TextStyle headLineSmall =
      TextStyle(color: AppColor.testHeadLine, fontSize: 10);

  // title
  static TextStyle titleLarge = TextStyle(
      color: AppColor.normalText,
      fontSize: 16,
      fontWeight: FontWeight.w500,
      overflow: TextOverflow.ellipsis);
  // subtitle
  static TextStyle titleMedium = TextStyle(
      color: AppColor.subtitle,
      fontSize: 14,
      fontWeight: FontWeight.w500,
      overflow: TextOverflow.ellipsis);

  static TextStyle titleSmall =
      TextStyle(color: AppColor.testTitle, fontSize: 24);

  // body
  static TextStyle bodyLarge =
      TextStyle(color: AppColor.testBody, fontSize: 16);
  // body main
  static TextStyle bodyMedium =
      TextStyle(color: AppColor.normalText, fontSize: 14);
  // caption
  static TextStyle bodySmall =
      TextStyle(color: AppColor.testBody, fontSize: 12);

  // button
  static TextStyle labelLarge =
      TextStyle(color: AppColor.testLabel, fontSize: 24);
  // textfield label and hints
  static TextStyle labelMedium =
      TextStyle(color: AppColor.testLabel, fontSize: 24);
  // warning
  static TextStyle labelSmall =
      TextStyle(color: AppColor.testLabel, fontSize: 24);
}
