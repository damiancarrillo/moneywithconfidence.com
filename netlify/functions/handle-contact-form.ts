import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import {
  MailerSend,
  MailerSendConfig,
  EmailParams,
  Sender,
  Recipient,
} from "mailersend";
import { type ContactForm } from "../../src/assets/js/Model";

const CONTACT_FORM_SUBMISSION_TITLE = "Contact Form Submission";
const CONTACT_FORM_SUBMISSION_TEMPLATE_ID = "0p7kx4xmmrvl9yjr";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod.toUpperCase() === "HEAD") {
    return {
      statusCode: 200,
    };
  }

  if (event.httpMethod.toUpperCase() !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "HEAD,POST",
      },
      body: JSON.stringify({
        key: "HTTP_METHOD_NOT_ALLOWED",
        message: "HTTP method not allowed",
      }),
    };
  }

  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        key: "MISSING_CONTACT_FORM_BODY",
        message: "Missing contact form in body",
      }),
    };
  }

  const apiKey = process.env.MAILERSEND_PRODUCTION_API_KEY;

  if (apiKey === undefined) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        key: "API_KEY_NOT_CONFIGURED",
        message: "API key not configured",
      }),
    };
  }

  const mailerSend = new MailerSend({
    apiKey: apiKey,
  });

  const contactForm: ContactForm = JSON.parse(event.body);
  const sentFrom = new Sender(
    "hello@moneywithconfidence.com",
    "Contact Form - MwC Website"
  );
  const recipients = [
    new Recipient("hello@moneywithconfidence.com", "Money with Confidence"),
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(CONTACT_FORM_SUBMISSION_TITLE)
    .setTemplateId(CONTACT_FORM_SUBMISSION_TEMPLATE_ID)
    .setVariables([
      {
        email: "hello@moneywithconfidence.com",
        substitutions: [
          {
            var: "name",
            value: contactForm.name,
          },
          {
            var: "email",
            value: contactForm.email,
          },
          {
            var: "where_did_you_hear_about_mwc",
            value: contactForm.whereDidYouHearAboutMwc,
          },
          {
            var: "what_are_you_interested_in",
            value: contactForm.whatAreYouInterestedIn,
          },
          {
            var: "comments",
            value: contactForm.comment,
          },
        ],
      },
    ]);

  // const response = await mailerSend.email.send(emailParams);

  // return {
  //   statusCode: 200,
  //   body: response.body,
  // };

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ sent: true }),
  };
};
