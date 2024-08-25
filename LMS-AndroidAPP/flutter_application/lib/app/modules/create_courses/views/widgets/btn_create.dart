import 'package:flutter/material.dart';

import '../../../../core/styles/btn_style.dart';
import '../../../../core/utils/screensize.dart';
import '../../controllers/create_courses_controller.dart';

class CreateButton extends StatelessWidget {
  final CreateCoursesController controller;
  const CreateButton({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        onPressed: () {
          controller.mTapCreateBtn();
        },
        style: AppSubmitBtnStyle().submit.copyWith(
            fixedSize: MaterialStatePropertyAll(
                Size(DeviceScreenWidth.eightyPercent, 0))),
        child: const Text("Create"));
  }
}
