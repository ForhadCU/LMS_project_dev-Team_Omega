import 'dart:convert';

import 'package:flutter_application/app/core/core_lib.dart';
import 'package:http/http.dart' as http;

class ApiProvider {
  // make this class singleton
  ApiProvider._internal();
  static final ApiProvider _singleton = ApiProvider._internal();
  factory ApiProvider() {
    return _singleton;
  }
  // codes start from here
  // All methods or variables shouldn't be static

  static const String baseUrlLive =
      'https://lms-project-dev-team-omega.vercel.app/api/v1';
  static const String baseUrlLocalhost = 'https://localhost:5000/api/v1';

  // Private method to handle requests
  Future<http.Response> _request({
    required String endpoint,
    required AppEnum method,
    Map<String, String>? headers,
    dynamic body,
  }) async {
    final uri = Uri.parse('$baseUrlLive$endpoint');
    final defaultHeaders = {'Content-Type': 'application/json'};
    final mergedHeaders = {...defaultHeaders, ...?headers};

    switch (method) {
      case AppEnum.GET:
        return await http.get(uri, headers: mergedHeaders);
      case AppEnum.POST:
        return await http.post(uri,
            headers: mergedHeaders, body: jsonEncode(body));
      case AppEnum.PUT:
        return await http.put(uri,
            headers: mergedHeaders, body: jsonEncode(body));
      case AppEnum.PATCH:
        return await http.patch(uri,
            headers: mergedHeaders, body: jsonEncode(body));
      case AppEnum.DELETE:
        return await http.delete(uri, headers: mergedHeaders);
      default:
        throw Exception('Invalid HTTP method');
    }
  }

  // Public methods for each HTTP verb
  Future<http.Response> get(String endpoint, {Map<String, String>? headers}) {
    return _request(endpoint: endpoint, method: AppEnum.GET, headers: headers);
  }

  Future<http.Response> post(String endpoint,
      {Map<String, String>? headers, dynamic body}) {
    return _request(
        endpoint: endpoint, method: AppEnum.POST, headers: headers, body: body);
  }

  Future<http.Response> put(String endpoint,
      {Map<String, String>? headers, dynamic body}) {
    return _request(
        endpoint: endpoint, method: AppEnum.PUT, headers: headers, body: body);
  }

  Future<http.Response> patch(String endpoint,
      {Map<String, String>? headers, dynamic body}) {
    return _request(
        endpoint: endpoint,
        method: AppEnum.PATCH,
        headers: headers,
        body: body);
  }

  Future<http.Response> delete(String endpoint,
      {Map<String, String>? headers}) {
    return _request(
        endpoint: endpoint, method: AppEnum.DELETE, headers: headers);
  }
}
