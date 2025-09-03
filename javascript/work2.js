function posting() {
   const selectElement = document.getElementById('siteselect');
 const selectedOption = selectElement.options[selectElement.selectedIndex];
 const optionId = selectedOption.id;

 let discordWebHookURL;
   
 if (optionId === "A") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412677510742937652/jqDPn5ikcZ03UEztX7kPRhCuUvrKppOhCCwjk8gJXzvwaSujg4ZvM5b0VfUuI8OqkCKd";
 }
 else if (optionId === "B") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412678875753873448/z_IuLTcmedIrqsev0Tokl_0FXo31oklcxvmptORK4NIsrIrIe9xBYU8T0kRzOe7losZa";
 }
 else if (optionId === "C") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684147234836512/_JF8rUVWMbZrxzr44Zt5fcJI4c2hqtqcH5I9T6cqBcmZufGzZh7Gt4id_YCes8_4K74e";
 }
 else if (optionId === "D") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684162539720776/h8DgBWFEBM82mi7dIv1-p-sZviHFlvE2ukPcPSkixZ0NyyY_7SUfnqUL05pGlTPLjgiw"
 }
 else if (optionId === "E") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684167988379718/E7-r9JaWKZFCSk0XB2wFe7qCuCSUDpy1b9FnR_IHRn3ib9sXy4ZHgkc7KCqwr-X2FHZw"
 }
  else if (optionId === "F") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684175428944003/bpX_iJAjeZrUvpxUN0wWIMF6ExU9iZjIm13t5VRBQE0aL7PQOuyJ70FIgUUlm-7WA5kK"
 }
  else if (optionId === "G") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684184102633532/gHqXveHM-IUTN0HCG5zveQmMQcNdMor5bYbjY-499oOOrfUONYKbKuDQqj_g0T6raBfI"
 }
  else if (optionId === "H") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684212393480324/Z0ydeOjdvJjdcoNIqH09cJJmItaYbcKiyd-P9IpenBlN-VoJA-tM6zddHYnXDFfvdc43"
 }
  else if (optionId === "I") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684219066482688/G2AFFAEaL3dEAxRiJeDQ9CJZpMbnYXkkwvJdxJiieGMBf_GRUQfQ07mRE29oy193J_Jx"
 }
  else if (optionId === "J") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684221977460747/OCFvmogXLB3Z5puKk3N6QrHmWE8Eiz7OKXBO-UhYWQ8EK3adva8spUATEEohGpHwns22"
 }
  else if (optionId === "K") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684227413151854/aLk9eLvOfesuS39DjXnpAeMchCIaNqxBvVvDhDVLsJ7we7oa0-3kJh3pk7oj9sqQOHj7"
 }
  else if (optionId === "L") {
  discordWebHookURL = "https://discord.com/api/webhooks/1412684231989268611/L7Jcfw_DBdug2NPFpcCAsepfuqSZRETE5GQNO2ElVQUA5IxxxYpRoeSb4mHwLLCYSCtU"
 }
 else{
  discordWebHookURL = "https://discord.com/api/webhooks/1389048593352228908/2XX9ryH4FtQx_Of4LRKPQGkfZtxO3LY2oqnvM0JiM4CDYQIE01oRnrPOGr1hJtCDvGJm";
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
