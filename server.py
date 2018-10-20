from bottle import route, run, template, request, static_file
from bottle import get, post, put, delete
import os
import bottle
import random

app = bottle.default_app()

@app.get('/')
def index():
  return '<p>Hello</p>'

@app.get('/random')
def random_integer():
  return str(random.randint(0, 100))

if os.environ.get('APP_LOCATION') == 'heroku':
    run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
else:
    run(host='localhost', port=8080, debug=True)