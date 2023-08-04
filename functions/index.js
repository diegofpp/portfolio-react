/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// const admin = require("firebase-admin");
// admin.initializeApp();


const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submitContactForm = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).send("Método de solicitud inválido.");
  }

  const {name, email, message} = req.body;

  const mailOptions = {
    from: `${name} <${email}>`,
    to: "difepor@gmail.com",
    subject: "Nuevo mensaje del formulario de contacto",
    text: message,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    return res.status(200).send("¡Correo enviado exitosamente!");
  } catch (error) {
    return res.status(500).send("Error al enviar el correo: " + error);
  }
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
