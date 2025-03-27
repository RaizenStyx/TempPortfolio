const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default (req, res) => {

  try {
  const body = JSON.parse(req.body);
  
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  mail.send({
    to: 'me@calexreed.dev',
    from: 'me@calexreed.dev',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }).then(() => {
    res.status(200).json({ status: "Ok" });
  });
  } 
  catch(error) {
    return res.status(error.statusCode || 500).json({error: error.message})
  }
}
