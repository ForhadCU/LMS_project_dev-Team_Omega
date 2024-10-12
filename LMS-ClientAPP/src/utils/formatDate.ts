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
