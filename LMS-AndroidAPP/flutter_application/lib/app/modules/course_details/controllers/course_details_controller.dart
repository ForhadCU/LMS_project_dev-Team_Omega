import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/data/models/contents/params/course_contents_by_type_params.dart';
import 'package:flutter_application/app/data/models/courses/responses/all_courses_of_instructor_response.dart';
import 'package:flutter_application/app/data/models/enrollments/params/all_enrolled_courses_params.dart';
import 'package:flutter_application/app/data/models/enrollments/responses/all_enrolled_courses_response.dart';
import 'package:flutter_application/app/data/models/login/responses/login_response_model.dart';
import 'package:flutter_application/app/data/repositories/course_details_repo.dart';
import 'package:get/get.dart';

import '../../../data/models/contents/responses/all_contents_response.dart';

class CourseDetailsController extends GetxController
    with GetSingleTickerProviderStateMixin {
  final CourseDetailsRepo repo;

  CourseDetailsController({required this.repo});

  late final enrolledStudents = <EnrolledStudent>[].obs;
  final count = 0.obs;
  late TabController tabController;
  List<String> dummyInstructorImages = [
    AppAssetLocations.img_roy_sensei,
    AppAssetLocations.img_zubayer_sensei
  ];
  List<String> dummyInstructorNames = [
    AppConstants.names.jayontoRay,
    AppConstants.names.jubayearAhmmed,
  ];
  late final List<ContentData> allFiles;
  late final List<ContentData> allVideos;

  late final List<ContentData> allLectures;
  late final Datum selectedCourseDetails;
  late final LoginResponse currentUserData;
  var isEnrolledStudentsLoading = false.obs;

  @override
  void onInit() async {
    tabController = TabController(length: 3, vsync: this);
    selectedCourseDetails = Get.arguments as Datum;
    currentUserData = await AppHelpers().mGetCurrentUserDataFromLocal();
    await mGetAllEnrolledStudents();
    await mGetLectureOfCourse();
    await mGetFilesOfCourse();
    await mGetVideosOfCourse();
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void increment() => count.value++;
  int mGenerateRandomIndex() {
    return AppHelpers().mGenerateRandomIndex(
        from: 0,
        to: AppConstants
                .commonViewProperties.dummyAllPeopleAssetLocations.length -
            1);
  }

  mGetAllEnrolledStudents() async {
    // loading
    isEnrolledStudentsLoading.value = true;
    await AppHelpers().mWait();

    // Get AllEnrolled Students of this current course
    final AllEnrolledStudentResponse response =
        await repo.mGetAllEnrolledStudents(
            token: currentUserData.accesToken,
            params: AllEnrolledCoursesParams(
                enrolledCourse: selectedCourseDetails.id));
    enrolledStudents.value = response.data;
    isEnrolledStudentsLoading.value = false;
  }

  mGetLectureOfCourse() async {
    final AllContentsResponse allContentsResponse =
        await repo.mGetLectureOfCourse(
            token: currentUserData.accesToken,
            params: CourseContentsByTypeParams(
                contentType: AppConstants.courseContentType.lecture,
                courseId: selectedCourseDetails.id));
    allLectures = allContentsResponse.data;
  }

  mGetFilesOfCourse() async {
    final AllContentsResponse allContentsResponse =
        await repo.mGetLectureOfCourse(
            token: currentUserData.accesToken,
            params: CourseContentsByTypeParams(
                contentType: AppConstants.courseContentType.file,
                courseId: selectedCourseDetails.id));
    allFiles = allContentsResponse.data;
  }

  mGetVideosOfCourse() async {
    final AllContentsResponse allContentsResponse =
        await repo.mGetLectureOfCourse(
            token: currentUserData.accesToken,
            params: CourseContentsByTypeParams(
                contentType: AppConstants.courseContentType.video,
                courseId: selectedCourseDetails.id));
    allVideos = allContentsResponse.data;
  }

  mLaucheUrl(String rawUrl) async {
    await AppHelpers().mLaunchURL(rawUrl: rawUrl);
  }
}
