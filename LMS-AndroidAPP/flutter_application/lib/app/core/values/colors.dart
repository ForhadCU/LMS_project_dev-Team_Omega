import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class AppColor {
  // make this class singleton
  AppColor._internal();
  static final AppColor _singleton = AppColor._internal();
  factory AppColor() {
    return _singleton;
  }

  final Color primary = const Color(0xff136537);
  final Color secondary = const Color(0xff4ABDAC);
  final Color appRed = const Color(0xffD72E35);
  final Color hitnsAndBorder = const Color(0xFFBDBDBD);
  final Color accent = const Color(0xffFF6F61);
  final Color textFieldBorder = const Color(0xff333333);
  final Color divier = Color.fromARGB(255, 71, 71, 71);
  final Color secondaryIcon = const Color(0xff333333);
  final Color error = const Color(0xffD72E35);
  final Color warning = const Color(0xffFF6F61);
  // final Color defaultBg = Color.fromARGB(255, 245, 245, 245);
  // final Color defaultBg = const Color(0xfff0f8f0);
  final Color defaultBg = const Color(0xffF6F9F0);
  final Color secondaryBg = Colors.white;
  final Color generalBg = const Color(0xffD9D9D9);
  final Color clickableText = Colors.blue;
  final Color normalText = const Color(0xff333333);
  final Color secondaryText = const Color.fromARGB(200, 0, 0, 0);
  final Color onGoing = const Color(0xff136537);
  final Color ended = const Color(0xff333333);
  final Color secondaryButton = const Color(0xff4ABDAC);
  final Color teaGreen = const Color(0xffCEE9CE);

  // tests
  final Color testHeadLine = Colors.purple;
  final Color testTitle = const Color(0xff136537);
  final Color testBody = Colors.cyan;
  final Color testLabel = Colors.yellow;
}
