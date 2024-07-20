class TeachersResponse {
  int? statusCode;
  bool? success;
  String? message;
  List<Teacher>? teachers;

  TeachersResponse({
    this.statusCode,
    this.success,
    this.message,
    this.teachers,
  });

  TeachersResponse.fromJson(Map<String, dynamic> json) {
    statusCode = json['statusCode'];
    success = json['success'];
    message = json['message'];
    teachers = json["data"] == null
        ? []
        : List<Teacher>.from(json["academic_subject_conditions"]!
            .map((x) => Teacher.fromJson(x)));
  }

  Map<String, dynamic> toJson() {
    final res = <String, dynamic>{};
    res['statusCode'] = statusCode;
    res['success'] = success;
    res['message'] = message;
    res["data"] = teachers == null
        ? []
        : List<Teacher>.from(teachers!.map((x) => x.toJson()));
    return res;
  }
}

class Teacher {
  String? sId;
  String? name;

  Teacher({
    this.sId,
    this.name,
  });

  Teacher.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['_id'] = sId;

    data['name'] = name;

    return data;
  }
}
