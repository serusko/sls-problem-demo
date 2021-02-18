import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);

export const helloConfig = {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.main`,
  name: "hello",
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
