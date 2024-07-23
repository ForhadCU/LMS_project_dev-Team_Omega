import 'package:flutter/material.dart';

import '../core_lib.dart';

class AppSubmitBtnStyle {
  // make this class singleton
  AppSubmitBtnStyle._internal();
  static final AppSubmitBtnStyle _singleton = AppSubmitBtnStyle._internal();
  factory AppSubmitBtnStyle() {
    return _singleton;
  }
  // codes start from here
  // All methods should be static to maintain singleton instances
  static ButtonStyle submit = ElevatedButton.styleFrom(
      // backgroundColor: AppColor.primary,
      padding: EdgeInsets.symmetric(horizontal: AppSpacing.xxl));
}
