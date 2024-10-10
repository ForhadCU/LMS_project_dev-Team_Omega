import 'package:flutter_application/app/data/repositories/forum_repo.dart';
import 'package:get/get.dart';

import '../../../data/providers/api_provider.dart';
import '../controllers/forum_controller.dart';

class ForumBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<ForumRepo>(
        () => ForumRepo(apiProvider: Get.find<ApiProvider>()));
    Get.lazyPut<ForumController>(
      () => ForumController(forumRepo: Get.find<ForumRepo>()),
    );
  }
}
