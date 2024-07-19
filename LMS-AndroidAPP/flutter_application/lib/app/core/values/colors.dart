import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class AppColor {
  // make this class singleton
  AppColor._internal();
  static final AppColor _singleton = AppColor._internal();
  factory AppColor() {
    return _singleton;
  }

  static const Color primary = Colors.green;
  static const Color textFieldBorder = Colors.black54;
  static const Color secondaryIcon = Colors.black54;
  static const Color error = Colors.red;
  static const Color warning = Colors.orange;
  static const Color defaultBg = Colors.white;
  static const Color clickableText = Colors.blue;
  static const Color normalText = Colors.black;
}
