window.onload = () => {

    const launchUnixTimestamp = (Date.now()/1000)+7*24*60*60;

    new FlipDown(launchUnixTimestamp, {
        theme: "darkNred",
        headings: ['', '', '', '']
    }).start();
}