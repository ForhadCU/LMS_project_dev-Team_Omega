import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../../../widgets/baseWidget.dart';
import '../controllers/create_courses_controller.dart';
import 'widgets/btn_create.dart';
import 'widgets/drpdown_students.dart';
import 'widgets/drpdown_teachers.dart';
import 'widgets/img_picker_course.dart';
import 'widgets/textfield_desc.dart';
import 'widgets/txtfield_code.dart';
import 'widgets/txtfield_title.dart';

class CreateCoursesView extends GetView<CreateCoursesController> {
  const CreateCoursesView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Create Course",
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ImgPicker(controller: controller),
              AppSpacing().md.height,
              TitleTextFiled(controller: controller),
              AppSpacing().md.height,
              DescTextFiled(controller: controller),
              AppSpacing().md.height,
              CodeTextFiled(controller: controller),
              AppSpacing().md.height,
              TeachersDropdown(controller: controller),
              AppSpacing().md.height,
              StudentsDropdown(controller: controller),
              AppSpacing().xl.height,
              CreateButton(controller: controller)
            ],
          ),
        ));
  }
}
