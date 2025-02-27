import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Genre: a
    .model({
      genreId: a.integer().required(), // Primary Key - Maps to 'id' in genres.ts
      name: a.string().required(),
      slug: a.string().required(),
      games_count: a.integer().required(),
      image_background: a.string().required(),
      games: a.hasMany("Game", "genreId"), // One-to-many relationship with Game
    })
    .authorization((allow) => [allow.guest()]),

  Game: a
    .model({
      gameId: a.integer().required(), // Primary Key - Maps to 'id' in genres.ts -> games[]
      slug: a.string().required(),
      name: a.string().required(),
      added: a.integer().required(),
      genreId: a.integer().required(), // Foreign key - Links to Genre.genreId
      genre: a.belongsTo("Genre", "genreId"), // Many-to-one relationship with Genre
    })
    .authorization((allow) => [allow.guest()]),

  Platform: a
    .model({
      platformId: a.integer().required(), // Primary key for Platform
      name: a.string().required(),
      slug: a.string().required(),
      //has many relationship with Subplatform
      subPlatforms: a.hasMany("SubPlatform", "platformId"),
    })
    .authorization((allow) => [allow.guest()]),

  SubPlatform: a
    .model({
      subPlatformId: a.integer().required(),
      name: a.string().required(),
      slug: a.string().required(),
      games_count: a.integer().required(),
      image_background: a.string().required(),
      image: a.string(),
      year_start: a.integer(),
      year_end: a.integer(),
      platformId: a.integer().required(),
      platform: a.belongsTo("Platform", "platformId"), // Many-to-one relationship with Platform
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
