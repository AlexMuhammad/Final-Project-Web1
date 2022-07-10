let timeleft = 30;
let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        $('#autoclick')[0].click(function(){});
    } else {
        document.getElementById('countdown').innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000)