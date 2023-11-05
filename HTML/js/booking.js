document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const additionalInfo = document.getElementById('additional-info');

    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                additionalInfo.style.display = 'block';
            } else {
                additionalInfo.style.display = 'none';
            }
        });
    });
});
