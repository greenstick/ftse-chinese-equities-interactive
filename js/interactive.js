/*
FTSE Scenarios Data
*/

var scenarios = {
	"now": {
		"name": "now",
		"selected": true,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dials": {
			"global": 0.122,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"1": {
		"name": "1",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dials": {
			"global": 0.222,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"2": {
		"name": "2",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dials": {
			"global": 0.322,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"3": {
		"name": "3",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dials": {
			"global": 0.422,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"4": {
		"name": "4",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dials": {
			"global": 0.522,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	}
};


/*
Dial Class - Object Parameter Required
@ - param: element: String,
@ - param: value: Int
*/

var Dial = function (args) {
	var dial 			= this;
		dial.element 	= args.element,
		dial.display 	= args.display,
		dial.value 		= args.value,
		dial.history	= dial.cache || 0,
		dial.cache;
};

/*
Dial Public Methods Methods
*/

	//Initialize Dial
	Dial.prototype.init = function () {
		//Use this to trim the dial number output.toString().substr(0,5)
		d3.select(this.element).append('svg')
			.attr('width', '53')
			.attr('height', '21')
			.attr('class', 'percent r')
			.append('text')
			.attr('stroke-color', '#983222')
			.attr('fill', '#983222')
			.text(this.value*100 + '%');
	};
	//Update Dial to Data
	Dial.prototype.update = function (value) {
		var value = value;
			d3.selectAll(this.element + ' .percent')
				.data(value).enter()
				.append('text').text('0.00').attr('class', 'percent')
				.transition().duration(1000)
				.tween("text", function (d) {
					var i 			= d3.interpolate(this.textContent, d),
						precision 	= (d.toString()).split("."),
						round 		= (precision.length > 1) ? Math.pow(10, precision[1].length) : 1;

					return function(t) {
						this.textContent = Math.round(i(t) * round) / round;
					};
				});
			this.cache = value;
	};
	//Reset Dial to 0
	Dial.prototype.reset = function () {
		$(this.element + ' .percent').text('0.00%');
	};

/*
Interactive Class - JSON Data Object Required
*/

var Interactive = function (data) {
	var interactive 		= this;
		interactive.data 	= data,
		interactive.dials 	= {};

/*
Interactive Not Actually Private 'Private' Methods
*/

		//Loop Through Dial Elements and Instantiate Dial Class For Each
		interactive._initDials 		= function () {
			//Retrieves Dials in View and Inits
			$('.dial').each(function (i, e) {
				//Get ID of Dial & Display Element
				var id 			= $(e).attr("id"),
					selectable 	= '#' + id,
					display 	= selectable + ' .percent',
					dial 		= new Dial({element: selectable, display: display, value: 0.000});
					
					dial.init();
					interactive.dials[id] = dial;
			})
		};
		//Reset All Dials
		interactive._resetDials = function () {
			$.each(interactive.dials, function (k, v) {
				v.update([0.00]);
			})
		};
		//Set Each Dial Value to Data & Update
		interactive._updateDials = function (page) {
			$.each(interactive.dials, function (k, v) {
				v.update([interactive.data[page].dials[k]])
			})
		};
		//Sets Scenario Lead Text
		interactive._setLead = function (element, page) {
			$(element).text(interactive.data[page].lead);
		};
};

/*
Interactive Public Methods Methods
*/

	Interactive.prototype.init = function (page) {
		this._initDials();
		this._updateDials(page);
	};
	Interactive.prototype.update = function (page) {
		this._resetDials();
		this._updateDials(page);
		this._setLead('.scenario', page);
	};

/*
Initialize Interactive
*/

var interactive = new Interactive(scenarios);
	interactive.init("now");

/*
Event Bindings
*/

$('.button').on('click', function () {
	var colorData = $(this).data().color;
	var pageData = $(this).data().scenario;
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('#dials').css('background-color', colorData);
		interactive.update(pageData);
})
$('.dialBody').on('click', function () {
	var mapData = $(this).data().map;
		$('#map img').attr('src', "img/maps/" + mapData + ".png");
})
//Draw Arc
// var arc = d3.svg.arc()
// 	.innerRadius(inner + (ringWidth * j))
// 	.outerRadius(inner + (ringWidth * (j + 1)))
// 	.startAngle((360/segments) * (i + offsetOdd) * (pi/180))
// 	.endAngle((360/segments) * (i + 1 + offsetOdd) * (pi/180));