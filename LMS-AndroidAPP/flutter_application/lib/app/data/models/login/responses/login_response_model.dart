class LoginResponse {
  int? statusCode;
  bool? success;
  String? message;
  Data? data;
  String? accesToken;

  LoginResponse(
      {this.statusCode,
      this.success,
      this.message,
      this.data,
      this.accesToken});

  LoginResponse.fromJson(Map<String, dynamic> json) {
    statusCode = json['statusCode'];
    success = json['success'];
    message = json['message'];
    data = json['data'] != null ? Data?.fromJson(json['data']) : null;
    accesToken = json['accesToken'];
  }

  Map<String, dynamic> toJson() {
    final res = <String, dynamic>{};
    res['statusCode'] = statusCode;
    res['success'] = success;
    res['message'] = message;
    res['data'] = data?.toJson();
      res['accesToken'] = accesToken;
    return res;
  }
}

class Data {
  String? sId;
  String? name;
  String? email;
  String? role;
  bool? isActive;
  String? createdAt;
  String? updatedAt;
  int? iV;

  Data(
      {this.sId,
      this.name,
      this.email,
      this.role,
      this.isActive,
      this.createdAt,
      this.updatedAt,
      this.iV});

  Data.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    name = json['name'];
    email = json['email'];
    role = json['role'];
    isActive = json['isActive'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    iV = json['__v'];
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['_id'] = sId;
    data['name'] = name;
    data['email'] = email;
    data['role'] = role;
    data['isActive'] = isActive;
    data['createdAt'] = createdAt;
    data['updatedAt'] = updatedAt;
    data['__v'] = iV;
    return data;
  }
}
