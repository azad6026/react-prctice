import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Genre: a
    .model({
      id: a.string().required(),  // Ensure ID is required
      name: a.string().required(),
      slug: a.string().required(),
      games_count: a.integer(),
      image_background: a.string(),
      games: a.hasMany("Game", "genreId"), // Use a relationship instead of a custom type
    })
    .authorization((allow) => [allow.guest()]),

  Game: a
    .model({
      id: a.integer().required(),
      slug: a.string().required(),
      name: a.string().required(),
      added: a.integer(),
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
