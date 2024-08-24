import 'package:flutter/material.dart';

class ActiveStatusDotView extends StatelessWidget {
  final Color color;
  const ActiveStatusDotView({super.key, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 14,
      height: 14,
      decoration: BoxDecoration(shape: BoxShape.circle, color: color),
    );
  }
}
