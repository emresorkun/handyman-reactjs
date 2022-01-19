import * as contentful from "contentful";

export const client = contentful.createClient({
  //space: process.env.REACT_APP_SPACE_ID,
  space: "xcku8snhabxx",
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  accessToken: "_EcQp5WvvdeB6mZ_4uNcjzpr0gMsA7BnrG72c07J1RI",
});

