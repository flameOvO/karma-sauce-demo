module.exports = function(config) {

  // user: "xingming",
  // key: "10f48954-6590-4e1c-9234-1d38d835a501",
  // region: "ondemand.us-west-1.saucelabs.com:443/wd/hub"
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.')
    process.exit(1)
  }
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    // Old JSONWP way of setting the capabilities
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 10',
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 'latest'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
    },
    // Mobile settings
    // 1. Go to https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
    // 2. Select Appium iOS,Android
    // 3. Configure your device
    //    Don't forget to provide the `appiumVersion`
    sl_ios_safari: {
      base: 'SauceLabs',
      deviceName: 'iPhone 11 Simulator',
      platformVersion: '13.4',
      platformName: 'iOS',
      browserName: 'Safari',
      appiumVersion: '1.17.1',
      deviceOrientation: 'portrait'
    },
    // !!!!IMPORTANT!!!!
    // If you want to use an Android emulator then you can't use localhost.
    // Because an Android emulator is a VM it will go to it's own localhost
    // and the test will fail. Make change the `hostname` to your
    // local ip
    sl_android: {
      base: 'SauceLabs',
      deviceName: 'Android GoogleAPI Emulator',
      platform: 'Android',
      version: '11.0',
      browserName: 'chrome',
      appiumVersion: '1.18.1',
      deviceOrientation: 'portrait'
    },
    // For W3C way of setting the capabilities check
    // https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
    // And select WebDriver (W3C) Selenium 3/4, Webdriver.io
    sl_chromeW3C: {
      base: 'SauceLabs',
      browserName: 'chrome',
      browserVersion: 'latest',
      'sauce:options':{
        tags: ['w3c-chrome']
      }
    },
  }

  config.set({

    // The rest of your karma config is here
    // ...
    sauceLabs: {
        testName: 'Web App Unit Tests'
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['progress', 'saucelabs'],
    singleRun: true,
    colors: true,
    sauceLabs: {
      testName: 'Karma and Sauce Labs demo',
      recordScreenshots: false,
      connectOptions: {
        logfile: 'sauce_connect.log'
      },
      public: 'public'
    },
  })
}
