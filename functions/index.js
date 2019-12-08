const functions = require("firebase-functions");
const { email, password } = require("./config");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password
  }
});

mailTransport.use("compile", htmlToText());

exports.sendUserEmail = functions.database
  .ref("orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
  });

const APP_NAME = "Salad Buzz";
function sendOrderEmail(order) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@salad-buzz.com>`,
    to: order.email,
    subject: `Your order confiramtion from ${APP_NAME}`,
    html: `
    <table style="width:500px; margin auto" >
        <tr>
            <th>Hi </th>
            <th>${order.displayName}, here is your order confirmation</th>
        </tr>
        ${order.order
          .map(
            ({ name, qty, price }) => `
        <tr>
            <td> ${qty}</td>
            <td> ${name}</td>
            <td> $ ${price}</td>
        </tr>`
          )
          .join("")}
    </table>`
  };
  mailTransport.sendMail(mailOptions);
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
