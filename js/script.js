
function menu() {
    var x = document.getElementById('nav');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    x.classList.add("fixed");
}
