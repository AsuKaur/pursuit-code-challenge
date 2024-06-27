import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["../../jest-setup.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};

export default config;
