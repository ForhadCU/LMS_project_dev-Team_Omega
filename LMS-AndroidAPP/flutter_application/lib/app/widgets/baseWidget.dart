import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import '../core/core_lib.dart';

class BaseWidget extends StatelessWidget {
  final String title;
  final Widget child;

  const BaseWidget({super.key, required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(title.toUpperCase()),
        ),
        body: Container(
        /*   padding: const EdgeInsets.all(8),
          color: AppColor.secondaryBg, */
          child: child,
        ),
      ),
    );
  }
}
