import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/core/widgets/progress_loader.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';

import 'package:get/get.dart';
import 'package:getwidget/components/tabs/gf_tabs.dart';
import 'package:getwidget/getwidget.dart';

import '../../../data/models/enrollments/responses/all_enrolled_courses_response.dart';
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
        padding: const EdgeInsets.only(top: 8),
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
    return Column(
      children: [
        Image(
          image: AssetImage(AppAssetLocations.ic_course2),
          height: DeviceScreenHeight.thirtyPercent / 2,
          fit: BoxFit.contain,
        ),
        AppSpacing().xl.height,
        Text(
          controller.selectedCourseDetails.title,
          style: appTextTheme.titleLarge,
        ),
        AppSpacing().md.height,
        Text(
          controller.selectedCourseDetails.description,
          style: appTextTheme.bodyMedium!.copyWith(overflow: TextOverflow.clip),
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
                    controller.selectedCourseDetails.duration.toString(),
                    style:
                        AppTextStyle().normal.copyWith(color: AppColor.primary),
                  ),
                  Text(
                    " Months",
                    style:
                        AppTextStyle().normal.copyWith(color: AppColor.primary),
                  ),
                ],
              ),
            ),
          ],
        )
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
            itemCount: controller.selectedCourseDetails.instructors.length,
            itemBuilder: (context, index) {
              final instructor =
                  controller.selectedCourseDetails.instructors[index];
              return Container(
                alignment: Alignment.center,
                width: DeviceScreenWidth.sixtyPercent,
                child: Card(
                  child: ListTile(
                    leading: index <
                            AppConstants.commonViewProperties
                                .dummyTeacherAssetLocations.length
                        ? CircleAvatar(
                            backgroundImage: AssetImage(AppConstants
                                .commonViewProperties
                                .dummyTeacherAssetLocations[index]),
                          )
                        : CircleAvatar(
                            child: Text(
                              AppHelpers()
                                  .mGenerateShortName(instructor.name)
                                  .toUpperCase(),
                              style: const TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white),
                            ),
                          ),
                    title: Text(
                      index < controller.dummyInstructorNames.length
                          ? controller.dummyInstructorNames[index]
                          : instructor.name,
                      // style: AppTextStyle().titleMedium,
                      style: const TextStyle(
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
        // student list
        Obx(() => controller.isEnrolledStudentsLoading.value
            ? Row(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [AppProgressLoader()],
              )
            : SizedBox(
                height: DeviceScreenHeight.fortyPercent,
                child: ListView.builder(
                  scrollDirection: Axis.vertical,
                  itemCount: controller.enrolledStudents.length,
                  itemBuilder: (context, index) {
                    final EnrolledStudent student =
                        controller.enrolledStudents[index];
                    return Container(
                      alignment: Alignment.center,
                      width: DeviceScreenWidth.sixtyPercent,
                      child: Card(
                        elevation: 0,
                        child: ListTile(
                          leading: index <
                                  AppConstants.commonViewProperties
                                      .dummyTeacherAssetLocations.length
                              ? CircleAvatar(
                                  backgroundImage: AssetImage(AppConstants
                                      .commonViewProperties
                                      .dummyStudentAssetLocations[index]),
                                )
                              : CircleAvatar(
                                  child: Text(
                                    AppHelpers()
                                        .mGenerateShortName(
                                            student.studentId.name)
                                        .toUpperCase(),
                                    style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                        color: Colors.white),
                                  ),
                                ),
                          title: Text(
                            student.studentId.name,
                            style: AppTextStyle().titleMedium,
                          ),
                          subtitle: Text(
                            student.studentId.email,
                            style: AppTextStyle().normal,
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ))
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
                borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(24),
                    topRight: Radius.circular(24))),
            child: GFTabs(
              controller: controller.tabController,
              length: 3,
              tabBarColor: Colors.transparent,
              labelColor: AppColor.primary,
              tabBarHeight: DeviceScreenHeight.tenPercent / 2,
              tabs: <Widget>[
                const Tab(
                  child: Text(
                    "Lectures",
                  ),
                ),
                const Tab(
                  child: Text(
                    "Files",
                  ),
                ),
                const Tab(
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
      itemCount: controller.allLectures.length,
      itemBuilder: (context, index) {
        final lecture = controller.allLectures[index];
        return InkWell(
          onTap: () => controller.mLaucheUrl(lecture.contentlink),
          child: Container(
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
                  lecture.title,
                  style: AppTextStyle().titleMedium,
                ),
                subtitle: Text(
                  lecture.description,
                  style: AppTextStyle().normal,
                ),
                trailing: Text(
                  AppHelpers().formatDate(lecture.createDate),
                  style: AppTextStyle().normal,
                ),
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
      itemCount: controller.allFiles.length,
      itemBuilder: (context, index) {
        final fileData = controller.allLectures[index];
        return InkWell(
          onTap: () => controller.mLaucheUrl(fileData.contentlink),
          child: Container(
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
                  fileData.title,
                  style: AppTextStyle().titleMedium,
                ),
                subtitle: Text(
                  fileData.description,
                  style: AppTextStyle().normal,
                ),
                trailing: Text(
                  AppHelpers().formatDate(fileData.createDate),
                  style: AppTextStyle().normal,
                ),
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
      itemCount: controller.allVideos.length,
      itemBuilder: (context, index) {
        final videoData = controller.allVideos[index];
        return InkWell(
          onTap: () => controller.mLaucheUrl(videoData.contentlink),
          child: Container(
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
                  videoData.title,
                  style: AppTextStyle().titleMedium,
                ),
                subtitle: Text(
                  videoData.description,
                  style: AppTextStyle().normal,
                ),
                trailing: Text(
                  AppHelpers().formatDate(videoData.createDate),
                  style: AppTextStyle().normal,
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
