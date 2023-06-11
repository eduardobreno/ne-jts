# Turborepo + Nextjs + Nestjs (Prisma|Graphql)


Nextjs based on turbo in this example: https://turbo.build/repo/docs/getting-started/create-new

Nestjs based on: https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nestjs


## Nextjs (frontend)
- folder: `apps/nextjs`
- graphql: `apps/nextjs/src/graphql`
    - Write the query files here `*.graphql`
- the command `yarn codegen` will  generated the types based in the query here -> `apps/nextjs/src/graphql/generated`

