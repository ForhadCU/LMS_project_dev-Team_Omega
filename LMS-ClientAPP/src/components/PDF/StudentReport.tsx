import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import mockChart from "../../../public/bar_chart.png";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  heading: { fontSize: 18, marginBottom: 10 },
  field: { fontSize: 14, marginBottom: 5 },
  chart: { width: "300px", height: "300px" },
});

// Define student data type
export interface IStudentData {
  name: string;
  email: string;
  attendance: number;
  averageMarks: number;
}

export const StudentReport = ({
  name,
  email,
  attendance,
  averageMarks,
}: IStudentData) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Student Report</Text>
        <View style={styles.section}>
          <Text style={styles.field}>Name: {name}</Text>
          <Text style={styles.field}>Email: {email}</Text>
          <Text style={styles.field}>Attendance: {attendance}%</Text>
          <Text style={styles.field}>Average Marks: {averageMarks}</Text>
        </View>
        <Text style={styles.heading}>Attendance Breakdown</Text>
        <Image style={styles.chart} src={mockChart} />{" "}
        {/* Static Pie Chart Image */}
      </Page>
    </Document>
  );
};
