document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  alert('右クリックは禁止されています。');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'F12' || event.keyCode === 123) {
    event.preventDefault();
    alert('F12は禁止されています。');
  }
});
function posting() {
  const discordWebHookURL = "https://discord.com/api/webhooks/1412613762569207899/_6I0Pg5O7EqgAP-oXJqw7diMphEo-CzHdlY7fxUQveTDm1kP7j1jjc1hIXVlZouW46zT";

  const commentElement = document.getElementById('comment');
  const messageContent = commentElement.value; // テキストエリアの内容を取得

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
