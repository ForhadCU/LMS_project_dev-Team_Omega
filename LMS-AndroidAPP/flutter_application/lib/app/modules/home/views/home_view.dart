import 'package:flutter/material.dart';
import 'package:flutter_neumorphic_plus/flutter_neumorphic.dart';

import 'package:get/get.dart';
import '../../../core/widgets/baseWidget.dart';
import '../controllers/home_controller.dart';

// Data Model
class AttendanceData {
  AttendanceData(this.status, this.count);
  final String status;
  final double count;
}

class HomeView extends GetView<HomeController> {
  const HomeView({Key? key}) : super(key: key);

// Sample Data for the Pie Chart
  List<AttendanceData> _getAttendanceData() {
    final List<AttendanceData> chartData = [
      AttendanceData('Present', 40),
      AttendanceData('Absent', 30),
      AttendanceData('Late', 30),
    ];
    return chartData;
  }

  @override
  Widget build(BuildContext context) {
    return BaseWidget(
      isDrawer: true,
      title: "Home",
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Ongoing Courses
            _buildSectionTitle('Ongoing Courses'),
            _buildOngoingCourses(),

            // General Resources
            _buildSectionTitle('General Resources'),
            _buildGeneralResources(),

            // Events
            _buildSectionTitle('Events'),
            _buildEvents(),

            // Exam Ranking
            _buildSectionTitle('Daily Exam Rankings'),
            _buildExamRankings(),

            // Attendance Analytics (Pie Chart)
            _buildSectionTitle('Attendance Analytics'),
            // _buildAttendanceChart(),

            // Forum
            _buildSectionTitle('Forum Posts'),
            _buildForum(),
          ],
        ),
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text(
        title,
        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
      ),
    );
  }

  // Ongoing Courses Section
  Widget _buildOngoingCourses() {
    return Container(
      height: 120,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          _buildCourseCard('Math', '5 Lessons', Icons.book),
          _buildCourseCard('Science', '8 Lessons', Icons.science),
          _buildCourseCard('History', '4 Lessons', Icons.history),
        ],
      ),
    );
  }

  Widget _buildCourseCard(String courseName, String lessons, IconData icon) {
    return Card(
      child: Container(
        width: 150,
        padding: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 40),
            Text(courseName, style: TextStyle(fontSize: 16)),
            Text(lessons),
          ],
        ),
      ),
    );
  }

  // General Resources Section
  Widget _buildGeneralResources() {
    return Container(
      padding: EdgeInsets.all(10),
      child: Column(
        children: [
          _buildResourceItem('Class Notes', Icons.note),
          _buildResourceItem('Video Lectures', Icons.video_library),
        ],
      ),
    );
  }

  Widget _buildResourceItem(String name, IconData icon) {
    return ListTile(
      leading: Icon(icon),
      title: Text(name),
      trailing: Icon(Icons.arrow_forward_ios),
      onTap: () {},
    );
  }

  // Events Section
  Widget _buildEvents() {
    return Card(
      child: Column(
        children: [
          Image.network('https://example.com/event-banner.jpg'),
          ListTile(
            title: Text('Event: School Annual Day'),
            subtitle: Text('Date: 20th Oct, 2024'),
          ),
        ],
      ),
    );
  }

  // Exam Rankings Section
  Widget _buildExamRankings() {
    return Column(
      children: [
        ListTile(
          leading: CircleAvatar(child: Text('1')),
          title: Text('Student A'),
          subtitle: Text('Score: 95'),
        ),
        ListTile(
          leading: CircleAvatar(child: Text('2')),
          title: Text('Student B'),
          subtitle: Text('Score: 90'),
        ),
        // Add more rankings...
      ],
    );
  }

/*   // Inside your _buildAttendanceChart method:
Widget _buildAttendanceChart() {
  return Container(
    height: 200,
    padding: EdgeInsets.all(10),
    child: SfCircularChart(
      title: ChartTitle(text: 'Attendance Analytics'),
      legend: Legend(isVisible: true),
      series: <CircularSeries>[
        // Render pie chart
        PieSeries<AttendanceData, String>(
          dataSource: _getAttendanceData(),
          xValueMapper: (AttendanceData data, _) => data.status,
          yValueMapper: (AttendanceData data, _) => data.count,
          dataLabelSettings: DataLabelSettings(isVisible: true),
          explode: true,
          explodeIndex: 0,
        )
      ],
    ),
  );
} */

  // Forum Posts Section
  Widget _buildForum() {
    return Column(
      children: [
        ListTile(
          title: Text('Forum Post 1'),
          subtitle: Text('Posted by Teacher A'),
          trailing: Icon(Icons.arrow_forward_ios),
        ),
        ListTile(
          title: Text('Forum Post 2'),
          subtitle: Text('Posted by Teacher B'),
          trailing: Icon(Icons.arrow_forward_ios),
        ),
        // Add more posts...
      ],
    );
  }
}
