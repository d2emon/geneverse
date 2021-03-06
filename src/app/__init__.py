#!/usr/bin/env python
from flask import jsonify, make_response

from .app import app
from .views import *


@app.route('/')
def index():
    return "Hello, World!"


@app.errorhandler(404)
def not_found(error):
    print(error)
    return make_response(jsonify({'error': 'Not found'}), 404)
