import 'package:flutter_application/app/data/repositories/content_details_repo.dart';
import 'package:get/get.dart';

class ContentDetailsController extends GetxController {
  final ContentDetailsRepo contentDetailsRepo;
  ContentDetailsController({required this.contentDetailsRepo});

  final count = 0.obs;
  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void increment() => count.value++;
}
