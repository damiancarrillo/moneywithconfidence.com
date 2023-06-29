import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // const { name = "stranger" } = event.queryStringParameters;

  if (event.headers["enctype"] === "application/x-www-form-urlencoded") {
    
    const mailerSendApiToken = process.env.MAILERSEND_API_TOKEN;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  };
};
