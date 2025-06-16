import pytest
from utils.auth_helpers import login_user

@pytest.fixture
def auth_token():
    return login_user("newuser@example.com", "TestPass123!")