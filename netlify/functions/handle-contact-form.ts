import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

import {
  type ContactForm,
  isValidEmail,
} from "../../src/assets/js/ContactForm";

const CONTACT_FORM_SUBMISSION_NATASHA_TITLE = "Contact Form Submission";
const CONTACT_FORM_SUBMISSION_NATASHA_ID = "0p7kx4xmmrvl9yjr";

const CONTACT_FORM_SUBMISSION_SUBMITTER_TITLE =
  "Thanks for contacting Money with Confidence!";
const CONTACT_FORM_SUBMISSION_SUBMITTER_ID = "3zxk54v76m64jy6v";

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

  const contactForm: ContactForm = JSON.parse(event.body);

  if (!isValidEmail(contactForm.email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        key: "INVALID_EMAIL",
        message: "The supplied email is invalid",
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

  const sender = new Sender(
    "hello@moneywithconfidence.com",
    "Natasha @ Money with Confidence"
  );

  const natashaEmailParams = new EmailParams()
    .setFrom(sender)
    .setTo([
      new Recipient("hello@moneywithconfidence.com", "Money with Confidence"),
    ])
    .setReplyTo(sender)
    .setSubject(CONTACT_FORM_SUBMISSION_NATASHA_TITLE)
    .setTemplateId(CONTACT_FORM_SUBMISSION_NATASHA_ID)
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

  const submitterEmailParams = new EmailParams()
    .setFrom(sender)
    .setTo([new Recipient(contactForm.email, contactForm.name)])
    .setReplyTo(sender)
    .setSubject(CONTACT_FORM_SUBMISSION_SUBMITTER_TITLE)
    .setTemplateId(CONTACT_FORM_SUBMISSION_SUBMITTER_ID)
    .setVariables([
      {
        email: contactForm.email,
        substitutions: [
          {
            var: "name",
            value: contactForm.name,
          },
        ],
      },
    ]);

  const results = {
    natasha: (await mailerSend.email.send(natashaEmailParams)).body,
    submitter: (await mailerSend.email.send(submitterEmailParams)).body,
  };

  return {
    statusCode: 201,
    body: JSON.stringify(results),
  };
};
