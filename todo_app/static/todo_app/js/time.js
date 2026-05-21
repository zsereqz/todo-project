
function time_now() {
    let days_num = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
    let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

    let now = new Date()
    let month = now.getMonth()
    let day = now.getDate()
    let weekday = now.getDay()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let second = now.getSeconds()


    let new_day = document.getElementById("current-date")
    new_day.textContent = days_num[weekday] + ', ' + day + ' ' + months[month];

    let hour_min = document.getElementById("time1")

    if(minutes < 10) {
        hour_min.innerHTML = hour + ':<span class="muted">0' + minutes + '</span>' ;
    } else {
        hour_min.innerHTML = hour + ':<span class="muted">' + minutes + '</span>' ;
    }
}

setInterval(time_now, 100);




