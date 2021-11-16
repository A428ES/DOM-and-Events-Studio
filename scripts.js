window.addEventListener("DOMContentLoaded", function(event){
	let lr = 50;
	let pxMove = 0
	let topbottom = 37;
	
	let rocketEl = document.getElementById("rocket");
	let takeOffButton = document.getElementById("takeoff");
	let flightStat = document.getElementById("flightStatus");
	let consoleBackground = document.getElementById("shuttleBackground");
	let shuttleHeight = document.getElementById("spaceShuttleHeight");
	let landButton = document.getElementById("landing");
	let abortButton = document.getElementById("missionAbort");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
	let topButton = document.getElementById("top");
	let bottomButton = document.getElementById("bottom");


    leftButton.addEventListener("click", event => {
		lr = ((lr + 5) <= 100) ? lr + 5 : 0;
		
		rocketEl.style.right = `calc(${lr}% - ${pxMove}px)`;
	});
	
    rightButton.addEventListener("click", event => {
		lr = ((lr - 5) >= 0) ? lr - 5 : 100;

		rocketEl.style.right = `calc(${lr}% - ${pxMove}px)`;
	});
	
	
	topButton.addEventListener("click", event => {
		topbottom = ((topbottom + 10) <= 320-75) ? topbottom  += 10 : topbottom;
		
		rocketEl.style.bottom = `${topbottom}px`;
		shuttleHeight.innerHTML = topbottom * 1000;
	});
	
	bottomButton.addEventListener("click", event => {
		topbottom = ((topbottom - 10) >= 0) ? topbottom  -= 10 : topbottom;
		
		rocketEl.style.bottom = `${topbottom}px`;
		shuttleHeight.innerHTML = topbottom * 1000;
	});

    takeOffButton.addEventListener("click", event => {    
        let confirmLiftOff = confirm("Confirm that the shuttle is ready for takeoff.")

        if(confirmLiftOff){
            flightStat.innerHTML = "Shuttle in flight.";
            consoleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStat.innerHTML = "The shuttle has landed.";
        shuttleHeight.innerHTML = 0;

		landShuttle();
    });

    abortButton.addEventListener("click", event => {
        let confirmMissionAbort = confirm("Confirm that you want to abort the mission.");
        
        if(confirmMissionAbort){
            flightStat.innerHTML = "Mission aborted.";
   
           landShuttle();
        }
    });

    function landShuttle(){
		rocketEl.style.bottom = "0px";
		rocketEl.style.right = "calc(50% - 37px)";
		consoleBackground.style.backgroundColor = "green";
		
		lr = 37;
		shuttleHeight.innerHTML = 0;
		topbottom = 0;
	}    
});
