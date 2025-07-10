var slots = {
    "08:30-10:00": [],
    "10:05-11:35": [],
    "11:40-13:10": [],
    "13:15-14:45": [],
    "14:50-16:20": [],
    "16:25-17:55": [],
    "18:00-19:30": [],
}
window.addEventListener("load", async () => {
    // Create a new Date object
    const currentDate = new Date();
    var hour = currentDate.getHours()
    var minutes = currentDate.getMinutes()
    var day = currentDate.getDay()
    var time = `${hour}${minutes}`
    // console.log(time)
    const slotselect = document.getElementById("slots")
    const dayselect = document.getElementById("day")
    // console.log(day)
    if (day == 1) {
        dayselect.selectedIndex = 0
    }else if (day == 2) {
        dayselect.selectedIndex = 1
    }else if (day == 3) {
        dayselect.selectedIndex = 2
    } else if (day == 4) {
        dayselect.selectedIndex = 3
    } else if (day == 5) {
        dayselect.selectedIndex = 4
    } else if (day == 6) {
        dayselect.selectedIndex = 5
    }else {
        dayselect.selectedIndex = 6
    }

    if (time <= 1005) {
        // console.log('1')
        var selectedIndex = 0;
        slotselect.selectedIndex = selectedIndex;
    }else if (time > 1005 && time <= 1140) {
        // console.log('2')
        var selectedIndex = 1;
        slotselect.selectedIndex = selectedIndex;
    }else if (time > 1140 && time <= 1315) {
        // console.log('3')
        var selectedIndex = 2;
        slotselect.selectedIndex = selectedIndex;
    }else if (time > 1315 && time <= 1450) {
        // console.log('4')
        var selectedIndex = 3;
        slotselect.selectedIndex = selectedIndex;
    }else if (time > 1450 && time <= 1625) {
        // console.log('5')
        var selectedIndex = 4;
        slotselect.selectedIndex = selectedIndex;
    }else if (time > 1625 && time <= 1800) {
        // console.log('6')
        var selectedIndex = 5;
        slotselect.selectedIndex = selectedIndex;
    }else if (time > 1800) {
        // console.log('7')
        var selectedIndex = 6;
        slotselect.selectedIndex = selectedIndex;
    }
})