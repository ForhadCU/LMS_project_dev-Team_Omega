class LoginResponse {
  int statusCode;
  bool success;
  String message;
  Data data;
  String accesToken;

  LoginResponse({
    required this.statusCode,
    required this.success,
    required this.message,
    required this.data,
    required this.accesToken,
  });

  factory LoginResponse.fromJson(Map<String, dynamic> json) => LoginResponse(
        statusCode: json["statusCode"],
        success: json["success"],
        message: json["message"],
        data: Data.fromJson(json["data"]),
        accesToken: json["accesToken"],
      );

  Map<String, dynamic> toJson() => {
        "statusCode": statusCode,
        "success": success,
        "message": message,
        "data": data.toJson(),
        "accesToken": accesToken,
      };
}

class Data {
  String id;
  String name;
  String email;
  String role;
  bool isActive;
  DateTime createdAt;
  DateTime updatedAt;
  int v;

  Data({
    required this.id,
    required this.name,
    required this.email,
    required this.role,
    required this.isActive,
    required this.createdAt,
    required this.updatedAt,
    required this.v,
  });

  factory Data.fromJson(Map<String, dynamic> json) => Data(
        id: json["_id"],
        name: json["name"],
        email: json["email"],
        role: json["role"],
        isActive: json["isActive"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "name": name,
        "email": email,
        "role": role,
        "isActive": isActive,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
      };
}
