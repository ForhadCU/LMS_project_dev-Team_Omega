import 'package:flutter/material.dart';

import 'package:get/get.dart';
import '../../../core/core_lib.dart';
import '../../../widgets/baseWidget.dart';
import '../../../widgets/card_course.dart';
import '../controllers/all_courses_controller.dart';

class AllCoursesView extends GetView<AllCoursesController> {
  const AllCoursesView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "All Courses",
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            CourseCard(
              menuItems: sCourseCardMenuItems,
              onSelectedmenuItem: (String selectedMenuItem) {
                print(selectedMenuItem);
              },
            ),
          ],
        ));
  }
}
