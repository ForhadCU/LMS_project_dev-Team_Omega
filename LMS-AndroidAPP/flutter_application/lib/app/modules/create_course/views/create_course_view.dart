import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/core/widgets/baseWidget.dart';

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

  String selectedCourseType = "language";

  final List<Map<String, String>> allInstructors = [
    {
      'id': '66a8f33ef23611ddfe55422d',
      'name': 'Joynto Roy',
      'designation': 'Japanese Instructor',
      'avatarUrl': 'https://via.placeholder.com/150'
    },
    {
      'id': '66ee6f044850e564e7088581',
      'name': 'Jubayer Ahmed',
      'designation': 'Japanese Instructor',
      'avatarUrl': 'https://via.placeholder.com/150'
    },
    {
      'id': 'instructor1',
      'name': 'Michael Johnson',
      'designation': 'Nihongo Expert',
      'avatarUrl': 'https://via.placeholder.com/150'
    },
    {
      'id': 'instructor2',
      'name': 'Emily Davis',
      'designation': 'Language Coach',
      'avatarUrl': 'https://via.placeholder.com/150'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: 'Create new Course',
      actionsWidget: InkWell(
        onTap: () {
          controller.mSaveCourse(_formKey);
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

                // Code Field
                TextFormField(
                  controller: codeController,
                  decoration: InputDecoration(
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
                SizedBox(height: 20),

                // Duration Field (in months)
                TextFormField(
                  controller: durationController,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: 'Duration (Days)',
                    border: OutlineInputBorder(),
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter the course duration';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 20),

                // Course Type Dropdown
                DropdownButtonFormField<String>(
                  value: selectedCourseType,
                  items: [
                    DropdownMenuItem(
                      child: Text("Language"),
                      value: "language",
                    ),
                    DropdownMenuItem(
                      child: Text("Technical"),
                      value: "technical",
                    ),
                  ],
                  onChanged: (value) {
                    /*   setState(() {
                      selectedCourseType = value!;
                    }); */
                  },
                  decoration: InputDecoration(
                    labelText: 'Course Type',
                    border: OutlineInputBorder(),
                  ),
                ),
                SizedBox(height: 20),

                // Instructors Selection List
                Text("Select Instructors"),
                SizedBox(height: 10),
                ListView.builder(
                  shrinkWrap: true,
                  physics: NeverScrollableScrollPhysics(),
                  itemCount: AppConstants
                      .commonViewProperties.dummyTeacherAssetLocations.length,
                  itemBuilder: (context, index) {
                    final instructor = allInstructors[index];
                    final isSelected = controller.selectedInstructors
                        .contains(instructor['id']);

                    return ListTile(
                      leading: CircleAvatar(
                        backgroundImage: AssetImage(AppConstants
                            .commonViewProperties
                            .dummyTeacherAssetLocations[index]),
                      ),
                      title: Text(instructor['name']!),
                      subtitle: Text(instructor['designation']!),
                      trailing: isSelected
                          ? Icon(Icons.check_circle, color: Colors.green)
                          : Icon(Icons.circle_outlined),
                      onTap: () {
                        controller.toggleInstructorSelection(instructor['id']!);
                      },
                    );
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
