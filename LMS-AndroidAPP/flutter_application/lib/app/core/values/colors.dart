import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class AppColor {
  // make this class singleton
  AppColor._internal();
  static final AppColor _singleton = AppColor._internal();
  factory AppColor() {
    return _singleton;
  }

  final Color primary = Colors.green;
  final Color textFieldBorder = Colors.black54;
  final Color divier = Colors.black12;
  final Color secondaryIcon = Colors.black54;
  final Color error = Colors.red;
  final Color warning = Colors.orange;
  final Color defaultBg = Color.fromARGB(255, 245, 245, 245);
  final Color secondaryBg = Colors.white;
  final Color clickableText = Colors.blue;
  final Color normalText = Colors.black;
  final Color secondaryText = Color.fromARGB(200, 0, 0, 0);
  final Color onGoing = Colors.green;
  final Color ended = Colors.grey;
  final Color secondaryButton = Colors.greenAccent;

  // tests
  final Color testHeadLine = Colors.purple;
  final Color testTitle = Colors.greenAccent;
  final Color testBody = Colors.cyan;
  final Color testLabel = Colors.yellow;
}
