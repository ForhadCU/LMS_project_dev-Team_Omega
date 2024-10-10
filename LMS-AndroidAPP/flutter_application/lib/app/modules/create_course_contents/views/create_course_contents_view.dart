import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/widgets/baseWidget.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/create_course_contents_controller.dart';

class CreateCourseContentsView extends GetView<CreateCourseContentsController> {
  CreateCourseContentsView({Key? key}) : super(key: key);
  final _formKey = GlobalKey<FormState>();

  final TextEditingController titleController = TextEditingController();
  final TextEditingController descriptionController = TextEditingController();
  final TextEditingController contentLinkController = TextEditingController();
  final TextEditingController createDateController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: "Create Content",
      actionsWidget: InkWell(
        onTap: () {
          controller.mSaveCourseContent(_formKey);
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
                    labelText: 'Content Title',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the lesson title';
                    }
                    return null;
                  },
                ),

                SizedBox(height: 20),

                // Content Type Dropdown
                Obx(() {
                  return DropdownButtonFormField<String>(
                    value: controller.selectedContentType.value,
                    items: [
                      DropdownMenuItem(
                        child: Text("Lecture"),
                        value: "lecture",
                      ),
                      DropdownMenuItem(
                        child: Text("File"),
                        value: "file",
                      ),
                      DropdownMenuItem(
                        child: Text("Video"),
                        value: "video",
                      ),
                      DropdownMenuItem(
                        child: Text("Resource"),
                        value: "resource",
                      ),
                    ],
                    onChanged: (value) {
                      controller.updateContentType(value!);
                    },
                    decoration: InputDecoration(
                      labelText: 'Content Type',
                      border: OutlineInputBorder(),
                    ),
                  );
                }),
                SizedBox(height: 20),

                // Content Link Field
                TextFormField(
                  controller: contentLinkController,
                  decoration: InputDecoration(
                    labelText: 'Content Link',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the content link';
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
                    labelText: 'Content Description',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the lesson description';
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
