"""Realtryx frontend website urls.

A list of url functions that Django will use to load the correct view
when a specific URI is called.
"""
__author__ = ['Joshua Schaeffer']
__version__ = '0.4.5'
__py_version__ = '3.5.2'
__creation_date__ = '2018-03-02'

from django.conf.urls import url

from . import views


app_name = 'customer'
urlpatterns = [
    url(
        r'^register-account/$',
        views.RegisterAccountView.as_view(),
        name='register'
    )
]
