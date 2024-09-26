import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:logger/logger.dart';

Logger gLogger = Logger(printer: PrettyPrinter());
Logger gLoggerNoStack = Logger(printer: PrettyPrinter(methodCount: 0));
BuildContext gGlobalContext = Get.context!;
