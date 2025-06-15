api_test_framework/
├── config/
│   └── settings.py         # Base URL, environment configs, secrets
├── data/
│   └── test_users.json     # Sample test user accounts
├── tests/
│   ├── test_auth.py        # Register, login, logout, change password
│   ├── test_mfa.py         # MFA setup and validation
│   ├── test_email.py       # Add/update/delete/get emails
│   └── test_verification.py# Account verification-related tests
├── utils/
│   ├── api_client.py       # Request handling logic (GET, POST, PUT...)
│   ├── auth_helpers.py     # Login, token retrieval, user generation
│   └── data_builder.py     # Generate payloads, dynamic data
├── conftest.py             # Pytest fixtures (e.g., auth token)
├── requirements.txt        # Dependencies
└── README.md               # Project overview
