import bottle
import random

@APP.get('/')
def index():
  return '<p>Hello</p>'
  
@APP.get('/random')
def random_integer():
  return str(random.randint(0, 100))
  
if __name__ == '__main__':
  bottle.run(application=APP)
