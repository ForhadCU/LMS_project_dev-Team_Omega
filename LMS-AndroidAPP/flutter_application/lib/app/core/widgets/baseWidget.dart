import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_application/app/core/values/data.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
import 'package:get/get.dart';

import '../core_lib.dart';

class BaseWidget extends StatelessWidget {
  final String? title;
  final bool? isDrawer;
  final Widget? actionsWidget;
  final Widget child;
  final Color? backgroundColor;
  final bool? isLeadingIcon;

  BaseWidget(
      {super.key,
      this.title,
      required this.child,
      this.isDrawer,
      this.actionsWidget,
      this.backgroundColor,
      this.isLeadingIcon});
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: backgroundColor ?? AppColor.defaultBg,
        key: _scaffoldKey,
        appBar: AppBar(
          automaticallyImplyLeading: isLeadingIcon ?? true,
          title: Text((title ?? "").toUpperCase()),
          leading: isDrawer == true
              ? Container(
                  margin: EdgeInsets.all(AppSpacing().md),
                  decoration: BoxDecoration(
                    color: AppColor.secondaryBg,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: IconButton(
                    icon: Image(
                      image: AssetImage(
                        AppAssetLocations.ic_drawer,
                      ),
                      width: AppData().appBarIconWidth,
                      height: AppData().appBarIconHeight,
                    ), // Custom icon color
                    onPressed: () {
                      _scaffoldKey.currentState!.openDrawer();
                    },
                  ),
                )
              : Container(
                  margin: EdgeInsets.all(AppSpacing().md),
                  decoration: BoxDecoration(
                    color: AppColor.secondaryBg,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: IconButton(
                    icon: Image(
                      image: AssetImage(
                        AppAssetLocations.ic_back,
                      ),
                      width: AppData().appBarIconWidth,
                      height: AppData().appBarIconHeight,
                    ), // Custom icon color
                    onPressed: () {
                      Get.back();
                    },
                  ),
                ),
          actions: [
            isDrawer == true
                ? Row(
                    children: [
                      Container(
                        margin: EdgeInsets.all(AppSpacing().md),
                        decoration: BoxDecoration(
                          color: AppColor.secondaryBg,
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: IconButton(
                          icon: Image(
                            image: AssetImage(
                              AppAssetLocations.ic_notification,
                            ),
                            width: AppData().appBarIconWidth,
                            height: AppData().appBarIconHeight,
                          ), // Custom icon color
                          onPressed: () {
                            // _scaffoldKey.currentState!.openDrawer();
                          },
                        ),
                      ),
                      AppSpacing().md.width
                    ],
                  )
                : Container(),
            actionsWidget == null ? Container() : actionsWidget!,
          ],
        ),
        drawer: isDrawer == true ? vDrawer() : null,
        body: Container(
          padding: const EdgeInsets.all(8),
          /*  
          color: AppColor.secondaryBg, */
          child: child,
        ),
      ),
    );
  }

  vDrawer() {
    return Drawer(
      child: Container(
        color: Colors.white, // Background color for the drawer
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(
                  // color: Color(0xFF136537), // Primary color
                  color: AppColor.defaultBg),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  CircleAvatar(
                    radius: 40,
                    backgroundImage: AssetImage(AppAssetLocations
                        .img_roy_sensei), // Sample profile picture
                  ),
                  const SizedBox(height: 10),
                  Text(
                    AppConstants.names.jayontoRay,
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const Text(
                    'your.email@example.com',
                    style: TextStyle(
                      color: Colors.black87,
                      fontSize: 14,
                    ),
                  ),
                ],
              ),
            ),
            ListTile(
              dense: true,
              // leading: Icon(Icons.home, color: Color(0xFF136537)), // Primary color
              title: const Text('Home'),
              onTap: () {
                // controller.navigateToPage('/');
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            ListTile(
                dense: true,
                // leading: Icon(Icons.pageview, color: Color(0xFF136537)),
                title: const Text('My Courses'),
                onTap: () {
                  Get.toNamed(Routes.ALLCOURSES);
                },
                tileColor: Colors.white,
                textColor: AppColor.normalText, // Primary color for text
                contentPadding: const EdgeInsets.symmetric(horizontal: 16),
                trailing: const Icon(
                  Icons.arrow_forward_ios,
                  size: 14,
                )),
            ListTile(
              dense: true,

              // leading: Icon(Icons.pages, color: Color(0xFF136537)),
              title: const Text(
                'Forum',
              ),
              onTap: () {
                // controller.navigateToPage('/page2');
                Get.toNamed(Routes.FORUM);
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            const Divider(color: Color(0xFF4ABDAC)),
            ListTile(
              dense: true,
              // leading: Icon(Icons.home, color: Color(0xFF136537)), // Primary color
              title: const Text('Create Course'),
              onTap: () {
                Get.toNamed(Routes.CREATE_COURSE);
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            ListTile(
                dense: true,

                // leading: Icon(Icons.pageview, color: Color(0xFF136537)),
                title: const Text('Create Course Content'),
                onTap: () {
                  Get.toNamed(Routes.CREATE_COURSE_CONTENTS);
                },
                tileColor: Colors.white,
                textColor: AppColor.normalText, // Primary color for text
                contentPadding: const EdgeInsets.symmetric(horizontal: 16),
                trailing: const Icon(
                  Icons.arrow_forward_ios,
                  size: 14,
                )),
            ListTile(
              dense: true,

              // leading: Icon(Icons.pages, color: Color(0xFF136537)),
              title: const Text('Create Post'),
              onTap: () {
                // controller.navigateToPage('/page2');
                Get.toNamed(Routes.CREATE_FORUM_POSTS);
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            ListTile(
              dense: true,

              // leading: Icon(Icons.pages, color: Color(0xFF136537)),
              title: const Text('Create Quiz'),
              onTap: () {
                // controller.navigateToPage('/page2');
                Get.toNamed(Routes.CREATE_QUIZES);
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            ListTile(
              dense: true,

              // leading: Icon(Icons.pages, color: Color(0xFF136537)),
              title: const Text('Upload Resourse'),
              onTap: () {
                // controller.navigateToPage('/page2');
                Get.toNamed(Routes.CREATE_GENRAL_RESOURCES);
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            ListTile(
              dense: true,

              // leading: Icon(Icons.pages, color: Color(0xFF136537)),
              title: const Text('Upload Recording'),
              onTap: () {
                // controller.navigateToPage('/page2');
                Get.toNamed(Routes.CREATE_RECORDINGS);
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ), // Secondary color for divider
            const Divider(color: Color(0xFF4ABDAC)),

            ListTile(
              dense: true,
/* 
              leading: Icon(Icons.settings,
                  color: Color(0xFF4ABDAC)),  */ // Secondary color
              title: const Text('Settings'),
              onTap: () {
                // Navigate to Settings or add your custom logic
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
            ListTile(
              dense: true,

              /*  leading: Icon(Icons.logout,
                  color: Color(0xFFFF6F61)),  */ // Accent color for logout
              title: const Text('Logout'),
              onTap: () {
                // Handle logout
              },
              tileColor: Colors.white,
              textColor: AppColor.normalText, // Primary color for text
              contentPadding: const EdgeInsets.symmetric(horizontal: 16),
              trailing: const Icon(
                Icons.arrow_forward_ios,
                size: 14,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
