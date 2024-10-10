class ForumCommentsPayload {
    String forumId;

    ForumCommentsPayload({
        required this.forumId,
    });

    factory ForumCommentsPayload.fromJson(Map<String, dynamic> json) => ForumCommentsPayload(
        forumId: json["ForumID"],
    );

    Map<String, dynamic> toJson() => {
        "ForumID": forumId,
    };
}
