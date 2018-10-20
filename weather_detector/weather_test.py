from weather import Weather, Unit

weather = Weather(unit=Unit.CELSIUS)
location = weather.lookup_by_latlng(53.3494,-6.2601)

forecasts = location.forecast
for forecast in forecasts:
    print(forecast.text)
    print("Date: " + forecast.date)
    print("High temprature: " + forecast.high)
    print("Low temprature: " + forecast.low)
    print("")
