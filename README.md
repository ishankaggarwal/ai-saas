# AI SAAS App: Next.js 14, React, Prisma, Tailwind, MySQL, Chatgpt API, Replicate API, Stripe

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/ishankaggarwal/ai-saas.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
OPENAI_API_KEY=
REPLICATE_API_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
DATABASE_URL=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |