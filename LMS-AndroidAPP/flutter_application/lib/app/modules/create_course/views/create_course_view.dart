import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/widgets/baseWidget.dart';
import 'package:flutter_application/app/core/widgets/progress_loader.dart';

import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../controllers/create_course_controller.dart';

class CreateCourseView extends GetView<CreateCourseController> {
  CreateCourseView({Key? key}) : super(key: key);

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
          mSaveCourse();
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
      child: Obx(() => !controller.isInitialLoading.value
          ? Container(
              margin: const EdgeInsets.symmetric(horizontal: 16),
              child: Form(
                key: _formKey,
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(height: 20),

                      // Title Field
                      TextFormField(
                        controller: titleController,
                        decoration: const InputDecoration(
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
                      const SizedBox(height: 20),

                      // Code Field
                      TextFormField(
                        controller: codeController,
                        decoration: const InputDecoration(
                          labelText: 'Course Code',
                          border: OutlineInputBorder(),
                        ),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return 'Please enter the course code';
                          }
                          return null;
                        },
                      ),
                      const SizedBox(height: 20),

                      // Description Field
                      TextFormField(
                        controller: descriptionController,
                        maxLines: 3,
                        decoration: const InputDecoration(
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
                      const SizedBox(height: 20),

                      // Duration Field (in months)
                      TextFormField(
                        controller: durationController,
                        keyboardType: TextInputType.number,
                        decoration: const InputDecoration(
                          labelText: 'Duration (Months)',
                          border: OutlineInputBorder(),
                        ),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return 'Please enter the course duration';
                          }
                          return null;
                        },
                      ),
                      const SizedBox(height: 20),

                      // Course Type Dropdown
                      DropdownButtonFormField<String>(
                        value: controller.selectedCourseType,
                        items: [
                          const DropdownMenuItem(
                            child: Text("Language"),
                            value: "language",
                          ),
                          const DropdownMenuItem(
                            child: Text("Technical"),
                            value: "technical",
                          ),
                        ],
                        onChanged: (value) {
                          /*   setState(() {
                      selectedCourseType = value!;
                    }); */
                        },
                        decoration: const InputDecoration(
                          labelText: 'Course Type',
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(height: 20),

                      // Instructors Selection List
                      const Text("Select Instructors"),
                      const SizedBox(height: 10),
                      ListView.builder(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        // itemCount: AppConstants .commonViewProperties.dummyTeacherAssetLocations.length,
                        itemCount: controller.allInstructors.length,
                        itemBuilder: (context, index) {
                          final instructor = controller.allInstructors[index];
                          /*  controller.isSelected.value = controller
                              .selectedInstructors
                              .contains(instructor.id); */

                          return Obx(() => ListTile(
                                leading: index <
                                        AppConstants.commonViewProperties
                                            .dummyTeacherAssetLocations.length
                                    ? CircleAvatar(
                                        backgroundImage: AssetImage(AppConstants
                                            .commonViewProperties
                                            .dummyTeacherAssetLocations[index]),
                                      )
                                    : CircleAvatar(
                                        child: Text(
                                          AppHelpers()
                                              .mGenerateShortName(
                                                  instructor.name)
                                              .toUpperCase(),
                                          style: TextStyle(
                                              fontSize: 16,
                                              fontWeight: FontWeight.bold,
                                              color: Colors.white),
                                        ),
                                      ),
                                title: Text(instructor.name),
                                subtitle: Text(instructor.role),
                                trailing: controller.selectedInstructorsId
                                        .contains(instructor.id)
                                    ? const Icon(Icons.check_circle,
                                        color: Colors.green)
                                    : const Icon(Icons.circle_outlined),
                                onTap: () {
                                  controller.toggleInstructorSelection(
                                      instructor.id, index);
                                },
                              ));
                        },
                      ),
                    ],
                  ),
                ),
              ),
            )
          : Center(
              child: AppProgressLoader(),
            )),
    );
  }

  void mSaveCourse() {
    controller.mSaveCourse(
      _formKey,
      titleController,
      codeController,
      descriptionController,
      durationController,
    );
  }
}
