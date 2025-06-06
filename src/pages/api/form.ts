import type { APIRoute } from "astro";
import { SMTPClient } from "emailjs";
import { intern, response } from "@/lib/email-template";

const EMAIL = import.meta.env.EMAIL;
const EMAIL_PASS = import.meta.env.EMAIL_PASS;

const client = new SMTPClient({
  user: EMAIL,
  password: EMAIL_PASS,
  host: "smtpout.secureserver.net",
  ssl: true,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();

    const internMessage = {
      from: `Calandra Automibli <${EMAIL}>`,
      to: `Calandra Automibli <${EMAIL}>`,
      subject: `${formData.fullname} has contact you`,
      text: "Email from website",
      attachment: {
        data: intern(formData),
        alternative: true,
      },
    };

    const responseMessage = {
      from: `Calandra Automibli <${EMAIL}>`,
      to: `${formData.fullname} <${formData.email}>`,
      subject: `${formData.fullname}, thank you for contacting Calandra Automobili`,
      text: "Thank you for contacting Calandra Automobili. Our team will get back to you in the next 48h. Calandra Automobili Team.",
      attachment: {
        data: response(formData),
        alternative: true,
      },
    };

    await client.sendAsync(internMessage);
    await client.sendAsync(responseMessage);

    return new Response(JSON.stringify({ message: "Done" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 400,
    });
  }
};
