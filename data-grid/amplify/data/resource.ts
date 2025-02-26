import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Genre: a
    .model({
      name: a.string().required(),
      slug: a.string().required(),
      games_count: a.integer(),
      image_background: a.string(),
      games: a.hasMany("Game", "genreId"), // Correct relationship
    })
    .authorization((allow) => [allow.guest()]),

  Game: a
    .model({
      slug: a.string().required(),
      name: a.string().required(),
      added: a.integer(),
      genreId: a.string().required(), // Foreign key for relationship
      genre: a.belongsTo("Genre", "genreId"), // Bidirectional relationship
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
