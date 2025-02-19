import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Genre: a
    .model({
      id: a.integer(),
      name: a.string(),
      slug: a.string(),
      games_count: a.integer(),
      image_background: a.string(),
      games: a.customType({
        id: a.integer(),
        slug: a.string(),
        name: a.string(),
        added: a.integer(),
      }),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
