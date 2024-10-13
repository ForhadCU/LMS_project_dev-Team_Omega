class AllContentsResponse {
  bool success;
  String message;
  List<ContentData> data;

  AllContentsResponse({
    required this.success,
    required this.message,
    required this.data,
  });

  factory AllContentsResponse.fromJson(Map<String, dynamic> json) =>
      AllContentsResponse(
        success: json["success"],
        message: json["message"],
        data: List<ContentData>.from(json["data"].map((x) => ContentData.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "success": success,
        "message": message,
        "data": List<dynamic>.from(data.map((x) => x.toJson())),
      };
}

class ContentData {
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

  ContentData({
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

  factory ContentData.fromJson(Map<String, dynamic> json) => ContentData(
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
