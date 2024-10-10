


class LoginPayload {
  String email;
  String password;

  LoginPayload({
   required this.email,
   required this.password,
  });

  factory LoginPayload.fromMap(Map<String, dynamic> json) => LoginPayload(
        email: json["email"],
        password: json["password"],
      );

  Map<String, dynamic> toMap() => {
        "email": email,
        "password": password,
      };
}
