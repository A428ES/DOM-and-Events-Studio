window.addEventListener("DOMContentLoaded", function(event){
    let takeOffButton = document.getElementById("takeoff");
    let flightStat = document.getElementById("flightStatus");
    let consoleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");

    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let topButton= document.getElementById("top");
    let bottomButton = document.getElementById("bottom");

    const moveRocket = (direction = 'none') => {
        let rocketEl = document.getElementById("rocket");

        if(direction === 'none'){
            rocketEl.style.top = "240px";
            rocketEl.style.right = "0px";
        } else {
    
        let xPosition = rocketEl.style.top.replace('px', '');
        let yPosition = rocketEl.style.right.replace('px', '');
        let finalCord = '';
    
        if(direction === 'left'){
            finalCord = Number(yPosition) - 10;
        } else if(direction === 'right'){
            finalCord = Number(yPosition) + 10;
        } else if(direction === 'top'){
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            finalCord = Number(xPosition) - 10;
        } else if(direction === 'bottom'){
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
            finalCord = Number(xPosition) + 10;
        }
    
        if(Math.abs(finalCord) <= 240){
            if(direction === "left" || direction === "right"){
                rocketEl.style.right = finalCord + "px";
            } else {
                if(finalCord >= 0){
                    rocketEl.style.top = finalCord + "px";
                }
            }
        }
    
            
        console.log(finalCord);
        }
    }

    leftButton.addEventListener("click", event => moveRocket('left'));
    rightButton.addEventListener("click", event => moveRocket('right'));
    topButton.addEventListener("click", event => moveRocket('top'));
    bottomButton.addEventListener("click", event => moveRocket('bottom'));

    takeOffButton.addEventListener("click", event => {    
        let confirmLiftOff = confirm("Confirm that the shuttle is ready for takeoff.")

        if(confirmLiftOff){
            flightStat.innerHTML = "Shuttle in flight.";
            consoleBackground.style = "background-color: blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStat.innerHTML = "The shuttle has landed.";
        shuttleHeight.innerHTML = 0;
        consoleBackground.style = "background-color: green";

        moveRocket();
    });

    abortButton.addEventListener("click", event => {
        let confirmMissionAbort = confirm("Confirm that you want to abort the mission.");
        
        if(confirmMissionAbort){
            flightStat.innerHTML = "Mission aborted.";
            consoleBackground.style = "background-color: green";
            shuttleHeight = 0;

            moveRocket();
        }
    });

    

    
});