class AllContentsResponse {
  bool success;
  String message;
  List<Datum> data;

  AllContentsResponse({
    required this.success,
    required this.message,
    required this.data,
  });

  factory AllContentsResponse.fromJson(Map<String, dynamic> json) =>
      AllContentsResponse(
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
  String description;
  String courseId;
  String contentType;
  String contentlink;
  DateTime createDate;
  DateTime createdAt;
  DateTime updatedAt;
  int v;

  Datum({
    required this.id,
    required this.title,
    required this.description,
    required this.courseId,
    required this.contentType,
    required this.contentlink,
    required this.createDate,
    required this.createdAt,
    required this.updatedAt,
    required this.v,
  });

  factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        id: json["_id"],
        title: json["title"],
        description: json["description"],
        courseId: json["courseID"],
        contentType: json["contentType"],
        contentlink: json["contentlink"],
        createDate: DateTime.parse(json["createDate"]),
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "title": title,
        "description": description,
        "courseID": courseId,
        "contentType": contentType,
        "contentlink": contentlink,
        "createDate":
            "${createDate.year.toString().padLeft(4, '0')}-${createDate.month.toString().padLeft(2, '0')}-${createDate.day.toString().padLeft(2, '0')}",
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
      };
}
