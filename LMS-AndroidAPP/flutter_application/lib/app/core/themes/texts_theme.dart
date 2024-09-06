import 'package:flutter/material.dart';

TextTheme appTextTheme = const TextTheme(
  /* 
    // usage
    Text('BodyText1', style: Theme.of(context).textTheme.bodyText1),
   */

  // Headline styles
  displayLarge: TextStyle(fontSize: 32.0, fontWeight: FontWeight.bold),
  titleLarge: TextStyle(fontSize: 20.0, fontWeight: FontWeight.w600),

  // Body text styles
  bodyLarge: TextStyle(fontSize: 16.0, fontWeight: FontWeight.w400), // Regular
  bodyMedium: TextStyle(
      fontSize: 14.0, fontWeight: FontWeight.w400), // Smaller body text

  // Subtitle styles
  titleMedium:
      TextStyle(fontSize: 16.0, fontWeight: FontWeight.w500), // Medium weight
  titleSmall: TextStyle(
      fontSize: 14.0, fontWeight: FontWeight.w500), // Smaller subtitle

  // Button text style
  labelLarge: TextStyle(
      fontSize: 14.0, fontWeight: FontWeight.w600, letterSpacing: 1.25),

  // Caption text style
  bodySmall: TextStyle(
      fontSize: 12.0, fontWeight: FontWeight.w400, color: Colors.grey),

  // Overline text style
  labelSmall: TextStyle(
      fontSize: 10.0, fontWeight: FontWeight.w400, letterSpacing: 1.5),
);
