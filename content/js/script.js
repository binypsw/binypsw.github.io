function startVideo(qrReader, resultContainer) {

    docReady(function () {
        var lastResult, countResults = 0;
        function onScanSuccess(qrCodeMessage) {
            if (qrCodeMessage !== lastResult) {
                ++countResults;
                lastResult = qrCodeMessage;
                resultContainer.innerHTML
                    += `<div>[${countResults}] - ${qrCodeMessage}</div>`;
            }
        }

        var html5QrcodeScanner = new Html5QrcodeScanner(
            qrReader, { fps: 10, qrbox: 250 });
        html5QrcodeScanner.render(onScanSuccess);
    });
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete"
        || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

