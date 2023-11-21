import type { APIRoute } from "astro";
import { SMTPClient } from "emailjs";
import { intern, response } from "lib/email-template";

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

  const messageObject = {
    from: "Albert Verdú <verdu@live.com>",
    to: "Albert Kactus <verdukactus@gmail.com>",
    subject: `${formData.fullname} has contact you`,
    text: "Email from website",
    attachment: {
      data: html(formData),
      alternative: true,
    },
  };

  await client.sendAsync(messageObject);

  return new Response(
    JSON.stringify({
      message: "endpoint works",
    }),
    {
      status: 200,
    }
  );
};
