class AllCoursesOfInstructorParams {
    String instructors;

    AllCoursesOfInstructorParams({
        required this.instructors,
    });

    factory AllCoursesOfInstructorParams.fromJson(Map<String, dynamic> json) => AllCoursesOfInstructorParams(
        instructors: json["instructors"],
    );

    Map<String, String> toJson() => {
        "instructors": instructors,
    };
}
