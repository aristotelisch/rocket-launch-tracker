var DASHBOARD = {
    onReady: function () {
        if (document.getElementsByClassName('toggle-ai-mode')) {
            DASHBOARD.setUpAIActivation()
        }

        if (document.getElementById("network-status")) {
            DASHBOARD.getNetworkStatus();
            setInterval(DASHBOARD.getNetworkStatus, 600000); // Check network status every 10 minutes
            $('.network-status-refresh').on('click', DASHBOARD.getNetworkStatus);
        }

        if (document.getElementById("rpi-status")) {
            DASHBOARD.getRpiStatus();
            setInterval(DASHBOARD.getRpiStatus, 600000); // Check rpi status every 10 minutes
            $('.rpi-status-refresh').on('click', DASHBOARD.getRpiStatus);
        }

        if (document.getElementById("pi-battery-gauge")) {
            DASHBOARD.setUpGauges();
            DASHBOARD.getBatteryVoltage();
            DASHBOARD.getBatteryCapacity();

            setInterval(function () {
                DASHBOARD.getBatteryVoltage();
                DASHBOARD.getBatteryCapacity();
            }, 40000);
        }

        if (document.getElementById('zone_joystick')) {
            DASHBOARD.setUpJoystick();

            $(document).on('touchcancel', function() {
                window.joystick.destroy();
                DASHBOARD.setUpJoystick();
            })
        }

        DASHBOARD.setUpServos();

        $(document).keypress(DASHBOARD.keyPress);
    },

    keyPress: function (event) {
        code = event.keyCode;
        if (code == 119) {
            DASHBOARD.sendCommand('f');
        }
        else if (code == 97) {
            DASHBOARD.sendCommand('l');
        }
        else if (code == 115) {
            DASHBOARD.sendCommand('s');
        }
        else if (code == 100) {
            DASHBOARD.sendCommand('r');
        }
        else if (code == 122) {
            DASHBOARD.sendCommand('b');
        }
    },

    sendCommand: function (command) {
        $.get("/motors/" + command)
            .done(function (data) {
                console.log("Response: " + data);
            });
    },

    setServo: function (channel, action) {
        $.get("/servo/" + channel + "/" + action)
            .done(function (data) {
                console.log("Response: " + data);
            });
    },

    getNetworkStatus: function () {
        $('.network-status-refresh i').removeClass('fa fa-refresh icon').addClass('fa fa-spinner faa-spin animated');
        // fa fa-spinner faa-spin animated
        $.get("/network/status")
            .done(function (data) {
                var statuses = JSON.parse(data);

                for (var status in statuses) {
                    $("." + status).text(" " + statuses[status]);
                    console.log(status + ": " + statuses[status]);
                }
                // $("#voltage").text("Voltage: " + Math.round(Number(data) * 100) / 100 + "V");
                $('.network-status-refresh i').removeClass('fa fa-spinner faa-spin animated').addClass('fa fa-refresh icon');
                console.log("Network status: " + data + "V");
            });

    },

    getRpiStatus: function () {
        $('.rpi-status-refresh i').removeClass('fa fa-refresh icon').addClass('fa fa-spinner faa-spin animated');

        $.get("/diagnostics/rpi")
            .done(function (data) {
                var statuses = JSON.parse(data);

                for (var status in statuses) {
                    $("." + status).text(" " + statuses[status]);
                    console.log(status + ": " + statuses[status]);
                }

                $('.rpi-status-refresh i').removeClass('fa fa-spinner faa-spin animated').addClass('fa fa-refresh icon');
                console.log("Rpi status: " + data);
            });

    },

    getBatteryVoltage: function () {
        $.get("/battery/voltage")
            .done(function (data) {
                $("#voltage").text("Voltage: " + Math.round(Number(data) * 100) / 100 + "V");
                console.log("Battery voltage: " + data + "V");
            });
    },

    getBatteryCapacity: function () {
        $.get("/battery/capacity")
            .done(function (data) {
                $("#capacity").text("Capacity: " + Math.round(Number(data) * 100) / 100 + "%");
                $("#pi-battery-gauge").data("piBatteryPercent", data);
                DASHBOARD.piBatteryGauge.refresh($("#pi-battery-gauge").data("piBatteryPercent"));
                console.log("Battery capacity: " + data + "%");
            });
    },

    setUpGauges: function () {
        DASHBOARD.piBatteryGauge = new JustGage({
            id: "pi-battery-gauge",
            value: $("#pi-battery-gauge").data("piBatteryPercent"),
            min: 0,
            max: 100,
            title: "Raspberry PI Battery",
            levelColors: ["#ff0000", "#f9c802", "#a9d70b"],
            gaugeWidthScale: 0.5,
            symbol: "%"
        });
    },

    setUpJoystick: function () {
        var options = {
            zone: document.getElementById('zone_joystick'),
            mode: 'static',
            color: 'purple',
            position: { top: '200px', left: '380px' }
        };


        var joystick = nipplejs.create(options);
        window.joystick = joystick;


        window.joystick.on('start end', function (evt, data) {
            // console.log('evt.type', evt.type);
            // console.log(evt.type, data);
            if (evt.type == 'end') {
                console.log("end event fired");
                setTimeout(function() {
                    DASHBOARD.sendCommand('s')
                    console.log("stop motors after 1 sec");
                    }, 1);
            }
        }).on('dir:up plain:up dir:left plain:left dir:down ' +
            'plain:down dir:right plain:right',
            function (evt, data) {
                switch (evt.type) {
                    case 'dir:up':
                        DASHBOARD.sendCommand('f');
                        break;
                    case 'dir:down':
                        DASHBOARD.sendCommand('b');
                        break;
                    case 'dir:right':
                        DASHBOARD.sendCommand('r');
                        break;
                    case 'dir:left':
                        DASHBOARD.sendCommand('l');
                        break;
                }
                // console.log(evt.type, data);
            });
    },

    setUpServos: function () {
        $(".servo-max").on('click', function () {
            DASHBOARD.setServo(15, 'max');
        });

        $('.servo-min').on('click', function () {
            DASHBOARD.setServo(15, 'min');
        });
    },

    setUpAIActivation: function () {
        $(".toggle-ai-mode").on('click', function () {
            $.get('/AI-mode/activate')
                .done(function (data) {
                    console.log('ai mode activated. Response: ', data);
                });
        });
    }
}

$(document).ready(DASHBOARD.onReady);