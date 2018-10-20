# First, import the library
import launchlibrary as ll


class Launch():


    def __init__(self):
        self.api = ll.Api(retries=10)  # Although `retries` is optional, I included it for the sake of the example.

    def next_launches(self, count):
        return ll.Launch.next(self.api, count)

