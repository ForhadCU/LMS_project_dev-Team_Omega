import 'package:flutter/material.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';

import '../core_lib.dart';

class AppButtonStyle {
  // make this class singleton
  AppButtonStyle._internal();
  static final AppButtonStyle _singleton = AppButtonStyle._internal();
  factory AppButtonStyle() {
    return _singleton;
  }

  final NeumorphicStyle submit = NeumorphicStyle(
    depth: 10,
    intensity: 0.7,
    shape: NeumorphicShape.convex,
    boxShape: NeumorphicBoxShape.roundRect(BorderRadius.circular(12)),
    lightSource: LightSource.topLeft,
    color: AppColor().primary,
  );

  final NeumorphicStyle secondary = NeumorphicStyle(
    depth: 10,
    intensity: 0.7,
    shape: NeumorphicShape.concave,
    boxShape: NeumorphicBoxShape.roundRect(BorderRadius.circular(12)),
    lightSource: LightSource.topLeft,
    
    color: AppColor().secondary,
  );
}
