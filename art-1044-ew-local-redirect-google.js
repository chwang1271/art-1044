const targetWindow = window.open('https://ew-local-dev.a-ue1.ew.com:8443/sweepstakes', '_blank');
let interval = setInterval(() => {
    if (targetWindow.closed) {
        clearInterval(interval);
        return;
    }
    const iframe = targetWindow.frames[1];

    if (iframe && iframe.location.origin === window.location.origin) {
        const script = iframe.document.createElement('script');
        script.textContent = `window.parent.postMessage({redirectExternalURL:'https://www.google.com'},'*')`;
        iframe.document.body.appendChild(script);
        clearInterval(interval);
    }
}, 100);