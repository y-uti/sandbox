var width = 800;
var height = 800;

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);

d3.json("japan.json", function (error, o) {

    var projection = d3.geo.mercator()
	    .center([137, 34])
	    .scale(1000)
	    .translate([width / 2, height / 2]);

    var path = d3.geo.path()
	    .projection(projection);

    var features = topojson.feature(o, o.objects.ne_10m_admin_1_states_provinces).features;
    
    svg.selectAll(".japan")
	.data(features)
	.enter()
	.append("path")
	.attr("stroke", "black")
	.attr("stroke-width", "0.5")
	.attr("fill", function(d, i) { return d3.hsl(360 * i / features.length, 0.5, 0.5); })
	.attr("d", path);
});
