/*
FTSE Data
*/

var data = {
	"scenario": {
		"name": "now",
		"selected": true,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dial": {
			"global": 0.022,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"scenario": {
		"name": "1",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dial": {
			"global": 0.022,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"name": {
		"scenario": "2",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dial": {
			"global": 0.022,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"name": {
		"scenario": "3",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dial": {
			"global": 0.022,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	},
	"name": {
		"scenario": "4",
		"selected": false,
		"lead": "The existing $50 billion QFII quota is upheld with 30% limited foreign ownership.",
		"dial": {
			"global": 0.022,
			"emerging": 0.205,
			"pacific": 0.102,
			"nojapan": 0.164
		},
		"china": 0.726
	}
}

/*
Interactive Class - JSON Object Required
*/

var Interactive = function (data) {
	var i 				= this;
		i.data 			= data;
};

Interactive.prototype.init = function () {
	ko.mapping.fromJS(this.data);
};
Interactive.prototype.show = function () {
	
}

/*
Dial Class - Object Parameter Required
@ - param: element: String,
@ - param: value: Int
*/

var Dial = function (args) {
	var dial 			= this;
		dial.element 	= args.element,
		dial.value 		= args.value;
};

/*
Dial Methods
*/

Dial.prototype.init = function () {
	d3.select('#' + this.element + ' .percent').text(dial.value);
};
Dial.prototype.update = function () {
	d3.select('#' + this.element + ' .percent').text(dial.value);
};
Dial.prototype.reset = function () {
	d3.select('#' + this.element + ' .percent').text('0.0%');
};

//Draw Arc
// var arc = d3.svg.arc()
// 	.innerRadius(inner + (ringWidth * j))
// 	.outerRadius(inner + (ringWidth * (j + 1)))
// 	.startAngle((360/segments) * (i + offsetOdd) * (pi/180))
// 	.endAngle((360/segments) * (i + 1 + offsetOdd) * (pi/180));