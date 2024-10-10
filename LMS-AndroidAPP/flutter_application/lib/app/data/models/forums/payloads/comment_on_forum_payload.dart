class CommentOnForumPayload {
    String userId;
    String forumId;
    String message;
    int likes;
    DateTime createdAt;
    DateTime updatedAt;

    CommentOnForumPayload({
        required this.userId,
        required this.forumId,
        required this.message,
        required this.likes,
        required this.createdAt,
        required this.updatedAt,
    });

    factory CommentOnForumPayload.fromJson(Map<String, dynamic> json) => CommentOnForumPayload(
        userId: json["UserID"],
        forumId: json["ForumID"],
        message: json["message"],
        likes: json["likes"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
    );

    Map<String, dynamic> toJson() => {
        "UserID": userId,
        "ForumID": forumId,
        "message": message,
        "likes": likes,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
    };
}
