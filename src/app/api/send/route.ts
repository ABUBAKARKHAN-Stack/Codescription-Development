import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, subject, service } = await req.json();

    const subjectPresent = typeof subject !== "undefined" && subject !== "";
    const servicePresent = typeof service !== "undefined" && service !== "";

    const htmlContent = `
      <p><strong>Name:</strong> ${String(name)}</p>
      <p><strong>Email:</strong> ${String(email)}</p>
      ${subjectPresent ? `<p><strong>Subject:</strong> ${String(subject)}</p>` : ""}
      ${servicePresent ? `<p><strong>Service:</strong> ${String(service)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${String(message)}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "official.codescription@gmail.com",
      subject: "New Message from Client",
      html: htmlContent,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
