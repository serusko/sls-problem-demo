import "source-map-support/register";

import type { ValidatedEventAPIGatewayProxyEvent } from "../../libs/apiGateway";
import { formatJSONResponse } from "../../libs/apiGateway";

import schema from "./schema";
console.log(
  "------------------------------------------------------------------------------------------"
);
console.log(__dirname);
console.log(
  "-----------------------------------------------------------------------------------------"
);

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  return event.httpMethod === "POST"
    ? formatJSONResponse({
        message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
        event,
      })
    : formatJSONResponse({
        message: `Hello World!, welcome to the exciting Serverless world!`,
      });
};

export const main = hello;
