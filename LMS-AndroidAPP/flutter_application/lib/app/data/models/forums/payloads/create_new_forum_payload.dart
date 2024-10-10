class CreateNewForumPayload {
    String userId;
    String title;
    String body;
    List<String> imgs;
    int likes;
    DateTime createdAt;
    DateTime updatedAt;

    CreateNewForumPayload({
        required this.userId,
        required this.title,
        required this.body,
        required this.imgs,
        required this.likes,
        required this.createdAt,
        required this.updatedAt,
    });

    factory CreateNewForumPayload.fromJson(Map<String, dynamic> json) => CreateNewForumPayload(
        userId: json["UserID"],
        title: json["Title"],
        body: json["body"],
        imgs: List<String>.from(json["imgs"].map((x) => x)),
        likes: json["likes"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
    );

    Map<String, dynamic> toJson() => {
        "UserID": userId,
        "Title": title,
        "body": body,
        "imgs": List<dynamic>.from(imgs.map((x) => x)),
        "likes": likes,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
    };
}
