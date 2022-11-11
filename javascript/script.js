let help = document.getElementById('help');
let help_btn = document.getElementById('help_btn');
let close = document.getElementById('close');

function help_btns() {
    if (help.style.visibility !== 'hidden') {
        help.style.visibility = 'hidden';
    } else {
        help.style.visibility = 'visible';
    }
}

help_btn.addEventListener("click", help_btns);

close.onclick = function () {
    help.style.visibility = 'hidden';
}