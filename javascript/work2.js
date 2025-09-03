function posting() {
   const selectElement = document.getElementById('siteselect');
 const selectedOption = selectElement.options[selectElement.selectedIndex];
 const optionId = selectedOption.id;
 
 if optionId = A{
  let discordWebHookURL = "https://discord.com/api/webhooks/1412677510742937652/jqDPn5ikcZ03UEztX7kPRhCuUvrKppOhCCwjk8gJXzvwaSujg4ZvM5b0VfUuI8OqkCKd";
 }
 elif optionId = B{
  let discordWebHookURL = "https://discord.com/api/webhooks/1412678875753873448/z_IuLTcmedIrqsev0Tokl_0FXo31oklcxvmptORK4NIsrIrIe9xBYU8T0kRzOe7losZa";
 }
 else{
  let discordWebHookURL = "https://discord.com/api/webhooks/1389048593352228908/2XX9ryH4FtQx_Of4LRKPQGkfZtxO3LY2oqnvM0JiM4CDYQIE01oRnrPOGr1hJtCDvGJm";
 }
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
