import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class AppColor {
  // make this class singleton
  AppColor._internal();
  static final AppColor _singleton = AppColor._internal();
  factory AppColor() {
    return _singleton;
  }

  final Color primary = Color(0xff136537);
  final Color secondary = Color(0xff4ABDAC);
  final Color appRed = Color(0xffD72E35);
  final Color hitnsAndBorder = Color.fromARGB(255, 136, 136, 136);
  final Color accent = Color(0xffFF6F61);
  final Color textFieldBorder = Color(0xff333333);
  final Color divier = Color(0xff333333);
  final Color secondaryIcon = Color(0xff333333);
  final Color error = Color(0xffD72E35);
  final Color warning = Color(0xffFF6F61);
  // final Color defaultBg = Color.fromARGB(255, 245, 245, 245);
  final Color defaultBg = Colors.white;
  final Color secondaryBg = Colors.white;
  final Color generalBg = Color(0xffD9D9D9);
  final Color clickableText = Colors.blue;
  final Color normalText = Color(0xff333333);
  final Color secondaryText = Color.fromARGB(200, 0, 0, 0);
  final Color onGoing = Color(0xff136537);
  final Color ended = Color(0xff333333);
  final Color secondaryButton = Color(0xff4ABDAC);

  // tests
  final Color testHeadLine = Colors.purple;
  final Color testTitle = Color(0xff136537);
  final Color testBody = Colors.cyan;
  final Color testLabel = Colors.yellow;
}
