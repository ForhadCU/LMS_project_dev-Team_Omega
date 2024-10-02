export const formatDate = (date: Date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatTime = (hours: number, min: number, sec?: number) => {
  let desiredTime = hours.toString() + ":" + min.toString();
  if (sec) {
    desiredTime = desiredTime + ":" + sec.toString();
  }

  return desiredTime;
};
