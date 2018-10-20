from bottle import route, run, template, request, static_file
from bottle import get, post, put, delete
import os
import time
import json
import bottle
import random

app = bottle.default_app()

@get('/')
def index():
  return '<p>Hello</p>'

@get('/launch')
def launch_handler():
    return template('./layouts/launch', title="All launches")

if os.environ.get('APP_LOCATION') == 'heroku':
    run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
else:
    run(host='localhost', port=8080, debug=True)