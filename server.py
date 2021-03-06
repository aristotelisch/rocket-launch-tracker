from bottle import route, run, template, request, static_file
from bottle import get, post, put, delete
import os
import datetime
import time
import json
import bottle
import random
from mylaunchlibrary.launch import Launch
from weather_detector.weather_test import WeatherReporter

app = bottle.default_app()

@get("/assets/<filename:re:.*\.(css|js|jpg|jpeg|png|gif|ico|woff|woff2|ttf|map)>")
def serve_assets(filename):
    return static_file(filename, root="./assets")

@get('/')
def launch_handler():
  l = Launch()
  launches = l.next_launches(4)
  context = dict()
  context["title"] = "All launches"
  context["launches"] = launches
  context["current_date"] = datetime.datetime.now().strftime("%Y-%m-%d")
  context["weather"] = WeatherReporter()
  return template('./layouts/launch', context=context)

def main():
  if os.environ.get('APP_LOCATION') == 'heroku':
      run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
  else:
      run(host='localhost', port=8080, debug=True)

if __name__ == '__main__':
    main()