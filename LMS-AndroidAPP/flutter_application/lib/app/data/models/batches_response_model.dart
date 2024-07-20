class BatchResponse {
  int? statusCode;
  bool? success;
  String? message;
  Batch? data;

  BatchResponse({
    this.statusCode,
    this.success,
    this.message,
    this.data,
  });

  BatchResponse.fromJson(Map<String, dynamic> json) {
    statusCode = json['statusCode'];
    success = json['success'];
    message = json['message'];
    data = json['data'] != null ? Batch?.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final res = <String, dynamic>{};
    res['statusCode'] = statusCode;
    res['success'] = success;
    res['message'] = message;
    res['data'] = data?.toJson();
    return res;
  }
}

class Batch {
  String? bId;
  String? batchName;

  Batch({
    this.bId,
    this.batchName,
  });

  Batch.fromJson(Map<String, dynamic> json) {
    bId = json['_id'];
    batchName = json['role'];
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['_id'] = bId;

    data['role'] = batchName;

    return data;
  }
}
