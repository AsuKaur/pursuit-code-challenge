import type { Config } from "jest";
import nextJest from "next/jest.js";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["../../jest-setup.ts"],
};

const createJestConfig = nextJest({
  dir: "./",
});

export default createJestConfig(config);
