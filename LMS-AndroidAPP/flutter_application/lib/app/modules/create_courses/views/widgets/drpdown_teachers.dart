import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/styles/txt_style.dart';
import 'package:flutter_application/app/data/data_lib.dart';
import 'package:flutter_application/app/modules/create_courses/controllers/create_courses_controller.dart';
import 'package:get/get.dart';

import '../../../../core/styles/spacing_style.dart';
import '../../../../core/values/colors.dart';
import '../../../../data/models/batches_response_model.dart';

class TeachersDropdown extends StatelessWidget {
  final CreateCoursesController controller;
  const TeachersDropdown({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return Container(
        // multi-selectable view
        );
  }
}
