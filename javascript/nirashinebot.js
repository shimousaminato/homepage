function posting() {
  const discordWebHookURL = "https://discord.com/api/webhooks/1389048593352228908/2XX9ryH4FtQx_Of4LRKPQGkfZtxO3LY2oqnvM0JiM4CDYQIE01oRnrPOGr1hJtCDvGJm";


  // fetch APIを使ってDiscordにメッセージを送信
  fetch(discordWebHookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: "ﾆﾗｼﾈｰ!",
      tts: false
    })
  })
  commentElement.value = '';
}
