import 'package:flutter/material.dart';

import '../core_lib.dart';

class AppSubmitBtnStyle {
  // make this class singleton
  AppSubmitBtnStyle._internal();
  static final AppSubmitBtnStyle _singleton = AppSubmitBtnStyle._internal();
  factory AppSubmitBtnStyle() {
    return _singleton;
  }

  final ButtonStyle submit = ElevatedButton.styleFrom(
      padding:
           EdgeInsets.symmetric(horizontal: AppSpacing().xxl, vertical: 0));

  final ButtonStyle secondary = ElevatedButton.styleFrom(
      backgroundColor: AppColor().secondaryButton,
      foregroundColor: AppColor().secondaryBg,
      textStyle: AppTextStyle().secodaryBtn,
      padding:
           EdgeInsets.symmetric(horizontal: AppSpacing().xxl, vertical: 0));
}
