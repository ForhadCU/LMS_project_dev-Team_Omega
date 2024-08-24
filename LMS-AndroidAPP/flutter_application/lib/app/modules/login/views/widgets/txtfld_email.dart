import 'package:flutter/material.dart';

import '../../../../widgets/textfield.dart';
import '../../controllers/login_controller.dart';

class EmailTextField extends StatelessWidget {
  final LoginController controller;
  const EmailTextField({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return AppTextFiled(
      title: "Email",
      onChanged: (String text) {},
      textEditingController: controller.emailCtrl,
      prefixIconData: Icons.email,
    );

    /* 
    return Row(
      children: [
        Expanded(
          child: TextFormField(
            controller: controller.emailCtrl,
            onChanged: (String value) {},
            textInputAction: TextInputAction.next,
            textAlignVertical: TextAlignVertical.center,
            textAlign: TextAlign.left,
            decoration: const InputDecoration(
              focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                color: AppColor.primary,
              )),
              floatingLabelStyle: TextStyle(color: AppColor.primary),
              label: Text(
                "Email",
              ),
              prefixIcon: Icon(
                Icons.email,
                color: AppColor.secondaryIcon,
              ),
              isDense: true,
              contentPadding: EdgeInsets.all(AppSpacing.md),
              enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: AppColor.textFieldBorder)),
            ),
          ),
        ),
      ],
    );
   */
  }
}
