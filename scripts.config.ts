import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run src/index.ts",
      desc: "run my src/index.ts file",
    },
  },
};

export default config;
