function getSiteInfo(optionId) {
  let discordWebHookURL;
  let sitename;
  let postcolor;

  switch (optionId) {
    case "A":
      discordWebHookURL = "https://discord.com/api/webhooks/1412677510742937652/jqDPn5ikcZ03UEztX7kPRhCuUvrKppOhCCwjk8gJXzvwaSujg4ZvM5b0VfUuI8OqkCKd";
      sitename = "空想鉄道";
      postcolor = 28864;
      break;
    case "B":
      discordWebHookURL = "https://discord.com/api/webhooks/1412678875753873448/z_IuLTcmedIrqsev0Tokl_0FXo31oklcxvmptORK4NIsrIrIe9xBYU8T0kRzOe7losZa";
      sitename = "空想道路";
      postcolor = 39246;
      break;
    case "C":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684147234836512/_JF8rUVWMbZrxzr44Zt5fcJI4c2hqtqcH5I9T6cqBcmZufGzZh7Gt4id_YCes8_4K74e";
      sitename = "空想地図";
      postcolor = 16750848;
      break;
    case "D":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684162539720776/h8DgBWFEBM82mi7dIv1-p-sZviHFlvE2ukPcPSkixZ0NyyY_7SUfnqUL05pGlTPLjgiw";
      sitename = "空想路線図";
      postcolor = 11803652;
      break;
    case "E":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684167988379718/E7-r9JaWKZFCSk0XB2wFe7qCuCSUDpy1b9FnR_IHRn3ib9sXy4ZHgkc7KCqwr-X2FHZw";
      sitename = "空想図画";
      postcolor = 8392320;
      break;
    case "F":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684175428944003/bpX_iJAjeZrUvpxUN0wWIMF6ExU9iZjIm13t5VRBQE0aL7PQOuyJ70FIgUUlm-7WA5kK";
      sitename = "空想文章";
      postcolor = 1127185;
      break;
    case "G":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684184102633532/gHqXveHM-IUTN0HCG5zveQmMQcNdMor5bYbjY-499oOOrfUONYKbKuDQqj_g0T6raBfI";
      sitename = "時刻表くらぶ";
      postcolor = 6710886;
      break;
    case "H":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684212393480324/Z0ydeOjdvJjdcoNIqH09cJJmItaYbcKiyd-P9IpenBlN-VoJA-tM6zddHYnXDFfvdc43";
      sitename = "点描くらぶ";
      postcolor = 32896;
      break;
    case "I":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684219066482688/G2AFFAEaL3dEAxRiJeDQ9CJZpMbnYXkkwvJdxJiieGMBf_GRUQfQ07mRE29oy193J_Jx";
      sitename = "似顔絵くらぶ";
      postcolor = 6724095;
      break;
    case "J":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684221977460747/OCFvmogXLB3Z5puKk3N6QrHmWE8Eiz7OKXBO-UhYWQ8EK3adva8spUATEEohGpHwns22";
      sitename = "問題くらぶ";
      postcolor = 3754411;
      break;
    case "K":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684227413151854/aLk9eLvOfesuS39DjXnpAeMchCIaNqxBvVvDhDVLsJ7we7oa0-3kJh3pk7oj9sqQOHj7";
      sitename = "ふぁん";
      postcolor = 16739328;
      break;
    case "L":
      discordWebHookURL = "https://discord.com/api/webhooks/1412684231989268611/L7Jcfw_DBdug2NPFpcCAsepfuqSZRETE5GQNO2ElVQUA5IxxxYpRoeSb4mHwLLCYSCtU";
      sitename = "地図ぬりえ";
      postcolor = 6003669;
      break;
    case "M":
      discordWebHookURL = "https://discord.com/api/webhooks/1412807032813129788/yIMID4KPyxLaL5VoW1XtRjNoCpAwgTwPy2vsUsTlfLtygFpzFq13d_EOwvyxzYpczlTM";
      sitename = "私的空間";
      postcolor = 16777215;
      break;
    case "N":
      discordWebHookURL = "https://discord.com/api/webhooks/1412807160479482007/djum3UWbzPE0i_X8k693hsBckMKFMIHK1YdH2XAZDzzJ_IXK2HAzRI1ut0hG-2A7g_rO";
      sitename = "空想別館";
      postcolor = 2043732;
      break;
    case "O":
      discordWebHookURL = "https://discord.com/api/webhooks/1413155797998764132/PEJOvur6VY1GI6YPku6h2dbHYQyGFCphPzhX-22o0i883X3K8w7qpX4DoP0b3-qFluFv";
      sitename = "空想研究室";
      postcolor = 0;
      break;
    case "Z":
      discordWebHookURL = "https://discord.com/api/webhooks/1412837427134992492/lTVX8Dn2b1j_XzHj22q5n4oEcI5mAGH3_bdOn9gO_okWFyuS5aq1rd7vD-d3nbrNgndF";
      sitename = "部活の";
      postcolor = 0; // デフォルトの色を設定
      break;
    default:
      // デフォルト値
      discordWebHookURL = "https://discord.com/api/webhooks/1412837427134992492/lTVX8Dn2b1j_XzHj22q5n4oEcI5mAGH3_bdOn9gO_okWFyuS5aq1rd7vD-d3nbrNgndF";
      sitename = "";
      postcolor = 0;
      break;
  }
  return { discordWebHookURL, sitename, postcolor };
}

function writing() {
  const selectElement = document.getElementById('siteselect');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const optionId = selectedOption.id;

  const siteInfo = getSiteInfo(optionId);
  const sitename = siteInfo.sitename;

  const textarea = document.getElementById('comment');
  const pasteButton = document.getElementById('pasteButton');

  pasteButton.addEventListener('click', async () => {
            try {
  const text = await navigator.clipboard.readText();              
  Textarea.value = text;
            }
}
   
function posting() {
  const selectElement = document.getElementById('siteselect');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const optionId = selectedOption.id;

  const siteInfo = getSiteInfo(optionId);
  const discordWebHookURL = siteInfo.discordWebHookURL;
  const postcolor = siteInfo.postcolor;
  
  const commentElement = document.getElementById('comment');
  const messageContent = commentElement.value;

  fetch(discordWebHookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: "",
      embeds: [
        {
          description: messageContent,
          color: postcolor
        }
      ]
    })
  })
  .then(response => {
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
  
  commentElement.value = '';
}
