function showTime(){

    const today = new Date();
    const time = today.toLocaleTimeString();
    const options = {
        weekday : "short",
        month: "long",
        day: "numeric"
    };
    const day = today.toLocaleDateString(undefined, options);
    document.getElementById("time").innerText = time;
    document.getElementById("day").innerText = day;
    setTimeout(showTime,1000);
}
showTime();