from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str

    ANTHROPIC_API_KEY: str = ""
    VOYAGE_API_KEY: str = ""
    STRIPE_SECRET_KEY: str = ""
    STRIPE_WEBHOOK_SECRET: str = ""
    APP_BASE_URL: str = "http://localhost:8000"

    JWT_SECRET_KEY: str = "change-me-in-production"
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRE_MINUTES: int = 10080  # 7 days

    model_config = {"env_file": ".env", "extra": "ignore"}


settings = Settings()  # type: ignore[call-arg]
