from weather import Weather, Unit

class WeatherReporter:
    w = None
    def __init__(self, unit):
        self.w = Weather(unit)

    def get_result_for_geolocation(self, lat, lon):
        location = self.w.lookup_by_latlng(lat, lon)
        condition = location.condition
        wind_speed = location.wind.speed
        wind_direction = location.wind.direction
        return {"condition":condition.text, "windSpeed":wind_speed, "windDirection":wind_direction, "temp":location.condition.temp}

    def get_forecasting_results_for_geolocation(self, lat, lon):
        location = self.w.lookup_by_latlng(lat, lon)
        forecasts = location.forecast
        list = []
        for forecast in forecasts:
            list.append({"date":forecast.date, "high":forecast.high, "low":forecast.low, "description":forecast.text})
        return list


w = WeatherReporter(Unit.CELSIUS)
list = w.get_forecasting_results_for_geolocation(53.3494, -6.2601)
location = w.get_result_for_geolocation(53.3494, -6.2601)

print("Description of the weather: " + location.get("condition"))

for i in range(0,len(list)):
    print("High temprature: " + list[i].get("high"))
    print("Low temprature: " + list[i].get("high"))

