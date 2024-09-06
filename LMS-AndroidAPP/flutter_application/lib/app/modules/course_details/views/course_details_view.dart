import 'package:flutter/material.dart';
import 'package:flutter_application/app/core/core_lib.dart';

import 'package:get/get.dart';

import '../controllers/course_details_controller.dart';

class CourseDetailsView extends GetView<CourseDetailsController> {
  CourseDetailsView({Key? key}) : super(key: key);
  final List<String> students = ["Alice", "Bob", "Charlie"];
  final List<String> teachers = ["Mr. Smith", "Ms. Johnson"];
  final List<Map<String, String>> courseContent = [
    {"title": "Introduction", "description": "Overview of the course"},
    {"title": "Chapter 1", "description": "Basic Concepts"},
    {"title": "Chapter 2", "description": "Advanced Topics"},
  ];

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      title: "Course Details",
      child: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            buildCourseInfoSection(),
            SizedBox(height: 20),
            buildCreateCourseContentButton(),
            SizedBox(height: 20),
            buildCourseContentList(),
          ],
        ),
      ),
    );
  }

  Widget buildCourseInfoSection() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            blurRadius: 5,
            color: Colors.grey.withOpacity(0.3),
            offset: Offset(0, 2),
          ),
        ],
        borderRadius: BorderRadius.circular(8),
      ),
      padding: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Course Title",
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.green[800],
            ),
          ),
          SizedBox(height: 10),
          Text(
            "This is the course description. It gives an overview of the course content and objectives.",
            style: TextStyle(
              fontSize: 16,
              color: Colors.grey[600],
            ),
          ),
          SizedBox(height: 10),
          buildStudentList(),
          SizedBox(height: 10),
          buildTeacherList(),
        ],
      ),
    );
  }

  Widget buildStudentList() {
    return Row(
      children: [
        Icon(Icons.group, color: Colors.green[800]),
        SizedBox(width: 8),
        Text(
          "Students: ",
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: Colors.green[800],
          ),
        ),
        Expanded(
          child: Wrap(
            spacing: 8.0,
            children: students.map((student) {
              return Chip(
                backgroundColor: AppColor().teaGreen,
                label: Text(student),
                labelStyle: TextStyle(color: Colors.green[800]),
              );
            }).toList(),
          ),
        ),
      ],
    );
  }

  Widget buildTeacherList() {
    return Row(
      children: [
        Icon(Icons.person, color: Colors.green[800]),
        SizedBox(width: 8),
        Text(
          "Teachers: ",
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: Colors.green[800],
          ),
        ),
        Expanded(
          child: Wrap(
            spacing: 8.0,
            children: teachers.map((teacher) {
              return Chip(
                backgroundColor: AppColor().teaGreen,
                label: Text(teacher),
                labelStyle: TextStyle(color: Color(0xFF2E7D32)),
              );
            }).toList(),
          ),
        ),
      ],
    );
  }

  Widget buildCreateCourseContentButton() {
    return ElevatedButton(
      onPressed: () {
        // Handle button press
      },
      style: ElevatedButton.styleFrom(
        primary: Colors.green[800],
        padding: EdgeInsets.symmetric(vertical: 12, horizontal: 20),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
      ),
      child: Text(
        "Create Course Content",
        style: TextStyle(
          color: Colors.white,
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget buildCourseContentList() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          "Course Contents",
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.green[800],
          ),
        ),
        ListView.builder(
          shrinkWrap: true,
          physics: NeverScrollableScrollPhysics(),
          itemCount: courseContent.length,
          itemBuilder: (context, index) {
            return buildCourseContentItem(courseContent[index]);
          },
        ),
      ],
    );
  }

  Widget buildCourseContentItem(Map<String, String> content) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 8.0),
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            blurRadius: 5,
            color: Colors.grey.withOpacity(0.3),
            offset: Offset(0, 2),
          ),
        ],
        borderRadius: BorderRadius.circular(8),
      ),
      padding: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            content['title']!,
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Colors.green[800],
            ),
          ),
          SizedBox(height: 5),
          Text(
            content['description']!,
            style: TextStyle(
              fontSize: 14,
              color: Colors.grey[600],
            ),
          ),
          SizedBox(height: 10),
          Row(
            children: [
              IconButton(
                onPressed: () {
                  // Handle edit content
                },
                icon: Icon(Icons.edit, color: Colors.green[800]),
              ),
              IconButton(
                onPressed: () {
                  // Handle delete content
                },
                icon: Icon(Icons.delete, color: Colors.red),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
