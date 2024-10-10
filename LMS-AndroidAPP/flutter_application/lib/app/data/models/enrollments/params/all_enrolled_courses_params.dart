class AllEnrolledCoursesParams {
    String enrolledCourse;

    AllEnrolledCoursesParams({
        required this.enrolledCourse,
    });

    factory AllEnrolledCoursesParams.fromJson(Map<String, dynamic> json) => AllEnrolledCoursesParams(
        enrolledCourse: json["Enrolled_Course"],
    );

    Map<String, dynamic> toJson() => {
        "Enrolled_Course": enrolledCourse,
    };
}
