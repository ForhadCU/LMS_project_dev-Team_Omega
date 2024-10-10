class CreateClassRecordingsPayload {
    String title;
    DateTime date;
    String link;

    CreateClassRecordingsPayload({
        required this.title,
        required this.date,
        required this.link,
    });

    factory CreateClassRecordingsPayload.fromJson(Map<String, dynamic> json) => CreateClassRecordingsPayload(
        title: json["title"],
        date: DateTime.parse(json["date"]),
        link: json["link"],
    );

    Map<String, dynamic> toJson() => {
        "title": title,
        "date": "${date.year.toString().padLeft(4, '0')}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}",
        "link": link,
    };
}
