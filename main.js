let display = document.querySelector('.display');
let btnDisabled = document.querySelector('.start')
let minute = 0
let seconds = 0
let hour = 0

let interval
function start() {
    
        interval = setInterval( chronometer, 1000 )
        console.log(chronometer)

        btnDisabled.disabled = true
    
}


function pause() {
    clearInterval(interval)
    btnDisabled.disabled = false
}

function stop() {
    clearInterval(interval)
    seconds = 0
    minute = 0
    hour = 0
    display.innerHTML = '00:00:00'
    btnDisabled.disabled = false
}


function chronometer() {
    seconds ++
    if (seconds > 60) {
        minute ++
        seconds = 0
        if (minute > 60) {
            hour ++
            minute = 0
        }
    }
    console.log(seconds)
    display.innerHTML = decimal(hour) + ":" + decimal(minute) + ":" + decimal(seconds)
}

function decimal(zero) {
    if (zero < 10){
        return ('0' + zero)
    }else {
        return zero
    }
}


