class ChangePassResponseModel {
    bool? success;
    String? message;

    ChangePassResponseModel({
        this.success,
        this.message,
    });

    factory ChangePassResponseModel.fromMap(Map<String, dynamic> json) => ChangePassResponseModel(
        success: json["success"],
        message: json["message"],
    );

    Map<String, dynamic> toMap() => {
        "success": success,
        "message": message,
    };
}