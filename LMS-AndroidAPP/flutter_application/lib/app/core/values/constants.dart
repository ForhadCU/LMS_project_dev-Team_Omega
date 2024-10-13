import 'package:flutter_application/app/core/values/asset_locations.dart';

class AppConstants {
  // alada nnested class banate hobe
  static final CourseContentType courseContentType = CourseContentType();
  static final CommonViewProperties commonViewProperties =
      CommonViewProperties();
  static final ApiKeys apiKeys = ApiKeys();
  static final Names names = Names();
}

class ApiKeys {
  final accessToken = "access_token";
  final instructor = "instructor";
  final currentUserData = "currentUserData";
}

class Data {
  final instructorEmail = "test.sensei@gmail.com";
  final instructorPass = "123456";
}

class CommonViewProperties {
  final String sOnGoing = "Ongoing";
  final String sUpComing = "Upcoming";
  final String sEnded = "Ended";
  final String sEdit = "Edit";
  final String sDelete = "Delete";
  final List<String> sCourseCardMenuItems = ["Edit", "Delete"];
  final List<String> dummyCourseCategoryItems = [
    "All",
    "Language",
    "Technical"
  ];
  final String instructors = "Instructors";
  final String students = "Students";
  final String contents = "Contents";
  final String lessons = "Lessons";
  final String files = "Files";
  final String videos = "Videos";
  final String demoDesc = "This will be the course description. ";
  final List<String> dummyStudentAssetLocations = [
    AppAssetLocations.img_abir,
    AppAssetLocations.img_ashrafulk,
    AppAssetLocations.img_bipul,
    AppAssetLocations.img_mahmud,
    AppAssetLocations.img_noman,
    AppAssetLocations.img_shams,
    AppAssetLocations.img_siam,
    AppAssetLocations.img_tamim,
    AppAssetLocations.img_zahid,
  ];
  final List<String> dummyAllPeopleAssetLocations = [
    AppAssetLocations.img_abir,
    AppAssetLocations.img_ashrafulk,
    AppAssetLocations.img_bipul,
    AppAssetLocations.img_mahmud,
    AppAssetLocations.img_noman,
    AppAssetLocations.img_shams,
    AppAssetLocations.img_siam,
    AppAssetLocations.img_tamim,
    AppAssetLocations.img_zahid,
    AppAssetLocations.img_roy_sensei,
    AppAssetLocations.img_zubayer_sensei,
  ];
  final List<String> dummyTeacherAssetLocations = [
    AppAssetLocations.img_roy_sensei,
    AppAssetLocations.img_zubayer_sensei,
  ];
}

class CourseContentType {
  final String file = "file";
  final String video = "video";
  final String resource = "resource";
  final String lecture = "lecture";
}

class Names {
  final String jubayearAhmmed = "Jubayear Ahmmed";
  final String jayontoRay = "Jayonto Ray";
}
