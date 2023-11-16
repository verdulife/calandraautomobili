import type { APIRoute } from "astro";
import { SMTPClient, Message } from "emailjs";

const client = new SMTPClient({
  user: "verdu@live.com",
  password: "",
  host: "smtp-mail.outlook.com",
  tls: {
    ciphers: "SSLv3",
  },
});

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json")
    return new Response(null, { status: 400 });

  const formData = await request.json();

  console.log({ formData });

  const message = new Message({
    from: "you <verdu@live.com>",
    to: "Albert Kactus <verdukactus@gmail.com>",
    subject: "testing emailjs",
    text: "i hope this works",
    attachment: [
      {
        data: "<html>i <i>hope</i> this works!</html>",
        alternative: true,
      },
    ],
  });

  client.send(message, (err, message) => {
    console.log({ err } || { message });
  });

  return new Response(
    JSON.stringify({
      message: "endpoint works",
    }),
    {
      status: 200,
    }
  );
};
