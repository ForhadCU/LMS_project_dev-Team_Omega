import 'package:flutter/material.dart';
import '../../core/values/colors.dart';
import '../core_lib.dart';

class AppTextStyle {
  // make this class singleton
  AppTextStyle._internal();
  static final AppTextStyle _singleton = AppTextStyle._internal();
  factory AppTextStyle() {
    return _singleton;
  }
  // codes start from here
  // Methods or variables shouldn't be static

  TextStyle clickable = TextStyle(
      color: AppColor().clickableText,
      fontSize: 24,
      fontWeight: FontWeight.bold);
  TextStyle normal = TextStyle(color: AppColor().normalText);
  TextStyle clickableText =
      TextStyle(color: AppColor().clickableText, fontSize: 24);

  // Headlines
  TextStyle displayLarge = TextStyle(fontSize: 32, fontWeight: FontWeight.bold);
  TextStyle headLineMedium =
      TextStyle(fontSize: 20.0, fontWeight: FontWeight.w500);
  TextStyle headLineSmall =
      TextStyle(color: AppColor().testHeadLine, fontSize: 10);

  // title
  TextStyle titleLarge = TextStyle(fontSize: 20.0, fontWeight: FontWeight.w500, overflow: TextOverflow.ellipsis);
  // subtitle
  TextStyle titleMedium = TextStyle(
      color: AppColor().secondaryText,
      fontSize: 14,
      fontWeight: FontWeight.w500,
      overflow: TextOverflow.ellipsis);

  TextStyle titleSmall = TextStyle(color: AppColor().testTitle, fontSize: 24);

  // body
  TextStyle bodyLarge = TextStyle(fontSize: 16);
  // body main
  TextStyle bodyMedium = TextStyle(fontSize: 14);
  // caption
  TextStyle bodySmall = TextStyle(color: AppColor().testBody, fontSize: 12);

  // button
  TextStyle labelLarge = TextStyle(
      color: AppColor().testLabel, fontSize: 16, fontWeight: FontWeight.w500);
  // textfield label and hints
  TextStyle labelMedium = TextStyle(color: AppColor().testLabel, fontSize: 24);
  // warning
  TextStyle labelSmall = TextStyle(color: AppColor().testLabel, fontSize: 24);

  // secondary button
  TextStyle secodaryBtn = TextStyle(
      color: AppColor().secondaryBg, fontSize: 14, fontWeight: FontWeight.w500);
  // secondary text
  TextStyle secodaryText = TextStyle(
      overflow: TextOverflow.ellipsis,
      color: AppColor().secondaryText,
      fontSize: 14,
      fontWeight: FontWeight.w400);
}
