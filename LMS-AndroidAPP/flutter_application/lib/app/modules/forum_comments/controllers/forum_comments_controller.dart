import 'package:flutter_application/app/core/values/gloabal_values.dart';
import 'package:flutter_application/app/data/repositories/forum_repo.dart';
import 'package:flutter_application/app/modules/forum/controllers/forum_controller.dart';
import 'package:get/get.dart';

import '../../../core/core_lib.dart';

class ForumCommentsController extends GetxController {
  final ForumRepo forumRepo;
  ForumCommentsController({required this.forumRepo});
  // ForumController forumController = Get.find();

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

  int mGenerateRandomIndex() {
    return AppHelpers().mGenerateRandomIndex(
        from: 0,
        to: AppConstants
                .commonViewProperties.dummyAllPeopleAssetLocations.length -
            1);
  }
}
