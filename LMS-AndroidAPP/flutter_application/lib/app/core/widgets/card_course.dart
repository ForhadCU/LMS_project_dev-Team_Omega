import 'package:flutter/material.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';

import '../core_lib.dart';
import 'divider.dart';
import 'dot_active_status.dart';
import 'time_schedule.dart';

class CourseCard extends StatelessWidget {
  final String? imgUri;
  final String? title;
  final String? desc;
  final String? startTime;
  final String? endTime;
  final String? instructoName;
  final Function? onTapEnrol;
  final String? courseActiveStatus;
  final List<String>? menuItems;
  final Function(String selectedMenuItem)? onSelectedmenuItem;
  const CourseCard({
    super.key,
    this.imgUri,
    this.title,
    this.desc,
    this.startTime,
    this.endTime,
    this.instructoName,
    this.onTapEnrol,
    this.courseActiveStatus,
    this.menuItems,
    this.onSelectedmenuItem,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: DeviceScreenWidth.hundaredPercent,
        padding: EdgeInsets.all(AppSpacing().md),
        decoration: BoxDecoration(
            border: Border.all(color: const Color.fromARGB(31, 102, 102, 102)),
            borderRadius: BorderRadius.circular(5)),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              children: [
                // image
                imgUri != null
                    ? Image.asset(
                        imgUri!,
                        fit: BoxFit.fill,
                        width: DeviceScreenWidth.twentyPercent,
                      )
                    : Container(
                        width: DeviceScreenWidth.twentyPercent,
                        height: DeviceScreenHeight.tenPercent,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(5),
                          color: Colors.greenAccent,
                        ),
                      ),
                /*   AppSpacing().xxl.height,
                // course active Status
                Center(
                  child: Column(
                    children: [
                      ActiveStatusDotView(color: AppColor().warning),
                      AppSpacing().md.height,
                      Text(
                        AppConstants().sUpComing,
                        style: AppTextStyle().secodaryText,
                      )
                    ],
                  ),
                ) */
              ],
            ),
            AppSpacing().xl.width,
            Expanded(
                child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                menuItems != null && onSelectedmenuItem != null
                    ? Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            title ?? "Course Title",
                            style: AppTextStyle().titleLarge,
                          ),
                          AppSpacing().sm.width,
                          PopupMenuButton(
                              // color: AppColor().secondary,
                              
                              iconSize: 18,
                              // onSelected: (value) => onSelectedmenuItem!(value),
                              itemBuilder: (
                                context,
                              ) {
                                return List.generate(
                                    menuItems!.length,
                                    (index) => PopupMenuItem<String>(
                                        child: Text(
                                            menuItems![index].toUpperCase())));
                              })
                        ],
                      )
                    : Text(
                        title ?? "Course Title",
                        style: AppTextStyle().titleLarge,
                      ),
                // AppSpacing().sm.height,
                Text(
                  desc ?? "This will be the course description",
                  style: AppTextStyle().titleMedium,
                ),
                const AppDivider(),
                AppSpacing().sm.height,
                Row(
                  children: [
                    Icon(
                      Icons.timer,
                      color: AppColor().textFieldBorder,
                      size: 14,
                    ),
                    AppSpacing().md.width,
                    Text("65 Days", style: AppTextStyle().secodaryText)
                  ],
                ),
                /* TimeScheduleView(
                  startTime: startTime ?? "9:30 AM",
                  endTime: endTime ?? "12:45 PM",
                ), */
                AppSpacing().md.height,
                // teachers
                Row(
                  children: [
                    Icon(
                      Icons.person,
                      color: AppColor().textFieldBorder,
                      size: 14,
                    ),
                    AppSpacing().md.width,
                    Text(
                      instructoName ?? "Instructor Name",
                      style: AppTextStyle().secodaryText,
                    )
                  ],
                ),
                AppSpacing().md.height,
                // Enrol Button
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    NeumorphicButton(
                      onPressed: onTapEnrol != null ? onTapEnrol!() : null,
                      style: AppButtonStyle().submit,
                      child: Text(
                        "Enrol Now",
                        style:
                            AppTextStyle().normal.copyWith(color: Colors.white),
                      ),
                    )
                    /*  ElevatedButton(
                        onPressed: () {
                          onTapEnrol != null ? onTapEnrol!() : null;
                        },
                        style: AppButtonStyle().secondary,
                        child: const Text(
                          "Enrol Now",
                        )) */
                    ,
                  ],
                )
              ],
            ))
          ],
        ),
      ),
    );
  }
}
