import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';
import 'package:flutter_application/app/core/widgets/baseWidget.dart';

import 'package:get/get.dart';

import '../controllers/forum_comments_controller.dart';

class ForumCommentsView extends GetView<ForumCommentsController> {
  const ForumCommentsView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: "Comments",
      child: Column(
        children: [
          // Comment List
          Expanded(
            child: ListView.builder(
              padding: EdgeInsets.all(8.0),
              itemCount: 10, // Replace with actual comment count
              itemBuilder: (context, index) {
                // index for dummy user image
                int randomIndex = controller.mGenerateRandomIndex();
                return vCommentItem(randomIndex);
              },
            ),
          ),

          // Input field for adding a comment
          vCommentInput(),
        ],
      ),
    );
  }

  // Comment list item UI
  Widget vCommentItem(int randomIndex) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // User Avatar
          CircleAvatar(
            radius: 16,
            backgroundImage: AssetImage(AppConstants.commonViewProperties.dummyAllPeopleAssetLocations[randomIndex]) // Replace with actual avatar URL
          ),
          SizedBox(width: 10),

          // Comment details (Username, Date, Comment Text)
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Username and Date
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'User Name', // Replace with actual username
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                    ),
                    Text(
                      '2 hours ago', // Replace with actual date/time
                      style: TextStyle(color: Colors.grey, fontSize: 12),
                    ),
                  ],
                ),
                SizedBox(height: 5),
                // Comment text
                Text(
                  'This is a sample comment to display.This is a sample comment to display.', // Replace with actual comment text
                  style: TextStyle(fontSize: 14),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // Comment input field and send button
  Widget vCommentInput() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        children: [
          // Comment input field
          Expanded(
            child: Container(
              padding: EdgeInsets.symmetric(horizontal: 10.0),
              decoration: BoxDecoration(
                color: Colors.grey[200],
                borderRadius: BorderRadius.circular(20.0),
              ),
              child: TextField(
                // controller: commentController,
                decoration: InputDecoration(
                  hintText: 'Write a comment...',
                  border: InputBorder.none,
                ),
              ),
            ),
          ),
          SizedBox(width: 10),
          // Send button
          GestureDetector(
            onTap: () {
              // Add your comment post logic here
            },
            child: Container(
              padding: EdgeInsets.all(10.0),
              decoration: BoxDecoration(
                color: Colors.blue,
                shape: BoxShape.circle,
              ),
              child: Icon(
                Icons.send,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
