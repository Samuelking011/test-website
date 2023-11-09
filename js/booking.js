document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const infoContents = document.querySelectorAll('.info-content');
    const showButton = document.getElementById('show-info');
    const hideButton = document.getElementById('hide-info');
    const additionalInfo = document.getElementById('additional-info2');
    //let isVisible = false;

    radioButtons.forEach(function (radio, index) {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                infoContents.forEach(function (content, contentIndex) {
                    if (index === contentIndex) {
                        content.style.display = 'block';
                    } else {
                        content.style.display = 'none';
                    }
                });
            }
        });
    });

    /*showButton.addEventListener('click', function () {
        additionalInfo.style.display = 'block';
        for (let i = 0; i < labels.length; i++) {
            const newLabel = document.createElement('p');
            newLabel.textContent = labels[i];
            additionalInfo.appendChild(newLabel);
        }
    });*/

    showButton.addEventListener('click', function () {
        additionalInfo.style.display = 'block';
        const newLine = document.createElement('div');
        newLine.innerHTML = `
            <label>Flying From</label>
            <input type="text" class="form-control" placeholder="City or Airport">
            <label>Flying To</label>
            <input type="text" class="form-control" placeholder="City or Airport">
            <div class="input-grp2">
                <label>Departing</label>
                <input type="date" class="form-control select-date">
            </div>
        `;
        additionalInfo.appendChild(newLine);
    });

    hideButton.addEventListener('click', function () {
        const lines = additionalInfo.children;
        if (lines.length > 0) {
            lines[lines.length - 1].remove();
        }
    });
    
});


