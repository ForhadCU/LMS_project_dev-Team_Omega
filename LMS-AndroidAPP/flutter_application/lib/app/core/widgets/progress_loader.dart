import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';

class AppProgressLoader extends StatelessWidget {
  const AppProgressLoader({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 16,
      width: 16,
      child: CircularProgressIndicator(
        strokeWidth: 2,
        color: AppColor.primary,
      ),
    );
  }
}
