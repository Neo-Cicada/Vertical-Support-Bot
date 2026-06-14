import pytest


@pytest.mark.skip(reason="To be implemented in the multi-tenancy block")
def test_tenant_a_cannot_see_tenant_b_data():
    """Tenant isolation: queries scoped to tenant_id must never leak across tenants."""
    pass


@pytest.mark.skip(reason="To be implemented in the multi-tenancy block")
def test_vector_search_filtered_by_tenant_id():
    """Vector similarity search must include a tenant_id filter."""
    pass
