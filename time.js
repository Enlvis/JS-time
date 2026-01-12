function showTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    document.getElementById("time").textContent = `${hours}:${minutes}`;
}

showTime();
setInterval(showTime, 60000);
