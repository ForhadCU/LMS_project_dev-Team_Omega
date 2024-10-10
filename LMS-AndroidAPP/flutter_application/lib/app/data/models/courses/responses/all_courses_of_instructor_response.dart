class AllCoursesOfInstructorResponse {
    bool success;
    String message;
    List<Datum> data;

    AllCoursesOfInstructorResponse({
        required this.success,
        required this.message,
        required this.data,
    });

    factory AllCoursesOfInstructorResponse.fromJson(Map<String, dynamic> json) => AllCoursesOfInstructorResponse(
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
    String title;
    String code;
    String description;
    int duration;
    String img;
    List<Instructor> instructors;
    String courseType;
    bool isActive;
    DateTime createdAt;
    DateTime updatedAt;
    int v;

    Datum({
        required this.id,
        required this.title,
        required this.code,
        required this.description,
        required this.duration,
        required this.img,
        required this.instructors,
        required this.courseType,
        required this.isActive,
        required this.createdAt,
        required this.updatedAt,
        required this.v,
    });

    factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        id: json["_id"],
        title: json["title"],
        code: json["code"],
        description: json["description"],
        duration: json["duration"],
        img: json["img"],
        instructors: List<Instructor>.from(json["instructors"].map((x) => Instructor.fromJson(x))),
        courseType: json["courseType"],
        isActive: json["isActive"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "title": title,
        "code": code,
        "description": description,
        "duration": duration,
        "img": img,
        "instructors": List<dynamic>.from(instructors.map((x) => x.toJson())),
        "courseType": courseType,
        "isActive": isActive,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
    };
}

class Instructor {
    String id;
    String name;
    String email;

    Instructor({
        required this.id,
        required this.name,
        required this.email,
    });

    factory Instructor.fromJson(Map<String, dynamic> json) => Instructor(
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