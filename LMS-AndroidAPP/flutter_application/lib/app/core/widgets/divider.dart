import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';

class AppDivider extends StatelessWidget {
  const AppDivider({super.key});

  @override
  Widget build(BuildContext context) {
    return Divider(
      color: AppColor.divier,
      thickness: .1,
    );
  }
}
