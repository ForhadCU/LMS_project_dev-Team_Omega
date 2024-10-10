class CreateGeneralResourcesPayload {
  String title;
  String description;
  String img;
  String link;
  String status;

  CreateGeneralResourcesPayload({
    required this.title,
    required this.description,
    required this.img,
    required this.link,
    required this.status,
  });

  factory CreateGeneralResourcesPayload.fromJson(Map<String, dynamic> json) =>
      CreateGeneralResourcesPayload(
        title: json["title"],
        description: json["description"],
        img: json["img"],
        link: json["link"],
        status: json["status"],
      );

  Map<String, dynamic> toJson() => {
        "title": title,
        "description": description,
        "img": img,
        "link": link,
        "status": status,
      };
}
