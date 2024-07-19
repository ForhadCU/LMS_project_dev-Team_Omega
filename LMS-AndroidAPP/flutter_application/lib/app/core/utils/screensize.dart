import 'package:flutter/cupertino.dart';
import 'package:flutter_application/app/core/utils/helpers.dart';
import 'package:flutter_application/app/core/values/enums.dart';

class DeviceScreenHeight {
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
    return (MediaQuery.of(kGlobContext).size.height * percentage) / 100;
  } else if (tag == AppEnum.Width) {
    return (MediaQuery.of(kGlobContext).size.width * percentage) / 100;
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

