
function lovezwtSitetime() {
    window.setTimeout("lovezwtSitetime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth()
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    // 时间设
    var t1 = Date.UTC(2020, 09, 21, 15, 00, 00);
    var t2 = Date.UTC(todayYear, todayMonth + 1, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1
    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) - diffYears * 365)
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
        diffMinutes * minutes) / seconds)

    if (diffYears < 0) {
        diffDays = 365 - diffDays;
        document.getElementById("lovezwtSitetime").innerHTML = "我们相恋了0年" + diffDays + "天" +
            diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦"
    } else {
        document.getElementById("lovezwtSitetime").innerHTML = "我们相恋了" + diffYears + "年" + diffDays + "天" +
            diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦"
    }

}
lovezwtSitetime()
