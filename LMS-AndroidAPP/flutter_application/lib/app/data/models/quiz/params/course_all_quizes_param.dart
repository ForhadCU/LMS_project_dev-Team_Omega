class CourseAllQuizesParam {
    String courseId;

    CourseAllQuizesParam({
        required this.courseId,
    });

    factory CourseAllQuizesParam.fromJson(Map<String, dynamic> json) => CourseAllQuizesParam(
        courseId: json["CourseID"],
    );

    Map<String, dynamic> toJson() => {
        "CourseID": courseId,
    };
}
