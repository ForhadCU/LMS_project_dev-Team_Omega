import 'dart:convert';

import 'package:flutter_application/app/core/core_lib.dart';

import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class ApiProvider {
  // make this class singleton
  ApiProvider._internal();
  static final ApiProvider _singleton = ApiProvider._internal();
  factory ApiProvider() {
    return _singleton;
  }
  // codes start from here
  // All methods or variables shouldn't be static

  static const String baseUrlLive = 'lms-project-dev-team-omega.vercel.app';
  static const String baseUrlLocalhost = 'localhost:5000';
  static const String midPoint = "/api/v1";

  // Private method to handle requests ////////////
  Future<http.Response> _request({
    required String endpoint,
    required AppEnum method,
    Map<String, String>? headers,
    dynamic body,
    Map<String, String>? params,
  }) async {
    // final uri =  Uri.https(baseUrlLive,midPoint+endpoint);
    final uri = Uri.http(baseUrlLocalhost, midPoint + endpoint, params);

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

  // Public methods for each HTTP verb ////////////
  Future<http.Response> get(
    String endpoint, {
    Map<String, String>? headers,
    Map<String, String>? params,
  }) {
    return _request(
        endpoint: endpoint,
        method: AppEnum.GET,
        headers: headers,
        params: params);
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

  // public methods for each local set action ////////////
  Future<bool?> setBool({required String key, required bool value}) {
    return _setRequestToLocal(AppEnum.BOOL, key, value);
  }

  Future<bool?> setString({required String key, required String value}) {
    return _setRequestToLocal(AppEnum.STRING, key, value);
  }

  Future<bool?> setInt({required String key, required int value}) {
    return _setRequestToLocal(AppEnum.INT, key, value);
  }

  Future<bool?> setDouble({required String key, required double value}) {
    return _setRequestToLocal(AppEnum.DOUBLE, key, value);
  }

  Future<bool?> setStringList(
      {required String key, required List<String> value}) {
    return _setRequestToLocal(AppEnum.BOOL, key, value);
  }

  // public methods for each local get action ////////////
  Future<bool?> getBool({required String key, required bool value}) async {
    return await _getRequestToLocal(AppEnum.BOOL, key);
  }

  Future<String?> getString({required String key}) async {
    return await _getRequestToLocal(AppEnum.STRING, key);
  }

  Future<int?> getInt({required String key}) async {
    return await _getRequestToLocal(AppEnum.INT, key);
  }

  Future<double?> getDouble({required String key}) async {
    return await _getRequestToLocal(AppEnum.DOUBLE, key);
  }

  Future<List<String>> getStringList({required String key}) async {
    return await _getRequestToLocal(AppEnum.BOOL, key);
  }

  // private method to handle local set requests ////////////
  Future<bool?> _setRequestToLocal(
      AppEnum method, String key, dynamic value) async {
    final SharedPreferences sharedPreferences =
        await SharedPreferences.getInstance();
    switch (method) {
      case AppEnum.BOOL:
        return await sharedPreferences.setBool(key, value);
      case AppEnum.STRING:
        return await sharedPreferences.setString(key, value.toString());
      case AppEnum.INT:
        return await sharedPreferences.setInt(key, value);
      case AppEnum.DOUBLE:
        return await sharedPreferences.setDouble(key, value);
      case AppEnum.STRINGLIST:
        return await sharedPreferences.setStringList(key, value);

      default:
        throw Exception("Invalid Local Storage method");
    }
  }

  // private method to handle local get requests ////////////
  Future<dynamic> _getRequestToLocal(AppEnum method, String key) async {
    final SharedPreferences sharedPreferences =
        await SharedPreferences.getInstance();
    switch (method) {
      case AppEnum.BOOL:
        return sharedPreferences.getBool(key);
      case AppEnum.STRING:
        return sharedPreferences.getString(key);
      case AppEnum.INT:
        return sharedPreferences.getInt(key);
      case AppEnum.DOUBLE:
        return sharedPreferences.getDouble(key);
      case AppEnum.STRINGLIST:
        return sharedPreferences.getStringList(key);

      default:
        throw Exception("Invalid Local Storage method");
    }
  }
}
