import 'package:get/get.dart';

import '../controllers/create_recordings_controller.dart';

class CreateRecordingsBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CreateRecordingsController>(
      () => CreateRecordingsController(),
    );
  }
}
