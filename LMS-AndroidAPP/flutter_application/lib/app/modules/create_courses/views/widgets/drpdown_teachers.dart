import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../../core/styles/spacing_style.dart';
import '../../../../core/values/colors.dart';
import '../../../../data/models/batches_response_model.dart';
import '../../controllers/create_courses_controller.dart';

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
