import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./openapi.yaml",
    },
    output: {
      mode: "tags-split",
      target: "../api-client-react/src/generated",
      client: "react-query",
      override: {
        mutator: {
          path: "../api-client-react/src/mutator.ts",
          name: "customClient",
        },
      },
    },
    hooks: {
      afterAllFilesGenerate: "prettier --write ../api-client-react/src/generated",
    },
  },
});
