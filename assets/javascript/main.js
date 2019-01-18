$(document).ready(function () {
    // for some reason injection of the function into window is necessary, it won't run under <script>
    window.goTo = function (objectID) {
        document.querySelector(objectID).scrollIntoView({ behavior: 'smooth' });
    };
});