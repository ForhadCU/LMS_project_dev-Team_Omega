import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../core_lib.dart';

class AppStatusBar {
  // make this class singleton
  AppStatusBar._internal();
  static final AppStatusBar _singleton = AppStatusBar._internal();
  factory AppStatusBar() {
    return _singleton;
  }
  // codes start from here
  // All methods should be static to maintain singleton instances

  /// Change statusbar color
  mLight() {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarBrightness: Brightness.light,
      statusBarColor: AppColor().defaultBg,
      statusBarIconBrightness: Brightness.dark,
    ));
  }

  mDark() {
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarBrightness: Brightness.dark,
      statusBarColor: Colors.black,
      statusBarIconBrightness: Brightness.light,
    ));
  }
}
