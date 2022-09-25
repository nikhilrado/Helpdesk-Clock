config = {
	"time modes": {
		"normal": {
			"times": ["08:24","22:28","18:09"],
			"ring x min before": 10
		}
	}
}

mode = "normal"
//ringAt = config["time modes"][mode]["times"]
ringAt = ["08:24","22:28",,"18:09","18:10","18:11","18:12","18:13","18:14","18:15","18:16","18:17","18:18","18:19","18:20","18:21","18:22","18:23","18:24","18:25","18:26","18:27","18:28","18:29","18:30","18:31","18:32","18:33","18:34"]
for (const time of config["time modes"][mode]["times"]) {
	console.log(time)
	date = new Date(time)
	console.log(date.getHours())
	ringAt.push(Date.parse(time))
}
//console.log(ringAt[1].getSeconds())

function onBtnClick() {
	document.getElementById("onBtn").innerText = "Chime Active"
}

function timeMatch (time) {
	if (ringAt.includes(time)) {
		return true
	}
	return false;
}

function play() {
            //var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
	var audio = new Audio('/chime1.wav');
	audio.play();
            audio.play();
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

		console.log(timeMatch(h + ":" + m))
	  console.log(s)
	  console.log(s == 0)
		if (timeMatch(h + ":" + m) && s == 0){
			play()
		}
	
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
    
    setTimeout(showTime, 1000 * 1);


		//if ()
}

window.onload = (event) => {
	showTime();
	console.log("loaded")
};
