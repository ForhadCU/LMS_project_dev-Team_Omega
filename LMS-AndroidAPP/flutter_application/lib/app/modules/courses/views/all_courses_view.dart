import 'package:flutter/material.dart';

import 'package:get/get.dart';
import '../../../core/core_lib.dart';
import '../../../core/widgets/baseWidget.dart';
import '../../../core/widgets/card_course.dart';
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
              imgUri: AppAssetLocations().ic_course2,
              menuItems: AppStrings().sCourseCardMenuItems,
              onSelectedmenuItem: (String selectedMenuItem) {
                print(selectedMenuItem);
              },
            ),
            CourseCard(
              imgUri: AppAssetLocations().ic_course2,
              menuItems: AppStrings().sCourseCardMenuItems,
              onSelectedmenuItem: (String selectedMenuItem) {
                print(selectedMenuItem);
              },
            ),
            CourseCard(
              imgUri: AppAssetLocations().ic_course2,
              menuItems: AppStrings().sCourseCardMenuItems,
              onSelectedmenuItem: (String selectedMenuItem) {
                print(selectedMenuItem);
              },
            ),
            CourseCard(
              imgUri: AppAssetLocations().ic_course2,
              menuItems: AppStrings().sCourseCardMenuItems,
              onSelectedmenuItem: (String selectedMenuItem) {
                print(selectedMenuItem);
              },
            ),
          ],
        ));
  }
}
