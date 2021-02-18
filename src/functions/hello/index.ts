import schema from "./schema";

import { main } from "./handler";

console.log(main.name);

export const helloConfig = {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.main`,
  name: "hello",
  events: [
    {
      http: {
        method: "get",
        path: "hello",
      },
    },
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
