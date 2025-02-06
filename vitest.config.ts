import * as dotenv from 'dotenv-safe';
import { resolve as resolvePath } from 'node:path';
import { defineConfig } from 'vitest/config';

dotenv.config();

export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    /**
     * I needed to comment out this line for the tests to run without the need for this file
     */
    globalSetup:
      process.env.MODE === 'development' ? undefined : './test-setup.ts',
    reporters: process.env.GITHUB_ACTIONS
      ? ['default', 'junit', 'github-actions']
      : ['default'],
    outputFile: {
      junit: './junit.xml',
    },
    env: {
      DU_SERVICE_NAME: 'test',
    },
  },
});
