import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_application/app/core/values/data.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:get/get.dart';

import '../core_lib.dart';

class BaseWidget extends StatelessWidget {
  final String? title;
  final bool? isDrawer;
  final Widget child;

  BaseWidget({super.key, this.title, required this.child, this.isDrawer});
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          title: Text((title ?? "").toUpperCase()),
          leading: isDrawer == true
              ? Container(
                  margin: EdgeInsets.all(AppSpacing().md),
                  decoration: BoxDecoration(
                    color: AppColor().secondaryBg,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: IconButton(
                    icon: Image(
                      image: AssetImage(
                        AppAssetLocations().ic_drawer,
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
                    color: AppColor().secondaryBg,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: IconButton(
                    icon: Image(
                      image: AssetImage(
                        AppAssetLocations().ic_back,
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
                          color: AppColor().secondaryBg,
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: IconButton(
                          icon: Image(
                            image: AssetImage(
                              AppAssetLocations().ic_notification,
                            ),
                            width: AppData().appBarIconWidth,
                            height: AppData().appBarIconHeight,
                          ), // Custom icon color
                          onPressed: () {
                            _scaffoldKey.currentState!.openDrawer();
                          },
                        ),
                      ),
                      AppSpacing().md.width
                    ],
                  )
                : Container()
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
                color: Color(0xFF136537), // Primary color
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  CircleAvatar(
                    radius: 40,
                    backgroundImage: NetworkImage(
                        'https://via.placeholder.com/150'), // Sample profile picture
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Your Name',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Text(
                    'your.email@example.com',
                    style: TextStyle(
                      color: Colors.white70,
                      fontSize: 14,
                    ),
                  ),
                ],
              ),
            ),
            ListTile(
              leading:
                  Icon(Icons.home, color: Color(0xFF136537)), // Primary color
              title: Text('Home'),
              onTap: () {
                // controller.navigateToPage('/');
              },
              tileColor: Colors.white,
              textColor: Color(0xFF136537), // Primary color for text
              contentPadding: EdgeInsets.symmetric(horizontal: 16),
            ),
            ListTile(
              leading: Icon(Icons.pageview, color: Color(0xFF136537)),
              title: Text('Page 1'),
              onTap: () {
                // controller.navigateToPage('/page1');
              },
              tileColor: Colors.white,
              textColor: Color(0xFF136537),
              contentPadding: EdgeInsets.symmetric(horizontal: 16),
            ),
            ListTile(
              leading: Icon(Icons.pages, color: Color(0xFF136537)),
              title: Text('Page 2'),
              onTap: () {
                // controller.navigateToPage('/page2');
              },
              tileColor: Colors.white,
              textColor: Color(0xFF136537),
              contentPadding: EdgeInsets.symmetric(horizontal: 16),
            ),
            Divider(color: Color(0xFF4ABDAC)), // Secondary color for divider
            ListTile(
              leading: Icon(Icons.settings,
                  color: Color(0xFF4ABDAC)), // Secondary color
              title: Text('Settings'),
              onTap: () {
                // Navigate to Settings or add your custom logic
              },
              tileColor: Colors.white,
              textColor: Color(0xFF4ABDAC),
              contentPadding: EdgeInsets.symmetric(horizontal: 16),
            ),
            ListTile(
              leading: Icon(Icons.logout,
                  color: Color(0xFFFF6F61)), // Accent color for logout
              title: Text('Logout'),
              onTap: () {
                // Handle logout
              },
              tileColor: Colors.white,
              textColor: Color(0xFFFF6F61),
              contentPadding: EdgeInsets.symmetric(horizontal: 16),
            ),
          ],
        ),
      ),
    );
  }
}
