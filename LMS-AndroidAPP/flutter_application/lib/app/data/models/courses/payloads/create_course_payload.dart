class CreateCoursePayload {
  String title;
  String code;
  String description;
  int duration;
  List<String> instructors;
  String courseType;

  CreateCoursePayload({
    required this.title,
    required this.code,
    required this.description,
    required this.duration,
    required this.instructors,
    required this.courseType,
  });

  factory CreateCoursePayload.fromJson(Map<String, dynamic> json) =>
      CreateCoursePayload(
        title: json["title"],
        code: json["code"],
        description: json["description"],
        duration: json["duration"],
        instructors: List<String>.from(json["instructors"].map((x) => x)),
        courseType: json["courseType"],
      );

  Map<String, dynamic> toJson() => {
        "title": title,
        "code": code,
        "description": description,
        "duration": duration,
        "instructors": List<dynamic>.from(instructors.map((x) => x)),
        "courseType": courseType,
      };
}
