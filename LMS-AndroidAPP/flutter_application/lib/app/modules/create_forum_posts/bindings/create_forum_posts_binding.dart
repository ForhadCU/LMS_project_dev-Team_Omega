import 'package:get/get.dart';

import '../../../data/providers/api_provider.dart';
import '../../../data/repositories/create_forum_repo.dart';
import '../controllers/create_forum_posts_controller.dart';

class CreateForumPostsBinding extends Bindings {
  @override
  void dependencies() {
  Get.lazyPut<ApiProvider>(() => ApiProvider());
    Get.lazyPut<CreateForumRepo>(
        () => CreateForumRepo(apiProvider: Get.find<ApiProvider>()));

    Get.lazyPut<CreateForumPostsController>(
      () => CreateForumPostsController(repo: Get.find<CreateForumRepo>()),
    );


  }
}
