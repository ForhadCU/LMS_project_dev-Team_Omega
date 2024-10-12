class UserDataParam {
  String role;

  UserDataParam({
    required this.role,
  });

  factory UserDataParam.fromJson(Map<String, String> json) => UserDataParam(
        role: json["role"] ?? "",
      );

  Map<String, String> toJson() => {
        "role": role,
      };
}
