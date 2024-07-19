import 'package:flutter/material.dart';

import '../core/styles/spacing_style.dart';
import '../core/values/colors.dart';

class AppTextFiled extends StatelessWidget {
  final String title;
  final Function(String text) onChanged;
  const AppTextFiled({super.key, required this.title, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      onChanged: (String value) {
        onChanged(value);
      },
      textInputAction: TextInputAction.next,
      textAlignVertical: TextAlignVertical.center,
      textAlign: TextAlign.left,
      decoration: InputDecoration(
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
          color: AppColor.primary,
        )),
        floatingLabelStyle: TextStyle(color: AppColor.primary),
        label: Text(
          title,
        ),
        prefixIcon: Icon(
          Icons.email,
          color: AppColor.secondaryIcon,
        ),
        isDense: true,
        contentPadding: EdgeInsets.all(AppSpacing.md),
        border: OutlineInputBorder(
            borderSide: BorderSide(color: AppColor.textFieldBorder)),
      ),
    );
  }
}
