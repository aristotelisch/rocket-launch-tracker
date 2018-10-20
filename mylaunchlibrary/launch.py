# First, import the library
import launchlibrary as ll
# import IPython



class Launch():


    def __init__(self):
        self.api = ll.Api(retries=10)  # Although `retries` is optional, I included it for the sake of the example.

    def next_launches(self, count):
        # print("Printing launch counts" + count)
        # return ll.Launch.next(self.api, count)
        return ll.Launch.fetch(self.api, next=count, status=1)


    def past_launches(self):
        # location_id
        # location coordinates [lat, long]
        # location weather [temp, wind, cloud]
        # failed
        endpoint = "launch/"
        data = dict()
        data["startdate"] = "2015-08-20"
        data["enddate"] = "2018-10-20"

        result = self.api.send_message(endpoint, data)
        # IPython.embed()

        return result["launches"]


