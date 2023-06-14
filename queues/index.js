window.addEventListener('load', async () => {
  console.log(await (await fetch('https://war-service-live.foxholeservices.com/external/shardStatus')).json());
  (await (await fetch('https://war-service-live.foxholeservices.com/external/shardStatus')).json()).serverConnectionInfoList.forEach((hex) => {
    const newHexElement = document.createElement('div');
    newHexElement.innerHTML = `Map: ${hex.name}
        <br>
        Warden Queue: ${hex.wardenQueueSize}
        <br>
        Colonial Queue: ${hex.colonialQueueSize}
        <br>
        <br>
        </div>`;
    document.querySelector('#queueList').appendChild(newHexElement);
  });
});
