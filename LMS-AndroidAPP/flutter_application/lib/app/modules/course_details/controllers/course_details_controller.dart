import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/data/repositories/course_details_repo.dart';
import 'package:get/get.dart';

class CourseDetailsController extends GetxController
    with GetSingleTickerProviderStateMixin {
  final CourseDetailsRepo courseDetailsRepo;

  CourseDetailsController({required this.courseDetailsRepo});

  final count = 0.obs;
  late TabController tabController;
  List<String> dummyInstructorImages = [
    AppAssetLocations.img_roy_sensei,
    AppAssetLocations.img_zubayer_sensei
  ];  List<String> dummyInstructorNames = [
    AppConstants.names.jayontoRay,
    AppConstants.names.jubayearAhmmed,
  ];
  @override
  void onInit() {
    tabController = TabController(length: 3, vsync: this);
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
}
