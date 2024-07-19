import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_application/app/core/styles/txt_style.dart';
import 'package:flutter_application/app/core/values/colors.dart';

class BaseWidget extends StatelessWidget {
  final String title;
  final Widget child;

  const BaseWidget({super.key, required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          elevation: 0,
          title: Text(title.toUpperCase()),
          titleTextStyle: AppTextStyle.primary.copyWith(
            fontWeight: FontWeight.bold,
          ),
          backgroundColor: AppColor.defaultBg,
        ),
        body: Container(
          padding: const EdgeInsets.all(8),
          color: AppColor.defaultBg,
          child: child,
        ),
      ),
    );
  }
}
