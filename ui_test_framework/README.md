ui_test_framework/
├── config/
│   ├── settings.py             # Env toggles: staging/production, device config
│   ├── env_staging.json
│   └── env_production.json
├── pages/
│   ├── base_page.py
│   ├── login_page.py
│   ├── register_page.py
│   ├── email_page.py
│   └── mfa_page.py
├── tests/
│   ├── test_login.py
│   ├── test_register.py
│   ├── test_email_management.py
│   └── test_mfa.py
├── utils/
│   ├── playwright_setup.py
│   ├── appium_setup.py
│   ├── data_generator.py
│   └── mobile_emulation.py
├── conftest.py                 # Pytest fixtures for env, browser, driver
├── requirements.txt
└── README.md


