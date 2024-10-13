export const formatDate = (postDate: string) => {
  const incomingdate = new Date(postDate);

  // Get the day, month, and year
  const day = incomingdate.getUTCDate();
  const month = incomingdate.toLocaleString("default", { month: "long" });
  const year = incomingdate.getUTCFullYear();

  // Construct the formatted date
  const formattedDate = `${day} ${month}, ${year}`;
  return formattedDate;
};

export const getTodayDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
