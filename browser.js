const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

let browserInstance = null;

async function getBrowser() {
  if (!browserInstance) {
    console.log('Launching new browser instance...');
    browserInstance = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--disable-gpu',
        '--disable-dev-shm-usage'
      ],
      executablePath: '/usr/bin/chromium',
      headless: true,
    });
  }
  return browserInstance;
}

module.exports = { getBrowser };