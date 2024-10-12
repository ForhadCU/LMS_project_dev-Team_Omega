import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';

import '../core_lib.dart';

void showLoadingDialog() {
  showDialog(
    context: gGlobalContext,
    barrierDismissible: false, // Prevent closing the dialog by tapping outside
    builder: (BuildContext context) {
      return Dialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
        ),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Row(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(
                height: 16,
                width: 16,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  color: AppColor.primary,
                ),
              ),
              SizedBox(width: 20),
              Text("Please wait..."),
            ],
          ),
        ),
      );
    },
  );
}
