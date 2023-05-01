import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../nestjs/src/schema.gql",
  documents: "./src/graphql/*.graphql",
  generates: {
    "src/graphql/generated/types.ts": {
      plugins: ["typescript"],
    },
    "./src/graphql/": {
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
