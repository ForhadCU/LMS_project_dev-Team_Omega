import nodemailer from "nodemailer";
export const sendEmail = async (to: string, msgHtmlBody: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bjetomegateam@gmail.com",
      pass: "nrbt mogi ylfp zihe",
    },
  });

  await transporter.sendMail(
    {
      from: "bjetomegateam@gmail.com",
      to,
      subject: "Welcome to B-JET Learning Portal.",
      text: "",
      html: msgHtmlBody,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success " + JSON.stringify(data));
      }
    }
  );
};
