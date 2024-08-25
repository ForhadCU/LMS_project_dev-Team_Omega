import 'package:flutter/material.dart';

import '../core_lib.dart';

class AppSubmitBtnStyle {
  // make this class singleton
  AppSubmitBtnStyle._internal();
  static final AppSubmitBtnStyle _singleton = AppSubmitBtnStyle._internal();
  factory AppSubmitBtnStyle() {
    return _singleton;
  }

  static ButtonStyle submit = ElevatedButton.styleFrom(
      padding:
          const EdgeInsets.symmetric(horizontal: AppSpacing.xxl, vertical: 0));

  static ButtonStyle secondary = ElevatedButton.styleFrom(
      backgroundColor: AppColor().secondaryButton,
      foregroundColor: AppColor().secondaryBg,
      textStyle: AppTextStyle.secodaryBtn,
      padding:
          const EdgeInsets.symmetric(horizontal: AppSpacing.xxl, vertical: 0));
}
