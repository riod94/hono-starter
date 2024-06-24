# Hono Microservice Starter

![Hono](https://img.shields.io/badge/Hono-orange)
![Vinejs](https://img.shields.io/badge/Vine.js-8A2BE2)
![Knex.js](https://img.shields.io/badge/Knex.js-yellow)
![ObjectionJs](https://img.shields.io/badge/Objection.js-black)

Microservice starter using [Hono](https://hono.dev) framework and [Vine.js](https://vinejs.dev/docs/introduction) validator and [Knex.js](https://knexjs.org/) database driver and [Objection.js](https://vincit.github.io/objection.js/) as ORM.

## Quick Start

To install dependencies:

```sh
bun install
```

Then copy `.env.example` to `.env`

```sh
cp .env.example .env
```

Note: You need to copy oauth-private.key and oauth-public.key to `src/storage`, this is used to sign and verify JWT.

To run:

```sh
bun dev
```

open http://localhost:8989

To run commands:

```sh
bun shin
```

```
$ bun scripts/index.ts
Available Commands:
make:controller     Create a new controller class
make:middleware     Create a new middleware class
make:model          Create a new Eloquent model class
make:request        Create a new form request class
make:resource       Create a new resource
```

To make a new controller:

```sh
bun shin make:controller UserController
```

To make a compiled file:
Note: .env must be set first before compiling, if any change in `src/` you will need to run `bun compile` again 

```sh
bun compile AppName
```

## Folder Structure

```sh
├── src                                   // Root Directory
│   ├── app                               // Application Directory
│   │   ├── Controllers                     // Controller Directory
│   │   │   ├── index.ts                        // All Controller export here. auto export using command
│   │   │   └── UserController.ts
│   │   ├── Middleware                      // Middleware Directory
│   │   │   ├── index.ts                        // All Middleware export here. auto export using command
│   │   │   └── AuthMiddleware.ts
│   │   │   └── InitMiddleware.ts
│   │   ├── Models                          // Model Directory
│   │   │   └── index.ts                       // All Model export here. auto export using command
│   │   │   └── User.ts
│   │   ├── Requests                        // Request Directory
│   │   │   └── index.ts                        // All Request export here. auto export using command
│   │   │   └── UserRequest.ts
│   │   ├── Resources                       // Resource Directory
│   │   │   └── index.ts                        // All Resource export here. auto export using command
│   │   │   └── BaseResource.ts                 // Base Resource Class. use for all resource class to parse data
│   │   │   └── UserResource.ts
│   │   └── Services                        // Service Directory
│   │   │   └── index.ts                        // All Service export here no command to make services
│   │   └── Types                           // Types Directory. All Interface is here
│   │
│   └── config                           // Configuration Directory
│   │   └── database.ts                    // Database Configuration. use for knex and objection setting
│   │   └── index.ts                       // All Configuration export here
│   │   └── ErrorHandler.ts                // Error Handler. use for exception error handling
│   │   └── RateLimiter.ts                // Rate Limiter. use for rate limiting
│   │
│   └── Lang                             // Language Directory
│   │   └── index.ts                       // This is use for translation eg: t("Hi :name, Welcome back", {name: "Hono"})
│   │   └── messages.ts                    // This is library for translation
│   │   └── validation.ts                  // This is library for validation
│   │
│   └── routes                           // Routing Directory
│   │   └── index.ts                       // All Route export here
│   │   └── api                            // API Route Directory
│   │       └── index.ts                   // All API Route export here
│   │
│   └── storage                          // Storage Directory
│   │   └── database-config.json          // Database Configuration. use for knex and objection connections
│   │   └── oauth-private.key
│   │   └── oauth-public.key
│   │
│   └── utils                            // Utility Directory
│       └── index.ts                       // All Utility export here
│       └── Mail.ts                        // Mail Utility. use for sending email

```

## Documentation

For more information about Hono see [docs](https://hono.dev/docs/)

For more information about Objection.js see [docs](https://vincit.github.io/objection.js/guide/getting-started.html)

For more information about Vine.js see [docs](https://vinejs.dev/docs/introduction)

## Contributing

For more details, see [CONTRIBUTING.md](CONTRIBUTING.md)

## License

Distributed under the MIT License.
