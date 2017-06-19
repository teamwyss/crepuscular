var graph = {
	metrics: {
		h:500
		,minsTotal:60
	}
	,init : function(){
		var dtNow = new Date();
		var uiGraph = document.querySelector("#frameGraph");
		var sOut = "<div id=\"graphMainLine\"></div>";
		sOut += "<div id=\"graphSchool\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(5) + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VCA</div>";
		sOut += "<div id=\"graphFlinders\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(25) + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flind</div>";
		sOut += "<div id=\"graphMidBrighton\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(45) + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MBri</div>";
		sOut += "<div id=\"graphHome\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(55) + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</div>";
		//sOut += "";
		sOut += "<div id=\"graphSun\">&nbsp;</div>";
		//sOut += dtNow.getHours();
		uiGraph.innerHTML = sOut;
		return this;
	}
	, refresh : function(){
		var uiSun = document.querySelector("#graphSun");
		uiSun.style.top = this.remainingToPx();
		return this;
	}
	, remainingToPx: function(){
		var iSec = (new Date()).getSeconds();
		//var iTopPx = Math.round((iSec / 60) * this.metrics.h);
		return this.minsToPx(iSec)
	}
	, minsToPx: function(iMins){
		var iTopPx = Math.round((iMins / this.metrics.minsTotal) * this.metrics.h);
		return iTopPx + "px";
	}
};