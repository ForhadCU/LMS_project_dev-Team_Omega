class CourseAllQuizesResponse {
  bool success;
  String message;
  List<Datum> data;

  CourseAllQuizesResponse({
    required this.success,
    required this.message,
    required this.data,
  });

  factory CourseAllQuizesResponse.fromJson(Map<String, dynamic> json) =>
      CourseAllQuizesResponse(
        success: json["success"],
        message: json["message"],
        data: List<Datum>.from(json["data"].map((x) => Datum.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "success": success,
        "message": message,
        "data": List<dynamic>.from(data.map((x) => x.toJson())),
      };
}

class Datum {
  String id;
  CourseId courseId;
  String quizTitle;
  String quizType;
  DateTime quizDate;
  String img;
  String formLink;
  int v;

  Datum({
    required this.id,
    required this.courseId,
    required this.quizTitle,
    required this.quizType,
    required this.quizDate,
    required this.img,
    required this.formLink,
    required this.v,
  });

  factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        id: json["_id"],
        courseId: CourseId.fromJson(json["CourseID"]),
        quizTitle: json["quiz_title"],
        quizType: json["quiz_type"],
        quizDate: DateTime.parse(json["quiz_date"]),
        img: json["img"],
        formLink: json["form_link"],
        v: json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "CourseID": courseId.toJson(),
        "quiz_title": quizTitle,
        "quiz_type": quizType,
        "quiz_date":
            "${quizDate.year.toString().padLeft(4, '0')}-${quizDate.month.toString().padLeft(2, '0')}-${quizDate.day.toString().padLeft(2, '0')}",
        "img": img,
        "form_link": formLink,
        "__v": v,
      };
}

class CourseId {
  String id;
  String title;
  String code;
  String courseType;

  CourseId({
    required this.id,
    required this.title,
    required this.code,
    required this.courseType,
  });

  factory CourseId.fromJson(Map<String, dynamic> json) => CourseId(
        id: json["_id"],
        title: json["title"],
        code: json["code"],
        courseType: json["courseType"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "title": title,
        "code": code,
        "courseType": courseType,
      };
}
