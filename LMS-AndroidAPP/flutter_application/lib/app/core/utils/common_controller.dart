import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:get/get.dart';

class CommonController extends GetxController {
  var scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void onInit() {
    // TODO: implement onInit
    // gLogger.w("Ininitalize common controller");
    super.onInit();
  }

  void openDrawer() {
    scaffoldKey.currentState?.openDrawer();
  }

  void closeDrawer() {
    scaffoldKey.currentState?.openEndDrawer();
  }
}
