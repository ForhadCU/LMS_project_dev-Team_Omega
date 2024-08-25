import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../../core/core_lib.dart';
import '../../../../core/styles/spacing_style.dart';
import '../../../../core/values/colors.dart';
import '../../../../data/models/batches_response_model.dart';
import '../../controllers/register_controller.dart';

class BatchDropdown extends StatelessWidget {
  final RegisterController controller;
  const BatchDropdown({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding:  EdgeInsets.symmetric(
          horizontal: AppSpacing().md, vertical: AppSpacing().md + AppSpacing().smh),
      decoration: BoxDecoration(
          color: AppColor().defaultBg,
          borderRadius: BorderRadius.circular(4),
          border: Border.all(
            color: AppColor().textFieldBorder,
            width: .5,
          )),
      child: Obx(() => DropdownButton<Batch>(
            value: controller.selectedBatch.value,
            hint: Text(
              "Select Batch",
              style: AppTextStyle().normal.copyWith(
                fontWeight: FontWeight.w400,
              ),
            ),
            icon: const Icon(Icons.keyboard_arrow_down),
            iconSize: 12,
            focusColor: AppColor().defaultBg,
            dropdownColor: AppColor().defaultBg,
            isDense: true,
            isExpanded: true,
            underline: Container(),
            onChanged: (Batch? selectedValue) {
              controller.mChangeBatchDropdownValue(selectedValue!);
            },
            items: controller.batchList.map((Batch value) {
              return DropdownMenuItem<Batch>(
                value: value,
                child: Text(
                  value.batchName!,
                  style:
                      AppTextStyle().normal.copyWith(fontWeight: FontWeight.w500),
                ),
              );
            }).toList(),
          )),
    );
  }
}
