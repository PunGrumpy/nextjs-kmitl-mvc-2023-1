<div align="center">
    <h1><code>🎓</code> KMITL MVC</h1>
    <p>Exit Examination for Computer Science</p>
</div>

## `📝` Description

This project is a web application that allows users to create, read on **Monix**

## `📚` Stack

- [app](app) - Web application (Monix)
  - `page.tsx` - Web application page
  - [api](app/api) - API for the web application (Monix)
    - `route.ts` - API routes
      - `GET` (function) - Get Time Data and Average Data
      - `POST` (function) - Create Time Data and Integer Data
  - [monix](app/monix) - Web application for **Swagger UI** (Monix)
    - `react-swagger.tsx` - Swagger UI
- [lib](lib) - Library (Monix)
  - [util.ts](lib/util.ts) - Utility
    - `CalculatePercentile` (function) - Calculate Percentile
    - `IsValidTimeFormat` (function) - Check Time Format Validation
    - `IsValidIntegerValue` (function) - Check Integer Value Validation
    - `MakeSerializable` (function) - Make Serializable
  - [http.ts](lib/http.ts) - HTTP
    - `ResponseJSON` (function) - Response JSON
  - [prisma.ts](lib/prisma.ts) - Database ORM (Prisma)
    - `prisma` (object) - Prisma ORM
  - [swagger.ts](lib/swagger.ts) - Swagger Docs
    - `getApiDocs` (function) - Get API Docs
- [prisma](prisma) - Database ORM (Prisma)
  - [schema.prisma](prisma/schema.prisma) - Database schema (Using PostgreSQL)
  - [migration](prisma/migration) - Database migration (Prisma)
  - [seed](prisma/seed.ts) - Database seed (Prisma)
- [model](model) - API model (Monix)
  - `ApiResponse` (interface) - API Response
