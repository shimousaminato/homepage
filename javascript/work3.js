function getSiteInfo(optionId) {
  let discordWebHookURL;
  let sitename;
  let postcolor;
  let imageurl;

  switch (optionId) {
    case "A":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想鉄道";
      postcolor = 28864;
      imageurl = "https://top.chi-zu.net/railway.png";
      break;
    case "B":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想道路";
      postcolor = 39246;
      imageurl = "https://top.chi-zu.net/road.png";
      break;
    case "C":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想地図";
      postcolor = 16750848;
      imageurl = "https://top.chi-zu.net/any.png";
      break;
    case "D":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想路線図";
      postcolor = 11803652;
      imageurl = "https://top.chi-zu.net/chart.png";
      break;
    case "E":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想図画";
      postcolor = 8392320;
      imageurl = "https://top.chi-zu.net/pict.png";
      break;
    case "F":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想文章";
      postcolor = 1127185;
      imageurl = "https://top.chi-zu.net/memo.png";
      break;
    case "G":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "時刻表くらぶ";
      postcolor = 6710886;
      imageurl = "https://top.chi-zu.net/timetable.png";
      break;
    case "H":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "点描くらぶ";
      postcolor = 32896;
      imageurl = "https://top.chi-zu.net/point.png";
      break;
    case "I":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "似顔絵くらぶ";
      postcolor = 6724095;
      imageurl = "https://top.chi-zu.net/nigaoe.png";
      break;
    case "J":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "問題くらぶ";
      postcolor = 3754411;
      imageurl = "https://top.chi-zu.net/quiz.png";
      break;
    case "K":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "道州制ふぁん";
      postcolor = 16739328;
      imageurl = "https://top.chi-zu.net/doshu.png";
      break;
    case "L":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "地図ぬりえ";
      postcolor = 6003669;
      imageurl = "https://top.chi-zu.net/nurie.png";
      break;
    case "M":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "私的空間";
      postcolor = 16777215;
      imageurl = "https://top.chi-zu.net/personal.png";
      break;
    case "N":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想別館";
      postcolor = 2043732;
      imageurl = "https://top.chi-zu.net/annex.png";
      break;
    case "O":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "空想研究室";
      postcolor = 0;
      imageurl = "https://top.chi-zu.net/logo.png";
      break;
    case "P":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "大阪都ふぁん";
      postcolor = 4811233;
      imageurl = "https://top.chi-zu.net/oosakato.png";
      break;
    case "Q":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "東京都ふぁん";
      postcolor = 16711680;
      imageurl = "https://top.chi-zu.net/tokyoto.png";
      break;
    case "R":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "律令国ふぁん";
      postcolor = 8666124;
      imageurl = "https://top.chi-zu.net/ritsuryo.png";
      break;
    case "S":
      discordWebHookURL = "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_";
      sitename = "六大陸ふぁん";
      postcolor = 5538357;
      imageurl = "https://top.chi-zu.net/rokutairiku.png";
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
  return { sitename, postcolor };
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
