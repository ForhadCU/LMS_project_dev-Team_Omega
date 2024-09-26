import 'package:flutter_application/app/data/providers/api_provider.dart';
import 'package:flutter_application/app/data/repositories/content_details_repo.dart';
import 'package:get/get.dart';

import '../controllers/content_details_controller.dart';

class ContentDetailsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<ContentDetailsRepo>(
        () => ContentDetailsRepo(apiProvider: Get.find<ApiProvider>()));
    Get.lazyPut<ContentDetailsController>(
      () => ContentDetailsController(
          contentDetailsRepo: Get.find<ContentDetailsRepo>()),
    );
  }
}
