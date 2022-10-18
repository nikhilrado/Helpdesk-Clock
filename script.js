config = {
	"time modes": {
		"normal": {
			"times": ["8:14","9:03","9:52","10:41","11:30","12:19","1:08","1:57"],
			"ring x min before": 10
		},
		"end of day assembly": {
			"times": ["8:06","8:47","9:28","10:09","10:50","11:31","12:12","12:53"],
			"ring x min before": 10
		}
	}
}

// sets when the clock should ring
mode = "normal"
function refreshRingAt(){
	ringAt = []
	for (const time of config["time modes"][mode]["times"]) {
		ringAt.push(time)
	}
}
refreshRingAt()

//console.log(ringAt[1].getSeconds())

function onBtnClick() {
	document.getElementById("onBtn").innerText = "Chime Active"
}

function timeMatch (time) {
	console.log(time)
	if (ringAt.includes(time)) {
		return true
	}
	return false;
}

var audio = new Audio('/chime1.wav');
function play() {
            //var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
	audio.play();
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

		//console.log(timeMatch(h + ":" + m))
	  //console.log(s)
	  //console.log(s == 0)

	
    //if(h == 0){
    //    h = 12;
    //}
    
    //if(h > 12){
    //    h = h - 12;
    //    session = "PM";
    //}
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " //+ session;
	  //console.log(date.getTime());
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

		if (timeMatch(h + ":" + m) && s == 0){
			play()
		}
    
    setTimeout(showTime, 1000 * 1);


		//if ()
}

window.onload = (event) => {
	showTime();
	console.log("loaded")

	var form = document.getElementById('schedule-picker');
	form.addEventListener('change', function() {
		play()
		if (document.getElementById("normal-selected").checked) {
			mode = "normal"
		}
		if (document.getElementById("end-of-day-selected").checked) {
			mode = "end of day assembly"
		}
		console.log("mode is now: " + mode)
		refreshRingAt()
	});
	
};

