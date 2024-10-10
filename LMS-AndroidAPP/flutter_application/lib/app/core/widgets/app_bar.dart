import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';

import '../core_lib.dart';

AppBar vMyAppBar({String? title, bool? isDrawer, BuildContext? context}) {
  return AppBar(
    title: Text((title ?? "").toUpperCase()),
    leading: isDrawer == true && context != null
        ? IconButton(
            icon: Icon(Icons.menu,
                color: AppColor.primary), // Custom icon color
            onPressed: () {
              Scaffold.of(context).openDrawer();
            },
          )
        : null,
  );
}
