class ChangePassPayload {
    String? newPassword;

    ChangePassPayload({
        this.newPassword,
    });

    factory ChangePassPayload.fromMap(Map<String, dynamic> json) => ChangePassPayload(
        newPassword: json["newPassword"],
    );

    Map<String, dynamic> toMap() => {
        "newPassword": newPassword,
    };
}
