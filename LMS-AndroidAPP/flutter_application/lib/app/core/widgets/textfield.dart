import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';

import '../styles/spacing_style.dart';
import '../values/colors.dart';

class AppTextFiled extends StatelessWidget {
  final TextEditingController textEditingController;
  final String title;
  final Function(String text)? onChanged;
  final Function? onTapSuffixIcon;
  final IconData? prefixIconData;
  final IconData? suffixIconData;
  final bool? isObscureText;
  final TextInputAction? textInputAction;

  const AppTextFiled(
      {super.key,
      required this.title,
      required this.textEditingController,
      this.onChanged,
      this.textInputAction,
      this.prefixIconData,
      this.suffixIconData,
      this.isObscureText,
      this.onTapSuffixIcon});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: textEditingController,
      onChanged: onChanged != null
          ? (String text) {
              onChanged!(text);
            }
          : null,
      obscureText: isObscureText ?? false,
      textInputAction: textInputAction ?? TextInputAction.next,
      textAlignVertical: TextAlignVertical.center,
      textAlign: TextAlign.left,
      decoration: InputDecoration(
        focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
          color: AppColor().primary,
        )),
        floatingLabelStyle: TextStyle(color: AppColor().primary),
        label: Text(
          title,
          // style: AppTextStyle().normal,
        ),
        prefixIcon: prefixIconData != null
            ? Icon(
                prefixIconData,
                color: AppColor().secondaryIcon,
              )
            : null,
        suffixIcon: suffixIconData != null
            ? InkWell(
                onTap: onTapSuffixIcon != null
                    ? () {
                        onTapSuffixIcon!();
                      }
                    : null,
                child: Icon(
                  suffixIconData,
                  color: AppColor().secondaryIcon,
                ),
              )
            : null,
        isDense: true,
        contentPadding: EdgeInsets.all(AppSpacing().md),
        border: OutlineInputBorder(
            borderSide: BorderSide(color: AppColor().textFieldBorder)),
      ),
    );
  }
}
