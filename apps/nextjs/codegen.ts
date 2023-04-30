import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../nestjs/src/schema.gql",
  documents: "./src/graphql/*.graphql",
  generates: {
    "src/graphql/types.ts": {
      plugins: ["typescript"],
    },
    "./src/graphql/": {
      preset: "near-operation-file",
      presetConfig: { extension: ".generated.ts", baseTypesPath: "types.ts" },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: { withHooks: true },
    },
  },
};
export default config;
