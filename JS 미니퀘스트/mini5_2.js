async function waitForMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {resolve("Hello, Async/Await!");}, 1000);
    });
}

await waitForMessage().then(console.log);