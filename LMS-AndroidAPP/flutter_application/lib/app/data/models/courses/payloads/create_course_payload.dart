class CreateUserPayload {
    String? title;
    String? code;
    String? description;
    int? duration;
    List<String>? instructors;
    String? courseType;

    CreateUserPayload({
        this.title,
        this.code,
        this.description,
        this.duration,
        this.instructors,
        this.courseType,
    });

    factory CreateUserPayload.fromJson(Map<String, dynamic> json) => CreateUserPayload(
        title: json["title"],
        code: json["code"],
        description: json["description"],
        duration: json["duration"],
        instructors: json["instructors"] == null ? [] : List<String>.from(json["instructors"]!.map((x) => x)),
        courseType: json["courseType"],
    );

    Map<String, dynamic> toJson() => {
        "title": title,
        "code": code,
        "description": description,
        "duration": duration,
        "instructors": instructors == null ? [] : List<dynamic>.from(instructors!.map((x) => x)),
        "courseType": courseType,
    };
}