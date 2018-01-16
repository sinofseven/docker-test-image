const { IncomingWebhook } = require('@slack/client');
const url = process.env.SLACK_WEBHOOK_URL;
const message = process.env.SLACK_MESSAGE;

const send = (url, message) => {
  const webhook = new IncomingWebhook(url);
 
  // Send simple text to the webhook channel
  webhook.send(message, function(err, res) {
      if (err) {
          console.log('Error:', err);
      } else {
          console.log('Message sent: ', res);
      }
  });
};

console.log("url: ", url);
console.log("message: ", message);

if (url != null && message != null){
  send(url, message);
}