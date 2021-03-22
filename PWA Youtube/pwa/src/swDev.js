export const swDev = () => {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl)
        .then((response) => { console.warn(`Response: ${response}`) })
        .catch((error) => { console.error(`Error: ${error}`) })
}
