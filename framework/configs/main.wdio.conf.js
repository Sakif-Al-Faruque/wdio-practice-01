import path from 'node:path';
import fs from 'fs-extra';

export const downloadDir = path.resolve('./tmp');

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            /* disableWebdriverStepsReporting: true, */
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true,
            disableMochaHooks: true
        }]
    ],

}
