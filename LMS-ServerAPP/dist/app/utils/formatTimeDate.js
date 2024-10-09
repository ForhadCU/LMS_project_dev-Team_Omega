"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = exports.formatDate = void 0;
const formatDate = (date) => {
    var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = "0" + month;
    if (day.length < 2)
        day = "0" + day;
    return [year, month, day].join("-");
};
exports.formatDate = formatDate;
const formatTime = (hours, min, sec) => {
    let desiredTime = hours.toString() + ":" + min.toString();
    if (sec) {
        desiredTime = desiredTime + ":" + sec.toString();
    }
    return desiredTime;
};
exports.formatTime = formatTime;
