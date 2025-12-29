import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 90000,
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined as any,
  reporter: 'html',

  use: {
    trace: 'on-first-retry', 
    ignoreHTTPSErrors: true,
    headless: false,
    navigationTimeout: 60000,
    launchOptions: {
      slowMo: 1000, 
    },
  },

  projects: [
    {
      name: 'demoQA',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://demoqa.com'
      },
      testMatch: '*.demoqa.spec.mts'
    },
    {
      name: 'AIGHospital',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://aighospitals.com/'
      },
      testMatch: '*.aighospitals.spec.mts'
    },

/*    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

     Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});


