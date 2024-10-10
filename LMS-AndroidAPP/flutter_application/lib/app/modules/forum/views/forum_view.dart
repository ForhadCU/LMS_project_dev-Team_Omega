import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/widgets/baseWidget.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';

import 'package:get/get.dart';

import '../controllers/forum_controller.dart';

class ForumView extends GetView<ForumController> {
  const ForumView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
        title: "Forum",
        actionsWidget: Container(
          margin: const EdgeInsets.symmetric(horizontal: 12.0),
          child: Row(
            children: [
              Text(
                'New',
                style: AppTextStyle()
                    .normal
                    .copyWith(fontSize: 16, color: AppColor.normalText),
              ),
              SizedBox(width: 2),
              Icon(Icons.add, size: 24, color: AppColor.primary),
            ],
          ),
        ),
        child: ListView.builder(
            itemCount: 12,
            itemBuilder: ((context, index) {
              int randomIndex = controller.mGenerateRandomIndex();

              return vForumCard(randomIndex);
            }))
        //  vForumCard(),
        );
  }

  vForumCard(int randomIndex) {
    return Card(
      margin: EdgeInsets.all(10),
      elevation: 3,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15),
      ),
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header Row: Avatar, Name, and Date
            Row(
              children: [
                // User avatar
                CircleAvatar(
                  radius: 20,
                  backgroundImage: AssetImage(AppConstants.commonViewProperties
                      .dummyAllPeopleAssetLocations[randomIndex]),
                ),
                SizedBox(width: 10),
                // User name and post date/time
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      AppConstants.names.jubayearAhmmed,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                      ),
                    ),
                    Text(
                      "9 Oct 2024",
                      style: TextStyle(
                        color: Colors.grey[600],
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
              ],
            ),
            SizedBox(height: 10),
            // Post text content
            Text(
              "The above methods work and you can't restore the missing object, you may need to forcefully remove the reference to the missing object.",
              style: TextStyle(fontSize: 14),
            ),
            SizedBox(height: 10),
            Divider(),
            // Likes and Comments row
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Icon(Icons.thumb_up_alt_outlined,
                        size: 20, color: Colors.grey[700]),
                    SizedBox(width: 5),
                    Text('34 likes'),
                  ],
                ),
                InkWell(
                  onTap: () {
                    controller.mNavigateToCommentPage();
                  },
                  child: Row(
                    children: [
                      Icon(Icons.comment_outlined,
                          size: 20, color: Colors.grey[700]),
                      SizedBox(width: 5),
                      Text('12 comments'),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
