const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const targetTimeString = urlParams.get('time');
const endMessage = urlParams.get("message");
const removeMessageOption = Boolean(urlParams.get("remove"));

const [timePart, datePart] = targetTimeString.split('@');
const [hours, minutes, seconds] = timePart.split(':').map(Number);

const [year, month, day] = datePart.split('/').map(Number);

const targetDate = new Date(year, month - 1, day, hours, minutes, seconds);

const time = document.querySelector(".time"),
eta = document.querySelector(".eta")

let countDownInterval;

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const displayTimeParts = [];

        if (days > 0) {
            displayTimeParts.push(`${days}일`);
        }

        const displayHours = hours % 24;

        if (displayHours > 0) {
            displayTimeParts.push(`${displayHours}시간`);
        }

        if (minutes % 60 > 0) {
            displayTimeParts.push(`${minutes % 60}분`);
        }
        
        displayTimeParts.push(`${seconds % 60}초`);

        const displayTime = displayTimeParts.join(' ');

        time.innerText = displayTime;
    } else {
        eta.remove()

        if (removeMessageOption) {
            time.remove()
            clearInterval(countDownInterval)
            return;
        }

        time.innerText = `${endMessage}`;

    }
}

if (targetTimeString) {
    console.log(targetTimeString);
    
    updateCountdown();

    countDownInterval = setInterval(updateCountdown, 1000);
}
