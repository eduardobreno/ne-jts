import { CodegenConfig } from "@graphql-codegen/cli";

const FRONTEND_PATH = "apps/nextjs/";
const BACKEND_PATH = "apps/nestjs/";

const config: CodegenConfig = {
  schema: [`${BACKEND_PATH}src/graphql/schema.gql`],
  documents: `${FRONTEND_PATH}src/graphql/*.graphql`,
  generates: {
    [`${FRONTEND_PATH}src/graphql/generated/types.ts`]: {
      plugins: ["typescript"],
    },
    [`${FRONTEND_PATH}src/graphql/`]: {
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
