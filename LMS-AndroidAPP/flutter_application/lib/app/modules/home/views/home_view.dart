import 'package:flutter/material.dart';

import 'package:get/get.dart';
import '../../../core/core_lib.dart';
import '../../../widgets/widgets_lib.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Home",
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Card(
                child: Container(
                  width: DeviceScreenWidth.ninetyPercent,
                  padding: EdgeInsets.all(AppSpacing.md),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Image.asset(
                        "assets/logos/markshit.png",
                        fit: BoxFit.fill,
                        width: DeviceScreenWidth.twentyPercent,
                      ),
                      AppSpacing.xl.width,
                      Expanded(
                          child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Course Name",
                            style: AppTextStyle.titleLarge,
                          ),
                          AppSpacing.md.height,
                          Text(
                            "This will be the course full description with details",
                            style: AppTextStyle.titleMedium,
                          ),
                        ],
                      ))
                    ],
                  ),
                ),
              ),
            ],
          ),
        ));
  }
}
