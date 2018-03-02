"""Customer app models.

The app contains two models to track entire customer entities, which are
called tenants. In addition to creating tenants this app is responsible
for connecting to Django's built-in `User` model. It actually extends
the module using the `AbstractUser` model provided by Django.

Classes:
    Tenants -- Stores tenant data.
    User -- Extends Django's built in `User` object to include a foreign
        key to the `Tenants` model.
"""
__author__ = ['Daniel Schaeffer', 'Joshua Schaeffer']
__version__ = '0.4.5'
__py_version__ = '3.5.2'
__creation_date__ = '2018-03-02'

from django.contrib.auth.models import AbstractUser
from django.db import models
from tenant_schemas.models import TenantMixin


class Tenant(TenantMixin):
    """Tenant table for multiple clients.

    Stores client data for each tenant in a SaaS model.
    """

    created_on = models.DateField(auto_now_add=True)
    paid_until = models.DateField()
    auto_create_schema = True
    account_email = models.EmailField(max_length=254, unique=True)
    account_id = models.CharField(max_length=255, unique=True)

    class Meta:
        db_table = 'tenants'


class User(AbstractUser):
    """Extend Django's built-in User model.

    Users must be tired to a particular tenant so that it is know which
    URL they should be redirected to. This class extends Django's
    built-in User model so that it includes a foreign key to the Tenants
    model.
    """

    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)
