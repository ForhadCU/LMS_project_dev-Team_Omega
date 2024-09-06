import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/content_details_controller.dart';

class ContentDetailsView extends GetView<ContentDetailsController> {
  const ContentDetailsView({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ContentDetailsView'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          'ContentDetailsView is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
