import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/styles/txt_style.dart';
import 'package:flutter_application/app/data/models/user_roles_response_model.dart';
import 'package:flutter_application/app/modules/register/controllers/register_controller.dart';
import 'package:get/get.dart';

import '../../../../core/styles/spacing_style.dart';
import '../../../../core/values/colors.dart';

class UserRoleDropdown extends StatelessWidget {
  final RegisterController controller;
  const UserRoleDropdown({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
          horizontal: AppSpacing.md, vertical: AppSpacing.md + AppSpacing.smh),
      decoration: BoxDecoration(
          color: AppColor.defaultBg,
          borderRadius: BorderRadius.circular(4),
          border: Border.all(
            color: AppColor.textFieldBorder,
            width: .5,
          )),
      child: Obx(() => DropdownButton<UserRole>(
            value: controller.selectedUserRole.value,
            hint: Text(
              "Select User Role",
              style: AppTextStyle.normal.copyWith(
                fontWeight: FontWeight.w400,
              ),
            ),
            icon: const Icon(Icons.keyboard_arrow_down, ),
            focusColor: AppColor.defaultBg,
            dropdownColor: AppColor.defaultBg,
            isDense: true,
            isExpanded: true,
            underline: Container(),
            onChanged: (UserRole? selectedRole) {
              controller.mChangeUserRoleDropdownValue(selectedRole!);
            },
            items: controller.userRoleList.map((UserRole value) {
              return DropdownMenuItem<UserRole>(
                value: value,
                child: Text(
                  value.roleName!,
                  style:
                      AppTextStyle.normal.copyWith(fontWeight: FontWeight.w500),
                ),
              );
            }).toList(),
          )),
    );
  }
}