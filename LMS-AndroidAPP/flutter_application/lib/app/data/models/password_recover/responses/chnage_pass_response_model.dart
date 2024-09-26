class ChangePasswordResponseModel {
  bool? success;
  String? message;

  ChangePasswordResponseModel({
    this.success,
    this.message,
  });

  factory ChangePasswordResponseModel.fromMap(Map<String, dynamic> json) =>
      ChangePasswordResponseModel(
        success: json["success"],
        message: json["message"],
      );

  Map<String, dynamic> toMap() => {
        "success": success,
        "message": message,
      };
}
