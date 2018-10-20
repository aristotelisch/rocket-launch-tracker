var datepicker_config = {
    onDayCreate: function(dObj, dStr, fp, dayElem){
        // Utilize dayElem.dateObj, which is the corresponding Date

        if (Math.random() < 0.15)
            dayElem.innerHTML += "<span class='event'></span>";

        else if (Math.random() > 0.85)
            dayElem.innerHTML += "<span class='event busy'></span>";
    },

    onChange: function(selectedDates, dateStr, instance) {
        console.log('SelDates: ', selectedDates, 'dateStr: ', dateStr, 'instance: ', instance)
        $('.datepicker').text(dateStr);
    },

}

$(document).ready(function () {
    $(".datepicker").flatpickr(datepicker_config);
});

