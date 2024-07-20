import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/styles/spacing_style.dart';
import 'package:flutter_application/app/core/utils/int_extensions.dart';
import 'package:flutter_application/app/modules/create_courses/views/widgets/txtfield_code.dart';
import 'package:flutter_application/app/modules/create_courses/views/widgets/textfield_desc.dart';
import 'package:flutter_application/app/modules/create_courses/views/widgets/img_picker_course.dart';
import 'package:flutter_application/app/modules/create_courses/views/widgets/drpdown_teachers.dart';
import 'package:flutter_application/app/modules/create_courses/views/widgets/txtfield_title.dart';
import 'package:flutter_application/app/common_widgets/baseWidget.dart';

import 'package:get/get.dart';

import '../controllers/create_courses_controller.dart';
import 'widgets/btn_create.dart';
import 'widgets/drpdown_students.dart';

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
              AppSpacing.md.height,
              TitleTextFiled(controller: controller),
              AppSpacing.md.height,
              DescTextFiled(controller: controller),
              AppSpacing.md.height,
              CodeTextFiled(controller: controller),
              AppSpacing.md.height,
              TeachersDropdown(controller: controller),
              AppSpacing.md.height,
              StudentsDropdown(controller: controller),
              AppSpacing.xl.height,
              CreateButton(controller: controller)
            ],
          ),
        ));
  }
}
