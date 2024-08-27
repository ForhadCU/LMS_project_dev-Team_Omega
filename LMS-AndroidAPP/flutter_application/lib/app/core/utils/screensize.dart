import 'package:flutter/cupertino.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import '../core_lib.dart';

class DeviceScreenLongestSide {
  DeviceScreenLongestSide._();
  static double onePercent = mCalculate(AppEnum.LONGESTSIDE, 1);
  static double twoPercent = mCalculate(AppEnum.LONGESTSIDE, 2);
  static double threePercent = mCalculate(AppEnum.LONGESTSIDE, 3);
  static double fourPercent = mCalculate(AppEnum.LONGESTSIDE, 4);
  static double fivePercent = mCalculate(AppEnum.LONGESTSIDE, 5);
  static double sixPercent = mCalculate(AppEnum.LONGESTSIDE, 6);
  static double sevenPercent = mCalculate(AppEnum.LONGESTSIDE, 7);
  static double eightPercent = mCalculate(AppEnum.LONGESTSIDE, 8);
  static double ninePercent = mCalculate(AppEnum.LONGESTSIDE, 9);
  static double tenPercent = mCalculate(AppEnum.LONGESTSIDE, 10);
  static double twentyPercent = mCalculate(AppEnum.LONGESTSIDE, 20);
  static double thirtyPercent = mCalculate(AppEnum.LONGESTSIDE, 30);
  static double fortyPercent = mCalculate(AppEnum.LONGESTSIDE, 40);
  static double fiftyPercent = mCalculate(AppEnum.LONGESTSIDE, 50);
  static double sixtyPercent = mCalculate(AppEnum.LONGESTSIDE, 60);
  static double seventyPercent = mCalculate(AppEnum.LONGESTSIDE, 70);
  static double eightyPercent = mCalculate(AppEnum.LONGESTSIDE, 80);
  static double ninetyPercent = mCalculate(AppEnum.LONGESTSIDE, 90);
  static double hundaredPercent = mCalculate(AppEnum.LONGESTSIDE, 100);
}

class DeviceScreenHeight {
  DeviceScreenHeight._();
  static double tenPercent = mCalculate(AppEnum.Height, 10);
  static double twentyPercent = mCalculate(AppEnum.Height, 20);
  static double thirtyPercent = mCalculate(AppEnum.Height, 30);
  static double fortyPercent = mCalculate(AppEnum.Height, 40);
  static double fiftyPercent = mCalculate(AppEnum.Height, 50);
  static double sixtyPercent = mCalculate(AppEnum.Height, 60);
  static double seventyPercent = mCalculate(AppEnum.Height, 70);
  static double eightyPercent = mCalculate(AppEnum.Height, 80);
  static double ninetyPercent = mCalculate(AppEnum.Height, 90);
  static double hundaredPercent = mCalculate(AppEnum.Height, 100);
}

class DeviceScreenWidth {
  DeviceScreenWidth._();
  static double tenPercent = mCalculate(AppEnum.Width, 10);
  static double twentyPercent = mCalculate(AppEnum.Width, 20);
  static double thirtyPercent = mCalculate(AppEnum.Width, 30);
  static double fortyPercent = mCalculate(AppEnum.Width, 40);
  static double fiftyPercent = mCalculate(AppEnum.Width, 50);
  static double sixtyPercent = mCalculate(AppEnum.Width, 60);
  static double seventyPercent = mCalculate(AppEnum.Width, 70);
  static double eightyPercent = mCalculate(AppEnum.Width, 80);
  static double ninetyPercent = mCalculate(AppEnum.Width, 90);
  static double hundaredPercent = mCalculate(AppEnum.Width, 100);
}

mCalculate(AppEnum tag, double percentage) {
  if (tag == AppEnum.Height) {
    return (MediaQuery.of(gGlobalContext).size.height * percentage) / 100;
  } else if (tag == AppEnum.Width) {
    return (MediaQuery.of(gGlobalContext).size.width * percentage) / 100;
  } else if (tag == AppEnum.LONGESTSIDE) {
    return (MediaQuery.of(gGlobalContext).size.longestSide * percentage) / 100;
  }
}


// My Depreication
/* class DeviceScreen {
  static mGetHeight(BuildContext context, double percentage) {
    return (MediaQuery.of(context).size.height * percentage) / 100;
  }
  static mGetWidth(BuildContext context, double percentage) {
    return (MediaQuery.of(context).size.width * percentage) / 100;
  }
  static mGetLongestSide(BuildContext context, double percentage) {
    return (MediaQuery.of(context).size.longestSide * percentage) / 100;
  }
} */

