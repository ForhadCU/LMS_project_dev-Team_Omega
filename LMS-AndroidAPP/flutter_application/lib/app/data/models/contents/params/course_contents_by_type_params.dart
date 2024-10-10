class CourseContentsByTypeParams {
    String contentType;
    String courseId;

    CourseContentsByTypeParams({
        required this.contentType,
        required this.courseId,
    });

    factory CourseContentsByTypeParams.fromJson(Map<String, dynamic> json) => CourseContentsByTypeParams(
        contentType: json["contentType"],
        courseId: json["courseID"],
    );

    Map<String, dynamic> toJson() => {
        "contentType": contentType,
        "courseID": courseId,
    };
}
