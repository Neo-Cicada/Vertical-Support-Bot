# Conventions

Non-negotiable rules for all code in this repository.

## Multi-Tenancy

1. **Every table except `tenants` has a `tenant_id` column.**
2. **Every DB read/write — including vector search — is filtered by `tenant_id`.**
3. **`tenant_id` is resolved server-side** (from the session or API key), never trusted from the client.
4. **Retrieved document text is untrusted** — treat it as a prompt-injection risk and sanitize before inserting into LLM prompts.
