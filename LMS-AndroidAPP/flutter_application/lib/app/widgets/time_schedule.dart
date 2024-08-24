import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';

class TimeScheduleView extends StatelessWidget {
  final String startTime;
  final String endTime;
  const TimeScheduleView(
      {super.key, required this.startTime, required this.endTime});

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Icon(
          Icons.timer,
          color: AppColor.textFieldBorder,
          size: 14,
        ),
        AppSpacing.md.width,
        Text(
          startTime,
          style: AppTextStyle.secodaryText,
        ),
        AppSpacing.sm.width,
        Text(
          "-",
          style: AppTextStyle.secodaryText,
        ),
        AppSpacing.sm.width,
        Text(
          endTime,
          style: AppTextStyle.secodaryText,
        ),
      ],
    );
  }
}
