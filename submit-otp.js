const puppeteer = require('puppeteer');

// Helper function to add manual delays
const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

async function submitOTP() {
  const browser = await puppeteer.launch({ 
    headless: false, 
    slowMo: 100 
  });
  
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5501/bank-otp.html');
  await page.waitForSelector('#otpInput');
  
  await page.type('#otpInput', '1');
  await delay(200); // Delay for 500ms
  await page.type('#otpInput', '2');
  await delay(200);
  await page.type('#otpInput', '3');
  await delay(200);
  await page.type('#otpInput', '4');
  await delay(200);
  await page.type('#otpInput', '5');
  await delay(200);
  await page.type('#otpInput', '6');
  
  await delay(500); // Wait for 1 second before clicking
  await page.click('#submitButton');
  
  await page.waitForSelector('#statusMessage');
  const statusMessage = await page.$eval('#statusMessage', el => el.innerText);
  
  console.log('Status Message:', statusMessage);

  await delay(3000); // Wait 3 seconds before closing the browser
  await browser.close();
}

submitOTP();
