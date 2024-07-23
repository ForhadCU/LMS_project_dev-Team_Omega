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
  static const Color defaultBg = Color.fromARGB(255, 247, 247, 247);
  static const Color secondaryBg = Colors.white;
  static const Color clickableText = Colors.blue;
  static const Color normalText = Colors.black;
  static const Color subtitle = Color.fromARGB(200, 0, 0, 0);

  // tests
  static const Color testHeadLine = Colors.purple;
  static const Color testTitle = Colors.greenAccent;
  static const Color testBody = Colors.cyan;
  static const Color testLabel = Colors.yellow;
}
