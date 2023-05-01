import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "apps/nestjs/src/schema.gql",
  // documents: "apps/nextjs/src/graphql/*.graphql",
  generates: {
    "apps/nextjs/src/graphql/generated/types.ts": {
      plugins: ["typescript"],
    },
    "apps/nextjs/src/graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        folder: "generated",
        extension: ".ts",
        baseTypesPath: "generated/types.ts",
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: { withHooks: true },
    },
  },
};
export default config;
