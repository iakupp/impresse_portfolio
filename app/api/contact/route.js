import { Resend } from "resend";
import EmailTemplate from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { nameInput, emailInput, messageInput } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@impresse.sk",
      to: "jakubmajercik.jm@gmail.com",
        subject: "Nový dopyt z webu",
        react: EmailTemplate({ nameInput, emailInput, messageInput }),
      reply_to: emailInput,
    });

    return Response.json({ success: true });
  } catch (err) {
      console.log(err)
    return Response.json({ success: false }, { status: 500 });
  }
}