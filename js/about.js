document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById('show-info');
    const hideButton = document.getElementById('hide-info');
    const additionalInfo = document.getElementById('additional-info');
    const paragraphs = Array.from(additionalInfo.getElementsByTagName('p'));
    let appendedParagraphs = [];

    showButton.addEventListener('click', function () {
        additionalInfo.style.display = 'block';
        for (let i = 0; i < paragraphs.length; i++) {
            const newP = document.createElement('p');
            newP.textContent = paragraphs[i].textContent;
            additionalInfo.appendChild(newP);
            appendedParagraphs.push(newP);
        }
    });

    hideButton.addEventListener('click', function () {
        for (let i = 0; i < 3; i++) {
            if (appendedParagraphs.length > 0) {
                const removedParagraph = appendedParagraphs.pop();
                additionalInfo.removeChild(removedParagraph);
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById('show-info');
    const hideButton = document.getElementById('hide-info');
    const additionalInfo = document.getElementById('additional-info');
    const labels = [
        document.getElementById('label1').textContent,
        document.getElementById('label2').textContent,
        document.getElementById('label3').textContent
    ];

    let pIndex = 0;

    showButton.addEventListener('click', function () {
        if (pIndex < labels.length) {
            const newLabel = document.createElement('label');
            newLabel.textContent = labels[pIndex];
            additionalInfo.appendChild(newLabel);
            pIndex++;
        }
    });

    hideButton.addEventListener('click', function () {
        if (pIndex > 0) {
            pIndex--;
            additionalInfo.removeChild(additionalInfo.lastChild);
        }
    });
});
