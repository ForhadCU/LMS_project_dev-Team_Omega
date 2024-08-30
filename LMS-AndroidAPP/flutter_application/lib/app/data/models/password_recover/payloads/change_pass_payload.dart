class ChangePasswordPayload {
  String newPassword;

  ChangePasswordPayload({
   required this.newPassword,
  });

  factory ChangePasswordPayload.fromMap(Map<String, dynamic> json) =>
      ChangePasswordPayload(
        newPassword: json["newPassword"],
      );

  Map<String, dynamic> toMap() => {
        "newPassword": newPassword,
      };
}
