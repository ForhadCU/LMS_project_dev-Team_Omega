import 'package:get/get.dart';

import '../../../data/providers/api_provider.dart';
import '../../../data/repositories/forum_repo.dart';
import '../controllers/forum_comments_controller.dart';

class ForumCommentsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<ForumRepo>(
        () => ForumRepo(apiProvider: Get.find<ApiProvider>()));
     Get.lazyPut<ForumCommentsController>(
      () => ForumCommentsController(forumRepo: Get.find<ForumRepo>()),
    );
  }
}
