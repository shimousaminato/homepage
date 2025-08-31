function posting() {
  const discordWebHookURL = "https://discord.com/api/webhooks/000000/XXXXX";

  const comment = document.getElementById('comment')
  const message = {
    "content": comment, // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}
