function posting() {
  const discordWebHookURL = "https://discord.com/api/webhooks/1412613762569207899/_6I0Pg5O7EqgAP-oXJqw7diMphEo-CzHdlY7fxUQveTDm1kP7j1jjc1hIXVlZouW46zT";

  const messageContent = "ﾆﾗｼﾈｰ!";

  // fetch APIを使ってDiscordにメッセージを送信
  fetch(discordWebHookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: messageContent,
      tts: false
    })
  })
  commentElement.value = '';
}
