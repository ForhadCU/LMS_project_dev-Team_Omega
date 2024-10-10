import 'package:get/get.dart';

import '../controllers/create_forum_posts_controller.dart';

class CreateForumPostsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateForumPostsController>(
      () => CreateForumPostsController(),
    );
  }
}
