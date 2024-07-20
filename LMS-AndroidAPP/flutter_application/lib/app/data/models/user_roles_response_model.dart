class UserRoleResponse {
  int? statusCode;
  bool? success;
  String? message;
  UserRole? data;

  UserRoleResponse({
    this.statusCode,
    this.success,
    this.message,
    this.data,
  });

  UserRoleResponse.fromJson(Map<String, dynamic> json) {
    statusCode = json['statusCode'];
    success = json['success'];
    message = json['message'];
    data = json['data'] != null ? UserRole?.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final res = <String, dynamic>{};
    res['statusCode'] = statusCode;
    res['success'] = success;
    res['message'] = message;
    res['data'] = data?.toJson();
    return res;
  }
}

class UserRole {
  String? rId;
  String? roleName;

  UserRole({
    this.rId,
    this.roleName,
  });

  UserRole.fromJson(Map<String, dynamic> json) {
    rId = json['_id'];
    roleName = json['role'];
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['_id'] = rId;

    data['role'] = roleName;

    return data;
  }
}
