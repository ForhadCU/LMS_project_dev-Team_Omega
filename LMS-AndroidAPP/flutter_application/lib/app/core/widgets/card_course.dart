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
  final String? duration;
  // final Function onTapDetails;
  final String? courseActiveStatus;
  final List<String>? menuItems;
  final Function(String selectedMenuItem)? onSelectedmenuItem;
  final Function()? onTapDetails;
  const CourseCard({
    super.key,
    this.imgUri,
    this.title,
    this.desc,
    this.startTime,
    this.endTime,
    this.instructoName,
    this.onTapDetails,
    this.courseActiveStatus,
    this.menuItems,
    this.onSelectedmenuItem,
    this.duration,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      margin: EdgeInsets.only(bottom: AppSpacing().xl),
      shape: RoundedRectangleBorder(
          side: const BorderSide(color: Colors.transparent),
          borderRadius: BorderRadius.circular(14)),
      child: Container(
        width: DeviceScreenWidth.hundaredPercent,
        padding: EdgeInsets.symmetric(
            vertical: AppSpacing().md + 4, horizontal: AppSpacing().md),
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
                AppSpacing().xl.height,
                // course active Status
                Center(
                  child: Column(
                    children: [
                      ActiveStatusDotView(
                          color: courseActiveStatus == "pending"
                              ? AppColor.warning
                              : courseActiveStatus == "active"
                                  ? AppColor.primary
                                  : AppColor.appRed),
                      AppSpacing().md.height,
                      Text(
                        courseActiveStatus ?? "Upcoming",
                        style: AppTextStyle().secodaryText,
                      )
                    ],
                  ),
                )
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
                          Expanded(
                            child: Text(
                              title ?? "Course Title",
                              style: appTextTheme.titleMedium,
                            ),
                          ),
                          AppSpacing().sm.width,
                          PopupMenuButton(
                              // color: AppColor.divier,

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
                        style: appTextTheme.titleMedium,
                      ),
                // AppSpacing().sm.height,
                Text(
                  desc ?? "This will be the course description",
                  maxLines: 2,
                  style: appTextTheme.bodyMedium!
                      .copyWith(overflow: TextOverflow.ellipsis),
                ),
                // const AppDivider(),
                AppSpacing().xl.height,

                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    DurationAnndInstructor(
                      instructoName: instructoName,
                      duration: duration,
                    ),
                    AppSpacing().sm.width,
                    DetailslButton(onTapDetails: onTapDetails)
                  ],
                ),
              ],
            ))
          ],
        ),
      ),
    );
  }
}

class DetailslButton extends StatelessWidget {
  const DetailslButton({
    super.key,
    required this.onTapDetails,
  });

  final Function()? onTapDetails;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        NeumorphicButton(
          onPressed: onTapDetails,
          style: AppButtonStyle().submit.copyWith(
                color: AppColor.primary,
                intensity: 0,
              ),
          child: Text(
            "Details",
            style: AppTextStyle().normal.copyWith(color: Colors.white),
          ),
        )
        /*  ElevatedButton(
        onPressed: () {
          onTapDetails != null ? onTapDetails!() : null;
        },
        style: AppButtonStyle().secondary,
        child: const Text(
          "Details Now",
        )) */
        ,
      ],
    );
  }
}

class DurationAnndInstructor extends StatelessWidget {
  const DurationAnndInstructor({
    super.key,
    required this.instructoName,
    required this.duration,
  });

  final String? instructoName;
  final String? duration;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Icon(
              Icons.timer,
              color: AppColor.hitnsAndBorder,
              size: 14,
            ),
            AppSpacing().md.width,
            Text("$duration Months", style: appTextTheme.labelMedium)
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
              color: AppColor.hitnsAndBorder,
              size: 14,
            ),
            AppSpacing().md.width,
            Text(
              instructoName!.length < 20
                  ? instructoName ?? "Instructor Name"
                  : "Japanese Instructor",
              style: appTextTheme.labelMedium,
            )
          ],
        ),
      ],
    );
  }
}
