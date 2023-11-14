function toggleHam(x) {
    x.classList.toggle("change");

    let mymenu = document.getElementById('mymenu');
    if (mymenu.className === 'menu') {
        mymenu.className += ' menu-active'
    } else {
        mymenu.className = 'menu';
    }
}