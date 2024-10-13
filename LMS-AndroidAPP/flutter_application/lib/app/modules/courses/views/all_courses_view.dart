import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/values/data.dart';
import 'package:flutter_application/app/core/widgets/progress_loader.dart';

import 'package:get/get.dart';
import '../../../core/core_lib.dart';
import '../../../core/widgets/baseWidget.dart';
import '../controllers/all_courses_controller.dart';

class AllCoursesView extends GetView<AllCoursesController> {
  const AllCoursesView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        isDrawer: false,
        title: "All Courses",
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [vQueryPart(), vOutputResultPart()],
        ));
  }

  vOutputResultPart() {
    return Expanded(
        child: Obx(() => controller.isInitialLoading.value
            ? Center(
                child: AppProgressLoader(),
              )
            : Container(
                padding: EdgeInsets.all(AppSpacing().md),
                child: ListView.builder(
                    itemCount: controller.myCourses.length,
                    itemBuilder: ((context, index) {
                      final currentData = controller.myCourses[index];

                      // item view
                      return CourseCard(
                        onTapDetails: () {
                          controller.mNavigateToDtailsPage(currentData);
                        },
                        courseActiveStatus: currentData.isActive,
                        title: currentData.title,
                        desc: currentData.description,
                        duration: currentData.duration.toString(),
                        instructoName: currentData.instructors[0].name,
                        imgUri: AppAssetLocations.ic_course2,
                        menuItems: AppConstants
                            .commonViewProperties.sCourseCardMenuItems,
                        onSelectedmenuItem: (String selectedMenuItem) {
                          print(selectedMenuItem);
                        },
                      );
                    })))));
  }

  vQueryPart() {
    return const Column(
      children: [SearchAndFilterPart(), CategoryPart()],
    );
  }
}

class CategoryPart extends StatelessWidget {
  const CategoryPart({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: AppSpacing().xl),
      width: DeviceScreenWidth.hundaredPercent,
      height: DeviceScreenHeight.tenPercent / 2,
      child: ListView.builder(
          itemCount:
              AppConstants.commonViewProperties.dummyCourseCategoryItems.length,
          scrollDirection: Axis.horizontal,
          itemBuilder: (context, index) {
            return Card(
              color: index == 0 ? AppColor.primary : AppColor.teaGreen,
              elevation: 0,
              // shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5)),
              child: Container(
                alignment: Alignment.center,
                padding: EdgeInsets.symmetric(
                    vertical: AppSpacing().sm, horizontal: AppSpacing().xl),
                child: Text(
                  AppConstants
                      .commonViewProperties.dummyCourseCategoryItems[index],
                  style: appTextTheme.bodyLarge!.copyWith(
                      color:
                          index == 0 ? AppColor.secondaryBg : AppColor.primary,
                      fontWeight: FontWeight.w500),
                ),
              ),
            );
          }),
    );
  }
}

class SearchAndFilterPart extends StatelessWidget {
  const SearchAndFilterPart({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(AppSpacing().md),
      child: Row(
        children: [
          Expanded(
            child: Container(
              color: AppColor.secondaryBg,
              child: TextFormField(
                // controller: textEditingController,
                onChanged: (String text) {},

                textInputAction: TextInputAction.search,
                textAlignVertical: TextAlignVertical.center,
                textAlign: TextAlign.left,
                decoration: InputDecoration(
                  /* focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(
                    color: AppColor.primary,
                  )), */

                  floatingLabelStyle: TextStyle(color: AppColor.primary),
                  hintText: "Search Course",
                  prefixIcon: InkWell(
                      onTap: () {},
                      child: Icon(
                        Icons.search,
                        size: AppData().appBarIconHeight,
                      )),
                  suffixIcon: InkWell(
                      onTap: () {},
                      child: Icon(Icons.mic, size: AppData().appBarIconHeight)),
                  isDense: true,
                  contentPadding: EdgeInsets.all(AppSpacing().md),
                  border: InputBorder.none,
                  fillColor: AppColor.secondaryBg,
                ),
              ),
            ),
          ),
          AppSpacing().xl.width,
          Container(
            decoration: BoxDecoration(
              color: AppColor.secondaryBg,
              borderRadius: BorderRadius.circular(5),
            ),
            child: IconButton(
              icon: Image(
                image: AssetImage(
                  AppAssetLocations.ic_filter,
                ),
                width: AppData().appBarIconWidth,
                height: AppData().appBarIconHeight,
              ),
              onPressed: () {
                // filter method
              },
            ),
          ),
        ],
      ),
    );
  }
}
