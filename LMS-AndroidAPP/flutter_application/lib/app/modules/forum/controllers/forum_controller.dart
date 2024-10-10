import 'package:flutter_application/app/data/repositories/forum_repo.dart';
import 'package:flutter_application/app/routes/app_pages.dart';
import 'package:get/get.dart';

import '../../../core/core_lib.dart';
import '../../../core/values/gloabal_values.dart';

class ForumController extends GetxController {
  final ForumRepo forumRepo;
  ForumController({required this.forumRepo});

  final count = 10.obs;
  @override
  void onInit() {
    print("ForumController is called");

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

  void mNavigateToCommentPage() {
    Get.toNamed(Routes.FORUM_COMMENTS);
  }
    int mGenerateRandomIndex() {
    return AppHelpers().mGenerateRandomIndex(
        from: 0,
        to: AppConstants
                .commonViewProperties.dummyAllPeopleAssetLocations.length -
            1);
  }
}
