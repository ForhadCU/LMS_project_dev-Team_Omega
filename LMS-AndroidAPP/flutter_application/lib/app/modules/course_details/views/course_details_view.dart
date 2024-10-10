import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';

import 'package:get/get.dart';
import 'package:getwidget/components/tabs/gf_tabs.dart';
import 'package:getwidget/getwidget.dart';

import '../controllers/course_details_controller.dart';

class CourseDetailsView extends GetView<CourseDetailsController> {
  CourseDetailsView({Key? key}) : super(key: key);
  final List<String> students = ["Alice", "Bob", "Charlie"];
  final List<String> teachers = ["Mr. Smith", "Ms. Johnson"];
  final List<Map<String, String>> courseContent = [
    {"title": "Introduction", "description": "Overview of the course"},
    {"title": "Chapter 1", "description": "Basic Concepts"},
    {"title": "Chapter 2", "description": "Advanced Topics"},
  ];

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: "Course Details",
      child: SingleChildScrollView(
        padding: EdgeInsets.only(top: 8),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            vCourseInfo(),
            AppSpacing().xxl.height,
            vInstructors(),
            AppSpacing().xl.height,
            vStudents(),
          ],
        ),
      ),
    );
  }

  Widget vCourseInfo() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Column(
          children: [
            Image(
              image: AssetImage(AppAssetLocations.ic_course2),
              height: DeviceScreenHeight.thirtyPercent / 2,
              fit: BoxFit.contain,
            ),
            AppSpacing().xl.height,
            Text(
              "Course Title",
              style: appTextTheme.titleLarge,
            ),
            AppSpacing().md.height,
            Text(
              AppConstants.commonViewProperties.demoDesc,
              style: appTextTheme.bodyMedium!
                  .copyWith(overflow: TextOverflow.ellipsis),
            ),
            AppSpacing().xl.height,

            // Content Button and Duration
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                // content
                NeumorphicButton(
                  onPressed: () {
                    vCourseContents();
                  },
                  style: AppButtonStyle().submit.copyWith(
                        color: AppColor.primary,
                        // intensity: 0.4,
                        // shadowDarkColor: Colors.black
                      ),
                  child: Text(
                    "Contents",
                    style: AppTextStyle().normal.copyWith(color: Colors.white),
                  ),
                ),
                AppSpacing().xxl.width,

                // duration
                NeumorphicButton(
                  onPressed: () {},
                  style: AppButtonStyle().submit.copyWith(
                        color: AppColor.teaGreen,
                        intensity: 0,
                      ),
                  child: Row(
                    children: [
                      Text(
                        "65",
                        style: AppTextStyle()
                            .normal
                            .copyWith(color: AppColor.primary),
                      ),
                      Text(
                        " Days",
                        style: AppTextStyle()
                            .normal
                            .copyWith(color: AppColor.primary),
                      ),
                    ],
                  ),
                ),
              ],
            )
          ],
        ),
      ],
    );
  }

  vInstructors() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Expanded(
              child: Text(
                AppConstants.commonViewProperties.instructors,
                textAlign: TextAlign.left,
                style: AppTextStyle().titleMedium,
              ),
            ),
            Expanded(
              child: Text(
                "See all",
                textAlign: TextAlign.right,
                style: AppTextStyle().normal,
              ),
            ),
          ],
        ),
        const AppDivider(),
        SizedBox(
          height: DeviceScreenHeight.tenPercent,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: controller.dummyInstructorImages.length,
            itemBuilder: (context, index) {
              return Container(
                alignment: Alignment.center,
                width: DeviceScreenWidth.sixtyPercent,
                child: Card(
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundImage: AssetImage(
                        controller.dummyInstructorImages[index],
                      ),
                    ),
                    title: Text(
                      controller.dummyInstructorNames[index],
                      // style: AppTextStyle().titleMedium,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                    subtitle: Text(
                      "Japanese Language Sensei",
                      style: AppTextStyle().normal,
                    ),
                  ),
                ),
              );
            },
          ),
        )
      ],
    );
  }

  vStudents() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Expanded(
              child: Text(
                AppConstants.commonViewProperties.students,
                textAlign: TextAlign.left,
                style: AppTextStyle().titleMedium,
              ),
            ),
            Expanded(
              child: Text(
                "See all",
                textAlign: TextAlign.right,
                style: AppTextStyle().normal,
              ),
            ),
          ],
        ),
        const AppDivider(),
        SizedBox(
          height: DeviceScreenHeight.fortyPercent,
          child: ListView.builder(
            scrollDirection: Axis.vertical,
            itemCount: AppConstants
                    .commonViewProperties.dummyStudentAssetLocations.length -
                1,
            itemBuilder: (context, index) {
              return Container(
                alignment: Alignment.center,
                width: DeviceScreenWidth.sixtyPercent,
                child: Card(
                  elevation: 0,
                  child: ListTile(
                    leading: CircleAvatar(
                      // backgroundImage: AssetImage(AppAssetLocations.ic_user),
                      radius: 20,
                      backgroundImage: AssetImage(AppConstants
                          .commonViewProperties
                          .dummyStudentAssetLocations[index]),
                    ),
                    title: Text(
                      "Student Name ${index + 1}",
                      style: AppTextStyle().titleMedium,
                    ),
                    subtitle: Text(
                      "sample.user@gamil.com",
                      style: AppTextStyle().normal,
                    ),
                  ),
                ),
              );
            },
          ),
        )
      ],
    );
  }

  void vCourseContents() {
    showModalBottomSheet(
        elevation: 5,
        barrierColor: Colors.transparent,
        context: gGlobalContext,
        builder: (gGlobalContext) {
          return Container(
            height: DeviceScreenHeight.sixtyPercent,
            decoration: BoxDecoration(
                color: AppColor.secondaryBg,
                borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(24),
                    topRight: Radius.circular(24))),
            child: GFTabs(
              controller: controller.tabController,
              length: 3,
              tabBarColor: Colors.transparent,
              labelColor: AppColor.primary,
              tabBarHeight: DeviceScreenHeight.tenPercent / 2,
              tabs: <Widget>[
                Tab(
                  child: Text(
                    "Lectures",
                  ),
                ),
                Tab(
                  child: Text(
                    "Files",
                  ),
                ),
                Tab(
                  child: Text(
                    "Videos",
                  ),
                ),
              ],
              tabBarView: GFTabBarView(
                controller: controller.tabController,
                children: <Widget>[
                  // Lessons
                  vLessonsTab(),

                  // Files
                  vFilesTab(),

                  // Videos
                  vVideos(),
                ],
              ),
            ),
          );
        });
  }

  vLessonsTab() {
    return ListView.builder(
      scrollDirection: Axis.vertical,
      itemCount: 12,
      itemBuilder: (context, index) {
        return Container(
          alignment: Alignment.center,
          width: DeviceScreenWidth.sixtyPercent,
          child: Card(
            elevation: 0,
            child: ListTile(
              leading: CircleAvatar(
                // radius: 24,

                backgroundColor: Colors.transparent,
                // backgroundImage: ,
                child: Image(
                  image: AssetImage(
                    AppAssetLocations.ic_lessons,
                  ),
                  width: 32,
                  height: 32,
                  fit: BoxFit.fill,
                ),
              ),
              title: Text(
                "Lesson $index",
                style: AppTextStyle().titleMedium,
              ),
              subtitle: Text(
                "This is sample description",
                style: AppTextStyle().normal,
              ),
              trailing: Text(
                "Oct 13",
                style: AppTextStyle().normal,
              ),
            ),
          ),
        );
      },
    );
  }

  vFilesTab() {
    return ListView.builder(
      scrollDirection: Axis.vertical,
      itemCount: 12,
      itemBuilder: (context, index) {
        return Container(
          alignment: Alignment.center,
          width: DeviceScreenWidth.sixtyPercent,
          child: Card(
            elevation: 0,
            child: ListTile(
              leading: CircleAvatar(
                // radius: 24,

                backgroundColor: Colors.transparent,
                // backgroundImage: ,
                child: Image(
                  image: AssetImage(
                    AppAssetLocations.ic_file,
                  ),
                  width: 32,
                  height: 32,
                  fit: BoxFit.fill,
                ),
              ),
              title: Text(
                "File $index",
                style: AppTextStyle().titleMedium,
              ),
              subtitle: Text(
                "This is sample description",
                style: AppTextStyle().normal,
              ),
              trailing: Text(
                "Oct 13",
                style: AppTextStyle().normal,
              ),
            ),
          ),
        );
      },
    );
  }

  vVideos() {
    return ListView.builder(
      scrollDirection: Axis.vertical,
      itemCount: 12,
      itemBuilder: (context, index) {
        return Container(
          alignment: Alignment.center,
          width: DeviceScreenWidth.sixtyPercent,
          child: Card(
            elevation: 0,
            child: ListTile(
              leading: CircleAvatar(
                // radius: 24,

                backgroundColor: Colors.transparent,
                // backgroundImage: ,
                child: Image(
                  image: AssetImage(
                    AppAssetLocations.ic_video,
                  ),
                  width: 32,
                  height: 32,
                  fit: BoxFit.fill,
                ),
              ),
              title: Text(
                "Video Resourse ${index + 1}",
                style: AppTextStyle().titleMedium,
              ),
              subtitle: Text(
                "This is sample description",
                style: AppTextStyle().normal,
              ),
              trailing: Text(
                "Oct 13",
                style: AppTextStyle().normal,
              ),
            ),
          ),
        );
      },
    );
  }
}
