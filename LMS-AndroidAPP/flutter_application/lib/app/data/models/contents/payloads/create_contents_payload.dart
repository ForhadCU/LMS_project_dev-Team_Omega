class CreateContentsPayload {
    String title;
    String description;
    String courseCode;
    String contentType;
    String contentlink;

    CreateContentsPayload({
        required this.title,
        required this.description,
        required this.courseCode,
        required this.contentType,
        required this.contentlink,
    });

    factory CreateContentsPayload.fromJson(Map<String, dynamic> json) => CreateContentsPayload(
        title: json["title"],
        description: json["description"],
        courseCode: json["courseCode"],
        contentType: json["contentType"],
        contentlink: json["contentlink"],
    );

    Map<String, dynamic> toJson() => {
        "title": title,
        "description": description,
        "courseCode": courseCode,
        "contentType": contentType,
        "contentlink": contentlink,
    };
}
