var graph = {
	metrics: {
		// Store data used in multiple places in the app.
		h:500
		,minsTotal:60
	}
	,init : function(){
		// Render all the elements. Some are updated by the refresh method.
		var dtNow = new Date();
		var uiGraph = document.querySelector("#frameGraph");
		var sOut = "<div id=\"graphMainLine\"></div>";
		var sSpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		//sOut += "<div id=\"graphSchool\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(5) + ";\"><div class=\"time\">0:00</div><div class=\"label\">VCASS</div></div>";
		sOut += "<div id=\"graphSchool\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(5) + ";\">" + sSpace + "VCASS</div>";
		sOut += "<div id=\"graphFlinders\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(15) + ";\">" + sSpace + "Flind</div>";
		sOut += "<div id=\"graphMidBrighton\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(45) + ";\">" + sSpace + "MBri</div>";
		sOut += "<div id=\"graphHome\" class=\"graphMilestone\" style=\"top:" + this.minsToPx(55) + ";\">" + sSpace + "Home</div>";
		//sOut += "";
		sOut += "<div id=\"graphSun\">&nbsp;</div>";
		//sOut += dtNow.getHours();
		uiGraph.innerHTML = sOut;
		return this;
	}
	, refresh : function(){
		// Run the updates to the UI.
		var uiSun = document.querySelector("#graphSun");
		uiSun.style.top = this.remainingToPx();
		return this;
	}
	, remainingToPx: function(){
		// Convert remaining time to a distance from the top.
		var iSec = (new Date()).getSeconds();
		//var iTopPx = Math.round((iSec / 60) * this.metrics.h);
		return this.minsToPx(iSec)
	}
	, minsToPx: function(iMins){
		// Convert minutes to pixels.
		var iTopPx = Math.round((iMins / this.metrics.minsTotal) * this.metrics.h);
		return iTopPx + "px";
	}
};