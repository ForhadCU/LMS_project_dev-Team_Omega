import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/models/error_response_model.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

class AppHelpers {
  // make this class singleton
  AppHelpers._internal();
  static final AppHelpers _singleton = AppHelpers._internal();
  factory AppHelpers() {
    return _singleton;
  }
  // codes start from here
  // Methods or variables shouldn't be static

  /// Create a MaterialColor from a Color
  MaterialColor mCreateMaterialColor(Color color) {
    List strengths = <double>[.05];
    final Map<int, Color> swatch = {};
    final int r = color.red, g = color.green, b = color.blue;

    for (int i = 1; i < 10; i++) {
      strengths.add(0.1 * i);
    }
    for (var strength in strengths) {
      final double ds = 0.5 - strength;
      swatch[(strength * 1000).round()] = Color.fromRGBO(
        r + ((ds < 0 ? r : (255 - r)) * ds).round(),
        g + ((ds < 0 ? g : (255 - g)) * ds).round(),
        b + ((ds < 0 ? b : (255 - b)) * ds).round(),
        1,
      );
    }
    return MaterialColor(color.value, swatch);
  }

  Map<String, dynamic> mHandleRemoteResponse(http.Response response) {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      gLoggerNoStack.i("Successfully get api response");
      return jsonDecode(response.body);
    } else {
      var errorResponseModel =
          ErrorResponseModel.fromMap(jsonDecode(response.body));
      gLogger.e(errorResponseModel.message, error: "Response message");
      // AppHelpers().showSnackBarFailed(message: errorResponseModel.message);
      throw Exception('Failed with status code: ${response.statusCode}');
    }
  }

  Map<String, String> mHeadersGenerator({required String token}) {
    return {
      "Authorization": "Bearer $token",
    };
  }

  // Check if a string is a valid email
  bool isValidEmail(String email) {
    final RegExp emailRegex = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
    return emailRegex.hasMatch(email);
  }

  String formatDate(DateTime date) {
    return DateFormat('yyyy-MM-dd').format(date);
  }

  String formatTime(DateTime time) {
    return DateFormat('HH:mm').format(time);
  }

// Check if a string is empty
  bool isEmpty(String? text) {
    return text == null || text.trim().isEmpty;
  }

// Show a snackbar failed message
  void showSnackBarFailed({String? title, String? message}) {
    Get.snackbar(
      title ?? 'Failed',
      message ?? "",
      snackPosition: SnackPosition.BOTTOM,
      backgroundColor: AppColor().appRed,
      colorText: Colors.white,
    );
  } // Show a snackbar failed message

  void showSnackBarSuccess({String? title, String? message}) {
    Get.snackbar(
      title ?? 'Success',
      message ?? "",
      snackPosition: SnackPosition.BOTTOM,
      backgroundColor: AppColor().primary,
      colorText: Colors.white,
    );
  }

  void showSnackBarWarning({String? title, String? message}) {
    Get.snackbar(
      title ?? 'Warning',
      message ?? "",
      snackPosition: SnackPosition.BOTTOM,
      backgroundColor: AppColor().accent,
      colorText: Colors.white,
    );
  }

  bool mHandleLocalResponse(bool? res) {
    if (res != null && res) {
      gLoggerNoStack.i("Successfully save access_token");
      return true;
    } else {
      gLogger.w("Failed to save", error: "Local Response");
      AppHelpers().showSnackBarFailed(
        message: "Failed to login",
      );
    }
    return false;
  }
}
