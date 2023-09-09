<div align="center">
    <h1><code>🎓</code> KMITL MVC</h1>
    <p>Exit Examination for Computer Science</p>
</div>

## `📝` Description

This project is a web application that allows users to create, read on **Monix**

## `📝` Requirements

1. Create project by using MVC design pattern
2. Kernel of OS "Monix" it's mainly responsible for writing input data and displaying summary results. Details as follows:
   - Receive data from the user side. The received data will be in the format **[time]** **[integer]** only. Time will be in the format
     hours:minutes:seconds and will leave 1 space between the time and the integer, such as 11:12:13 10000 and
     Store information (Can be used with both Relational or NOSQL databases or JSON File or CSV
     File or other methods depending on your aptitude)
   - Displays a summary of integer data dating back no more than 1 hour from the current time received.
     Finding the average of the 50th, 90th, and 95th percentiles of those data, respectively.
3. This Kernel can support two types of user interfaces for both types of devices: `IoT` and `Smart Phone` which will have different display
4. Displays in the form of IoT will mainly focus on text. It will be able to receive values and display summary results as follows.

```bash
Average: 7456.39
50th Percentile: 8000
90th Percentile: 10000
95th Percentile: 11000
```

5. The display in the form of a Smart Phone emphasizes the use of images. It can receive values and display summary results. as follows (Students do not need to present this message. Just have something similar to the one below.)

```bash
                 90th: 10000
                 v
                 v 95th: 11000
                 v v
OOOOOOOOOOXOOOOOOXOXO
          ^
          50th: 8000 / Avg.: 7456.39
```

## `📚` Stack

- [Next.js](https://nextjs.org/) - React Framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Swagger UI](https://swagger.io/tools/swagger-ui/) - API Documentation

## `🏢` Project Structure

- [app](app) - Web application (Monix)
  - `page.tsx` - Web application page
  - [api](app/api) - API for the web application (Monix)
    - `route.ts` - API routes
      - `GET` (function) - Get Time Data and Average Data
      - `POST` (function) - Create Time Data and Integer Data
  - [monix](app/monix) - Web application for **Swagger UI** (Monix)
    - `react-swagger.tsx` - Swagger UI
- [lib](lib) - Library (Monix)
  - `util.ts` - Utility
    - `CalculatePercentile` (function) - Calculate Percentile
    - `IsValidTimeFormat` (function) - Check Time Format Validation
    - `IsValidIntegerValue` (function) - Check Integer Value Validation
    - `MakeSerializable` (function) - Make Serializable
  - `http.ts` - HTTP
    - `ResponseJSON` (function) - Response JSON
  - `prisma.ts` - Database ORM (Prisma)
    - `prisma` (object) - Prisma ORM
  - `swagger.ts` - Swagger Docs
    - `getApiDocs` (function) - Get API Docs
- [prisma](prisma) - Database ORM (Prisma)
  - `schema.prisma` - Database schema (Using PostgreSQL)
  - [migration](prisma/migrations) - Database migration (Prisma)
    - `20230909063745_kmitl_mvc` (migration) - Database migration
  - `seed.ts` - Database seed (Prisma)
- [model](model) - API model (Monix)
  - `types.ts` - API model
    - `ApiResponse` (interface) - API Response

```bash
.
├── app
│   ├── api
│   │   └── route.ts
│   ├── monix
│   │   └── react-swagger.tsx
│   └── page.tsx
├── lib
│   ├── http.ts
│   ├── prisma.ts
│   ├── swagger.ts
│   └── util.ts
├── model
│   └── types.ts
├── prisma
│   ├── migrations
│   │   └── ...
│   ├── schema.prisma
│   └── seed.ts
├── .gitignore
├── prettire.config.js
├── README.md
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## `📦` Installation

```bash
# Install dependencies
pnpm install

# Run database migration
pnpm prisma:deploy

# Run database seed
prisma db seed --preview-feature

# Run development server
pnpm dev # but if you use pnpm dev:turbo Swagger UI will not work
```

## `🚀` Deployment

This project is not working on production yet.

## `📝` License

This project is [MIT](LICENSE) licensed.
