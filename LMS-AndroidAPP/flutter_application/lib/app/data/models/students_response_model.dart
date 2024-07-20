class StudentsResponse {
  int? statusCode;
  bool? success;
  String? message;
  List<Student>? students;

  StudentsResponse({
    this.statusCode,
    this.success,
    this.message,
    this.students,
  });

  StudentsResponse.fromJson(Map<String, dynamic> json) {
    statusCode = json['statusCode'];
    success = json['success'];
    message = json['message'];
    students = json["data"] == null
        ? []
        : List<Student>.from(json["academic_subject_conditions"]!
            .map((x) => Student.fromJson(x)));
  }

  Map<String, dynamic> toJson() {
    final res = <String, dynamic>{};
    res['statusCode'] = statusCode;
    res['success'] = success;
    res['message'] = message;
    res["data"] = students == null
        ? []
        : List<Student>.from(students!.map((x) => x.toJson()));
    return res;
  }
}

class Student {
  String? sId;
  String? name;

  Student({
    this.sId,
    this.name,
  });

  Student.fromJson(Map<String, dynamic> json) {
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
