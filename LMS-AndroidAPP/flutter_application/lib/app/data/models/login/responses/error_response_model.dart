class ErrorResponseModel {
    bool success;
    String message;

    ErrorResponseModel({
       required this.success,
       required this.message,
    });

    factory ErrorResponseModel.fromMap(Map<String, dynamic> json) => ErrorResponseModel(
        success: json["success"],
        message: json["message"],
    );

    Map<String, dynamic> toMap() => {
        "success": success,
        "message": message,
    };
}
