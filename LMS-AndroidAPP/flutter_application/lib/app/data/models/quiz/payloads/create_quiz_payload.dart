class CreateQuizPayload {
  String courseId;
  String quizTitle;
  String quizType;
  String img;
  String formLink;
  DateTime quizDate;

  CreateQuizPayload({
    required this.courseId,
    required this.quizTitle,
    required this.quizType,
    required this.img,
    required this.formLink,
    required this.quizDate,
  });

  factory CreateQuizPayload.fromJson(Map<String, dynamic> json) =>
      CreateQuizPayload(
        courseId: json["CourseID"],
        quizTitle: json["quiz_title"],
        quizType: json["quiz_type"],
        img: json["img"],
        formLink: json["form_link"],
        quizDate: DateTime.parse(json["quiz_date"]),
      );

  Map<String, dynamic> toJson() => {
        "CourseID": courseId,
        "quiz_title": quizTitle,
        "quiz_type": quizType,
        "img": img,
        "form_link": formLink,
        "quiz_date":
            "${quizDate.year.toString().padLeft(4, '0')}-${quizDate.month.toString().padLeft(2, '0')}-${quizDate.day.toString().padLeft(2, '0')}",
      };
}
