$(document).ready(() => {
    $(function () {
        $(document).on('click', ".humburger-left", function () {
            $(".left-aside-bar").toggleClass("slide-right");

        });
        $(document).on('click', ".humburger-right", function () {
            $(".responsive-bar").toggleClass("slide-left");
        });
    })
})
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropdown-btn").classList.toggle("show-sign");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
