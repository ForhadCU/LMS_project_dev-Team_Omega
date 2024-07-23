import 'package:flutter/material.dart';

import '../core/styles/spacing_style.dart';
import '../core/values/colors.dart';

class AppTextFiled extends StatelessWidget {
  final TextEditingController textEditingController;
  final String title;
  final Function(String text)? onChanged;
  final Function? onTapSuffixIcon;
  final IconData? prefixIconData;
  final IconData? suffixIconData;
  final bool? isObscureText;

  const AppTextFiled(
      {super.key,
      required this.title,
      required this.textEditingController,
      this.onChanged,
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
      textInputAction: TextInputAction.next,
      textAlignVertical: TextAlignVertical.center,
      textAlign: TextAlign.left,
      decoration: InputDecoration(
        focusedBorder: const OutlineInputBorder(
            borderSide: BorderSide(
          color: AppColor.primary,
        )),
        floatingLabelStyle: const TextStyle(color: AppColor.primary),
        label: Text(
          title,
        ),
        prefixIcon: prefixIconData != null
            ? Icon(
                prefixIconData,
                color: AppColor.secondaryIcon,
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
                  color: AppColor.secondaryIcon,
                ),
              )
            : null,
        isDense: true,
        contentPadding: const EdgeInsets.all(AppSpacing.md),
        border: const OutlineInputBorder(
            borderSide: BorderSide(color: AppColor.textFieldBorder)),
      ),
    );
  }
}
