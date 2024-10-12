import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/create_genral_resources_controller.dart';

class CreateGenralResourcesView
    extends GetView<CreateGenralResourcesController> {
  CreateGenralResourcesView({Key? key}) : super(key: key);
  final _formKey = GlobalKey<FormState>();

  final TextEditingController titleController = TextEditingController();
  final TextEditingController descriptionController = TextEditingController();
  final TextEditingController ResourceLinkController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: "Upload Resource",
      actionsWidget: InkWell(
        onTap: () {
          controller.mSaveGeneralResource(
            _formKey,
            titleController,
            descriptionController,
            ResourceLinkController);
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
                    labelText: 'Resource Title',
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

                // Resource Link Field
                TextFormField(
                  controller: ResourceLinkController,
                  decoration: InputDecoration(
                    labelText: 'Resource Link',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the Resource link';
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
                    labelText: 'Resource Description',
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
