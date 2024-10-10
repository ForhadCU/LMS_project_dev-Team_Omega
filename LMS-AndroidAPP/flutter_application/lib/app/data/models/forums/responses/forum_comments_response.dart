class ForumCommentsResponse {
  bool success;
  String message;
  List<Datum> data;

  ForumCommentsResponse({
    required this.success,
    required this.message,
    required this.data,
  });

  factory ForumCommentsResponse.fromJson(Map<String, dynamic> json) =>
      ForumCommentsResponse(
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
  UserId userId;
  String forumId;
  String message;
  int likes;
  DateTime createdAt;
  DateTime updatedAt;
  int v;

  Datum({
    required this.id,
    required this.userId,
    required this.forumId,
    required this.message,
    required this.likes,
    required this.createdAt,
    required this.updatedAt,
    required this.v,
  });

  factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        id: json["_id"],
        userId: UserId.fromJson(json["UserID"]),
        forumId: json["ForumID"],
        message: json["message"],
        likes: json["likes"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "UserID": userId.toJson(),
        "ForumID": forumId,
        "message": message,
        "likes": likes,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
      };
}

class UserId {
  String id;
  String name;
  String email;
  String role;

  UserId({
    required this.id,
    required this.name,
    required this.email,
    required this.role,
  });

  factory UserId.fromJson(Map<String, dynamic> json) => UserId(
        id: json["_id"],
        name: json["name"],
        email: json["email"],
        role: json["role"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "name": name,
        "email": email,
        "role": role,
      };
}
