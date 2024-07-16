import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/create_courses_controller.dart';

class CreateCoursesView extends GetView<CreateCoursesController> {
  const CreateCoursesView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('CreateCoursesView'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          'CreateCoursesView is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
