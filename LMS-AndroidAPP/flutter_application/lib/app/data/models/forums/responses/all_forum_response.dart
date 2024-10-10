class AllForumResponse {
    bool success;
    String message;
    List<Datum> data;

    AllForumResponse({
        required this.success,
        required this.message,
        required this.data,
    });

    factory AllForumResponse.fromJson(Map<String, dynamic> json) => AllForumResponse(
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
    String userId;
    String title;
    String body;
    List<String> imgs;
    int likes;
    DateTime createdAt;
    DateTime updatedAt;
    int v;

    Datum({
        required this.id,
        required this.userId,
        required this.title,
        required this.body,
        required this.imgs,
        required this.likes,
        required this.createdAt,
        required this.updatedAt,
        required this.v,
    });

    factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        id: json["_id"],
        userId: json["UserID"],
        title: json["Title"],
        body: json["body"],
        imgs: List<String>.from(json["imgs"].map((x) => x)),
        likes: json["likes"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "UserID": userId,
        "Title": title,
        "body": body,
        "imgs": List<dynamic>.from(imgs.map((x) => x)),
        "likes": likes,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
    };
}