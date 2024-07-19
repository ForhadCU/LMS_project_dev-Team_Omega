import 'package:flutter/material.dart';

extension IntExtensions on double? {
  Widget get height => SizedBox(height: this?.toDouble());
  Widget get width => SizedBox(width: this?.toDouble());
}
