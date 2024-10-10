import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/widgets/baseWidget.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/create_quizes_controller.dart';

class CreateQuizesView extends GetView<CreateQuizesController> {
  CreateQuizesView({Key? key}) : super(key: key);

  final _formKey = GlobalKey<FormState>();

  final TextEditingController titleController = TextEditingController();
  final TextEditingController formLinkController = TextEditingController();
  final TextEditingController quizDateController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: 'Create Quiz',
      actionsWidget: InkWell(
        onTap: () {
          controller.mSaveQuiz(_formKey);
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
              const SizedBox(width: 4),
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
                // Quiz Title Field
                TextFormField(
                  controller: titleController,
                  decoration: const InputDecoration(
                    labelText: 'Quiz Title',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the quiz title';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),

                // Quiz Type Dropdown
                Obx(() {
                  return DropdownButtonFormField<String>(
                    value: controller.selectedQuizType.value,
                    items: const [
                      DropdownMenuItem(
                        child: Text("Daily"),
                        value: "daily",
                      ),
                      DropdownMenuItem(
                        child: Text("Weekly"),
                        value: "weekly",
                      ),
                      DropdownMenuItem(
                        child: Text("Practice"),
                        value: "practice",
                      ),
                    ],
                    onChanged: (value) {
                      controller.updateQuizType(value!);
                    },
                    decoration: const InputDecoration(
                      labelText: 'Quiz Type',
                      border: OutlineInputBorder(),
                    ),
                  );
                }),
              /*   const SizedBox(height: 20),

                // Image Picker Button
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ElevatedButton.icon(
                      icon: const Icon(Icons.image),
                      label: const Text('Pick Image'),
                      onPressed: () {
                        // controller.pickImage();
                      },
                    ),
                    const SizedBox(height: 10),

                    // Display the selected image
                    /*   controller.selectedImage.value != null
                          ? Image.file(
                              controller.selectedImage.value!,
                              height: 200,
                              width: double.infinity,
                              fit: BoxFit.cover,
                            )
                          : Text("No image selected."), */
                  ],
                ), */

                const SizedBox(height: 20),

                // Form Link Field
                TextFormField(
                  controller: formLinkController,
                  decoration: const InputDecoration(
                    labelText: 'Form Link',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the form link';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),

                // Quiz Date Field
                TextFormField(
                  controller: quizDateController,
                  decoration: const InputDecoration(
                    labelText: 'Quiz Date (YYYY-MM-DD)',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the quiz date';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
