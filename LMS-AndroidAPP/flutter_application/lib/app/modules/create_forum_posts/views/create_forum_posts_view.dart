import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/create_forum_posts_controller.dart';

class CreateForumPostsView extends GetView<CreateForumPostsController> {
  CreateForumPostsView({Key? key}) : super(key: key);

  final _formKey = GlobalKey<FormState>();

  final TextEditingController titleController = TextEditingController();
  final TextEditingController codeController = TextEditingController();
  final TextEditingController descriptionController = TextEditingController();
  final TextEditingController durationController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: 'Create new Course',
      actionsWidget: InkWell(
        onTap: () {
          controller.mSavePost(_formKey);
        },
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            children: [
              Text(
                'Save',
                style: AppTextStyle()
                    .normal
                    .copyWith(fontSize: 16, color: AppColor.normalText),
              ),
              SizedBox(width: 4),
              Icon(Icons.save, size: 24, color: AppColor.primary),
            ],
          ),
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Title Field
                TextFormField(
                  controller: titleController,
                  decoration: InputDecoration(
                    labelText: 'Course Title',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the course title';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 20),

                // Description Field
                TextFormField(
                  controller: descriptionController,
                  maxLines: 3,
                  decoration: InputDecoration(
                    labelText: 'Description',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the course description';
                    }
                    return null;
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
