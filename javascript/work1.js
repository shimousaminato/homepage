function posting() {
  const discordWebHookURL = "https://discord.com/api/webhooks/1389048593352228908/2XX9ryH4FtQx_Of4LRKPQGkfZtxO3LY2oqnvM0JiM4CDYQIE01oRnrPOGr1hJtCDvGJm";

  const comment = document.getElementById('comment')
  const message = {
    "content": comment.value, // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  fetch()(discordWebHookURL, param);
}
