class AllClassRecordingsResponse {
    bool success;
    String message;
    List<Datum> data;

    AllClassRecordingsResponse({
        required this.success,
        required this.message,
        required this.data,
    });

    factory AllClassRecordingsResponse.fromJson(Map<String, dynamic> json) => AllClassRecordingsResponse(
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
    DateTime date;
    String link;
    DateTime createdAt;
    DateTime updatedAt;
    int v;

    Datum({
        required this.id,
        required this.title,
        required this.date,
        required this.link,
        required this.createdAt,
        required this.updatedAt,
        required this.v,
    });

    factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        id: json["_id"],
        title: json["title"],
        date: DateTime.parse(json["date"]),
        link: json["link"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
    );

    Map<String, dynamic> toJson() => {
        "_id": id,
        "title": title,
        "date": "${date.year.toString().padLeft(4, '0')}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}",
        "link": link,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
    };
}