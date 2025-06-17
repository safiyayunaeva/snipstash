from appium import webdriver


def get_driver():
    caps = {
        "platformName": "Android",
        "deviceName": "Android Emulator",
        "app": "/path/to/sample-bank-app.apk",  # or use appPackage and appActivity if preinstalled
        "automationName": "UiAutomator2"
    }
    return webdriver.Remote("http://localhost:4723/wd/hub", caps)