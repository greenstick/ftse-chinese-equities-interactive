/*
Project: China's Share of World Equities Interactive
Client: FTSE
File: interactive.js
By: Column Five Media, Inc.
Author: Ben Cordier
*/

/*
FTSE Scenarios Data
*/

var scenarios = {
    "now": {
        "name": "now",
        "lead": "The $50 billion GFII quota features no foreign A-Share ownership.",
        "dials": {
            "global": 0.02,
            "emerging": 0.194,
            "pacific": 0.096,
            "nojapan": 0.154
        },
        "colors": {
        	"head" : "#00326e",
        	"body" : "#ffffff"
        },
        "rankings": [
            {
                "rank": 1,
                "name": "US",
                "formatted": "$17.07B",
                "data": 17.07
            },
            {
                "rank": 2,
                "name": "JAP",
                "formatted": "$2.89B",
                "data": 2.89
            },
            {
                "rank": 3,
                "name": "UK",
                "formatted": "$2.83B",
                "data": 2.83
            },
            {
                "rank": 4,
                "name": "CAN",
                "formatted": "$1.43B",
                "data": 1.43
            },
            {
                "rank": 5,
                "name": "AUS",
                "formatted": "$1.22B",
                "data": 1.22
            },
            {
                "rank": 6,
                "name": "SWZ",
                "formatted": "$1.12B",
                "data": 1.12
            },
            {
                "rank": 7,
                "name": "FR",
                "formatted": "$1.08B",
                "data": 1.08
            },
            {
                "rank": 8,
                "name": "GER",
                "formatted": "$1.03B",
                "data": 1.03
            },
            {
                "rank": 9,
                "name": "CHINA",
                "formatted": "$726M",
                "data": 0.726
            },
            {
                "rank": 10,
                "name": "SK",
                "formatted": "$639M",
                "data": 0.639
            }
        ]
    },
    "1": {
        "name": "1",
        "lead": "The existing $50 billion GFII quota is kept with a 30% foreign A-Share ownership limit.",
        "dials": {
            "global": 0.022,
            "emerging": 0.205,
            "pacific": 0.102,
            "nojapan": 0.164
        },
        "colors": {
        	"head" : "#00326e",
        	"body" : "#ffffff"
        },
        "rankings": [
            {
                "rank": 1,
                "name": "US",
                "formatted": "$17.07B",
                "data": 17.07
            },
            {
                "rank": 2,
                "name": "JAP",
                "formatted": "$2.89B",
                "data": 2.89
            },
            {
                "rank": 3,
                "name": "UK",
                "formatted": "$2.83B",
                "data": 2.83
            },
            {
                "rank": 4,
                "name": "CAN",
                "formatted": "$1.43B",
                "data": 1.43
            },
            {
                "rank": 5,
                "name": "AUS",
                "formatted": "$1.22B",
                "data": 1.22
            },
            {
                "rank": 6,
                "name": "SWZ",
                "formatted": "$1.12B",
                "data": 1.12
            },
            {
                "rank": 7,
                "name": "FR",
                "formatted": "$1.08B",
                "data": 1.08
            },
            {
                "rank": 8,
                "name": "GER",
                "formatted": "$1.03B",
                "data": 1.03
            },
            {
                "rank": 9,
                "name": "CHINA",
                "formatted": "$780M",
                "data": 0.78
            },
            {
                "rank": 10,
                "name": "SK",
                "formatted": "$639M",
                "data": 0.639
            }
        ]
    },
    "2": {
        "name": "2",
        "lead": "The quota increases to $500 billion with a 30% foreign A-Share ownership limit.",
        "dials": {
            "global": 0.034,
            "emerging": 0.289,
            "pacific": 0.152,
            "nojapan": 0.236
        },
        "colors": {
        	"head" : "#00326e",
        	"body" : "#ffffff"
        },
        "rankings": [
            {
                "rank": 1,
                "name": "US",
                "formatted": "$17.07B",
                "data": 17.07
            },
            {
                "rank": 2,
                "name": "JAP",
                "formatted": "$2.89B",
                "data": 2.89
            },
            {
                "rank": 3,
                "name": "UK",
                "formatted": "$2.83B",
                "data": 2.83
            },
            {
                "rank": 4,
                "name": "CAN",
                "formatted": "$1.43B",
                "data": 1.43
            },
            {
                "rank": 5,
                "name": "CHINA",
                "formatted": "$1.23B",
                "data": 1.23
            },
            {
                "rank": 6,
                "name": "AUS",
                "formatted": "$1.22B",
                "data": 1.22
            },
            {
                "rank": 7,
                "name": "SWZ",
                "formatted": "$1.12B",
                "data": 1.12
            },
            {
                "rank": 8,
                "name": "FR",
                "formatted": "$1.08B",
                "data": 1.08
            },
            {
                "rank": 9,
                "name": "GER",
                "formatted": "$1.03B",
                "data": 1.03
            },
            {
                "rank": 10,
                "name": "SK",
                "formatted": "$639M",
                "data": 0.639
            }
        ]
    },
    "3": {
        "name": "3",
        "lead": "With open access to the A-shares market, there's no quota but ownership is limited to 30%.",
        "dials": {
            "global": 0.04,
            "emerging": 0.326,
            "pacific": 0.175,
            "nojapan": 0.268
        },
        "colors": {
        	"head" : "#ffffff",
        	"body" : "#ccd6e2"
        },
        "rankings": [
            {
                "rank": 1,
                "name": "US",
                "formatted": "$17.07B",
                "data": 17.07
            },
            {
                "rank": 2,
                "name": "JAP",
                "formatted": "$2.89B",
                "data": 2.89
            },
            {
                "rank": 3,
                "name": "UK",
                "formatted": "$2.83B",
                "data": 2.83
            },
            {
                "rank": 4,
                "name": "CHINA",
                "formatted": "$1.46B",
                "data": 1.46
            },
            {
                "rank": 5,
                "name": "CAN",
                "formatted": "$1.43B",
                "data": 1.43
            },
            {
                "rank": 6,
                "name": "AUS",
                "formatted": "$1.22B",
                "data": 1.22
            },
            {
                "rank": 7,
                "name": "SWZ",
                "formatted": "$1.12B",
                "data": 1.12
            },
            {
                "rank": 8,
                "name": "FR",
                "formatted": "$1.08B",
                "data": 1.08
            },
            {
                "rank": 9,
                "name": "GER",
                "formatted": "$1.03B",
                "data": 1.03
            },
            {
                "rank": 10,
                "name": "SK",
                "formatted": "$639M",
                "data": 0.639
            }
        ]
    },
    "4": {
        "name": "4",
        "lead": "Open access to the A-shares market is available with unlimited ownership.",
        "dials": {
            "global": 0.049,
            "emerging": 0.376,
            "pacific": 0.209,
            "nojapan": 0.314
        },
        "colors": {
        	"head" : "#ffffff",
        	"body" : "#ccd6e2"
        },
        "rankings": [
            {
                "rank": 1,
                "name": "US",
                "formatted": "$17.07B",
                "data": 17.07
            },
            {
                "rank": 2,
                "name": "JAP",
                "formatted": "$2.89B",
                "data": 2.89
            },
            {
                "rank": 3,
                "name": "UK",
                "formatted": "$2.83B",
                "data": 2.83
            },
            {
                "rank": 4,
                "name": "CHINA",
                "formatted": "$1.82B",
                "data": 1.86
            },
            {
                "rank": 5,
                "name": "CAN",
                "formatted": "$1.43B",
                "data": 1.43
            },
            {
                "rank": 6,
                "name": "AUS",
                "formatted": "$1.22B",
                "data": 1.22
            },
            {
                "rank": 7,
                "name": "SWZ",
                "formatted": "$1.12B",
                "data": 1.12
            },
            {
                "rank": 8,
                "name": "FR",
                "formatted": "$1.08B",
                "data": 1.08
            },
            {
                "rank": 9,
                "name": "GER",
                "formatted": "$1.03B",
                "data": 1.03
            },
            {
                "rank": 10,
                "name": "SK",
                "formatted": "$639M",
                "data": 0.639
            }
        ]
    }
};

/*
Dial Class - Object Required
@ - param: element: String (Dial Element)
@ - param: value: Int (Initial Value)
*/

var Dial = function (args) {
	var dial 				= this;
		// Element of Dial Instance
		dial.element 		= args.element,
		// Text Display Element on Dial
		dial.display 		= args.display,
		// Current Dial Value
		dial.value 			= args.value,
		// Holds Previous Dial Value
		dial.history		= 0.0,
		// Setting Arc Dimensions
		dial.arcDimensions	= arc = d3.svg.arc()
								.innerRadius(30)
								.outerRadius(45.5)
								.startAngle((0 * 360) * (Math.PI/180));
		// Arc Element - Note endAngle is Defined in Here
		dial.arc 			= d3.select(dial.element + ' svg g')
								.append("path")
								.datum({endAngle: 0 * 360})
								.attr("class", "arc")
								.attr("d", arc)
								.attr("fill", "#983222")
								.attr("transform", "translate(46.5, 46.5)");

/*
Dial Class Not Actually Private 'Private' Methods -- Really Just Done to Cleanly Break Up The Logic
*/

	// Interpolates Numeric Text
	dial.interpolateText = function (start, end, duration, callback) {
		// var targetValue = Math.round(start) - Math.round(end);
		d3.select(this.element + ' .percent')
			.transition()
			.duration(duration)
			.ease('linear')
			.tween("text", function () {
				var i = d3.interpolate(parseInt(this.textContent / 100), end);
				return function (t) {
					this.textContent = ((i(t)) * 100).toFixed(1) + "%";
			};
		});
		//If Callback Function Exists, Execute it
		typeof callback == 'function' ? callback() : false;
	};
	// Interpolates Arc Angle
	dial.interpolateArc = function (value, arc, callback) {
		var dialBody 	= this.element,
			dimensions 	= this.arcDimensions,
			arc 		= this.arc,
			target 		= value * 7.2;
			//D3 Function to Tween Arc Angle
			arcTween = function (transition, newAngle) {
				transition.attrTween("d", function (d) {
					var interpolate = d3.interpolate(0, target);
					return function (t) {
						d.endAngle = interpolate(t);
						return dimensions(d);
					};
				});
			};
			// Calling Arc Transition
			arc.transition()
				.duration(1000)
				.call(arcTween, ((value * 100) * Math.PI/180));
			//If Callback Function Exists, Execute it
			typeof callback == 'function' ? callback() : false;
	};
};

/*
Dial Class Public Methods 
*/

// Initialize Dial
Dial.prototype.init = function () {
	var duration = 500,
		startValue = 0,
		endValue = this.value,
		element = this.element;
		//Interpolate Arc to Inial Value
		this.interpolateArc(endValue, arc);
		//Interpolate Text to Init Value From 0
		this.interpolateText(startValue, endValue, duration, function () {
			//Sets Final Value to Sought Data Value
			$(element + ' .percent').text(endValue);
		});
};
// Update Dial to Data
Dial.prototype.update = function (value, callback) {
	var duration = 500,
		endValue = value,
		startValue = this.history,
		element = this.element;
		//Interpolate Arc to New Value
		this.interpolateArc(endValue, arc);
		//Interpolate Text to New Value
		this.interpolateText(startValue, endValue, duration, function () {
			//Sets Final Value to Sought Data Value
			$(element + ' .percent').text(endValue * 100);
		});
		//If Callback Function Exists, Execute it
		typeof callback == 'function' ? callback() : false;
};

/*
Interactive Class - JSON Data Object Required
*/

var Interactive = function (data) {
	var interactive 			= this;
		// JSON Data
		interactive.data 		= data,
		// Holds Interactive Dial Instances
		interactive.dials 		= {},
		// KO Observable Array to Display Country Rankings
		interactive.ranks 		= ko.observableArray([]),
		// Flag to Prevent Stacking Update Calls
		interactive.updating	= false;

/*
Interactive Class Not Actually Private 'Private' Methods -- Really Just Done to Cleanly Break Up The Logic
*/

	// Loop Through Dial Elements and Instantiate Dial Class For Each
	interactive._initDials = function () {
		// Retrieves Dials in View and Inits
		$('.dial').each(function (i, e) {
			// Get ID of Dial & Display Element
			var id 			= $(e).attr("id"),
				instance 	= '#' + id,
				display 	= instance + ' .percent',
				dial 		= new Dial({element: instance, display: display, value: "0.0"});
				// Initialize Individual Dial Instance
				dial.init();
				// Set Dial Instance to Scope of Interactive Class
				interactive.dials[id] = dial;
		});
	};
	// Set Each Dial Value to Data & Update
	interactive._updateDials = function (page, callback) {
		$.each(interactive.dials, function (k, v) {
			v.update(interactive.data[page].dials[k]);
			this.history = interactive.data[page].dials[k];
		});
		//If Callback Function Exists, Execute it
		typeof callback == 'function' ? callback() : false;
	};
	// Initialize Rankings
	interactive._setRanks = function (page) {
		this.ranks(interactive.data[page]);
	};
	// Sets Scenario Lead Text
	interactive._setLead = function (element, page) {
		$(element).text(interactive.data[page].lead);
	};
	// Sets Dial Info Text Colors
	interactive._setColors = function (head, body, page) {
		$(head).css("color", data[page].colors.head);
		$(body).css("color", data[page].colors.body);
	};
};

/*
Interactive Class Public Methods Methods
*/

// Initalize Interactive - Accepts Page to Initialize to
Interactive.prototype.init = function (page) {
	this._initDials();
	this._updateDials(page);
	this._setRanks(page);
	this._setLead('.scenario', page);
	this._setColors('.region .lead', '.region .copy' , page)
};
// Update Interactive - Updates to Specified Page
Interactive.prototype.update = function (page, callback) {
	this._updateDials(page);
	this._setRanks(page);
	this._setLead('.scenario', page);
	this._setColors('.region .lead', '.region .copy' , page)
	//If Callback Function Exists, Execute it
	typeof callback == 'function' ? callback() : false;
};

/*
Initialize Interactive
*/

// Instantiate Interactive Class
var interactive = new Interactive(scenarios);
	//Initialize Interactive to "Now" Page
	interactive.init("now");
	// Applying Knockout Bindings to Ranking
	ko.applyBindings(interactive.ranks);

/*
Event Bindings
*/

// Menu Click Binding 
$('.button').on('click', function () {
	var colorData = $(this).data().color;
	var pageData = $(this).data().scenario;
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('#dials').css('background-color', colorData);
		interactive.update(pageData, function () {
			updating = false;
		});
})
// Dial Click Binding
$('.dialBody').on('click', function () {
	var mapData = $(this).data().map;
		$('#map img').attr('src', "img/maps/" + mapData + ".png");
})