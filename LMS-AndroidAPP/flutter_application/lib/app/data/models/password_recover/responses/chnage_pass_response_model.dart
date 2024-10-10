class ChangePasswordResponseModel {
    bool success;
    String message;

    ChangePasswordResponseModel({
        required this.success,
        required this.message,
    });

    factory ChangePasswordResponseModel.fromJson(Map<String, dynamic> json) => ChangePasswordResponseModel(
        success: json["success"],
        message: json["message"],
    );

    Map<String, dynamic> toJson() => {
        "success": success,
        "message": message,
    };
}
