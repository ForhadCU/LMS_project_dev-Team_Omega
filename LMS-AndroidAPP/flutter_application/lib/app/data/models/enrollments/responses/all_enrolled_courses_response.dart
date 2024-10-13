class AllEnrolledStudentResponse {
    bool success;
    String message;
    List<EnrolledStudent> data;

    AllEnrolledStudentResponse({
        required this.success,
        required this.message,
        required this.data,
    });

    factory AllEnrolledStudentResponse.fromJson(Map<String, dynamic> json) => AllEnrolledStudentResponse(
        success: json["success"],
        message: json["message"],
        data: List<EnrolledStudent>.from(json["data"].map((x) => EnrolledStudent.fromJson(x))),
    );

    Map<String, dynamic> toJson() => {
        "success": success,
        "message": message,
        "data": List<dynamic>.from(data.map((x) => x.toJson())),
    };
}

class EnrolledStudent {
    String id;
    StudentId studentId;
    EnrolledCourse enrolledCourse;
    DateTime enrollDate;
    String studentBatch;
    int v;

    EnrolledStudent({
        required this.id,
        required this.studentId,
        required this.enrolledCourse,
        required this.enrollDate,
        required this.studentBatch,
        required this.v,
    });

    factory EnrolledStudent.fromJson(Map<String, dynamic> json) => EnrolledStudent(
        id: json["_id"],
        studentId: StudentId.fromJson(json["Student_ID"]),
        enrolledCourse: EnrolledCourse.fromJson(json["Enrolled_Course"]),
        enrollDate: DateTime.parse(json["Enroll_date"]),
        studentBatch: json["student_batch"],
        v: json["__v"],
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "Student_ID": studentId.toJson(),
        "Enrolled_Course": enrolledCourse.toJson(),
        "Enroll_date": enrollDate.toIso8601String(),
        "student_batch": studentBatch,
        "__v": v,
    };
}

class EnrolledCourse {
    String id;
    String title;
    String code;
    String description;

    EnrolledCourse({
        required this.id,
        required this.title,
        required this.code,
        required this.description,
    });

    factory EnrolledCourse.fromJson(Map<String, dynamic> json) => EnrolledCourse(
        id: json["_id"],
        title: json["title"],
        code: json["code"],
        description: json["description"],
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "title": title,
        "code": code,
        "description": description,
    };
}

class StudentId {
    String id;
    String name;
    String email;

    StudentId({
        required this.id,
        required this.name,
        required this.email,
    });

    factory StudentId.fromJson(Map<String, dynamic> json) => StudentId(
        id: json["_id"],
        name: json["name"],
        email: json["email"],
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "name": name,
        "email": email,
    };
}