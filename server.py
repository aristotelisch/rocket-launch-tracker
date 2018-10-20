from bottle import route, run, template, request, static_file
from bottle import get, post, put, delete
import os
import time
import json
import bottle
import random
from mylaunchlibrary.launch import Launch

app = bottle.default_app()

@get('/')
def index():
  return '<p>Hello</p>'

@get("/assets/<filename:re:.*\.(css|js|jpg|jpeg|png|gif|ico|woff|woff2|ttf|map)>")
def serve_assets(filename):
    return static_file(filename, root="./assets")

@get('/launch')
def launch_handler():
  l = Launch()
  launches = l.next_launches(5)
  return template('./layouts/launch', title="All launches", thelaunches=launches)

def main():
  if os.environ.get('APP_LOCATION') == 'heroku':
      run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
  else:
      run(host='localhost', port=8080, debug=True)

if __name__ == '__main__':
    main()