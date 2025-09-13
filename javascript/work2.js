<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>空想ウェブアプリ</title>
    <style>
      body {
        font-family: sans-serif;
        padding: 20px;
        background-color: #f0f2f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        box-sizing: border-box;
      }
      a {
        margin-bottom: 20px;
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      select, textarea, button {
        border-radius: 8px;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
      select {
        width: 100%;
        height: 50px;
      }
      textarea {
        width: 100%;
        height: 300px;
        resize: vertical;
      }
      button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      button:hover {
        background-color: #0056b3;
      }
      #botan {
        width: 100%;
        height: 50px;
      }
      .footer-button {
        width: 100px;
        height: 50px;
      }
    </style>
  </head>
  <body>
    <a href="/homepage/javascript/list.html">リストへ戻る</a>
    <select id="siteselect">
      <option id="A" selected>空想鉄道</option>
      <option id="B">空想道路</option>
      <option id="C">空想地図</option>
      <option id="D">空想路線図</option>
      <option id="N">空想別館</option>
      <option id="E">空想図画</option>
      <option id="F">空想文章</option>
      <option id="G">時刻表くらぶ</option>
      <option id="H">点描くらぶ</option>
      <option id="I">似顔絵くらぶ</option>
      <option id="J">問題くらぶ</option>
      <option id="K">道州制ふぁん</option>
      <option id="P">大阪都ふぁん</option>
      <option id="Q">東京都ふぁん</option>
      <option id="R">律令国ふぁん</option>
      <option id="S">六大陸ふぁん</option>
      <option id="L">地図ぬりえ</option>
      <option id="M">私的空間</option>
      <option id="O">空想研究室</option>
      <option id="Z">部活の</option>
    </select>
    <button id="botan" onclick="mentioned()">メンションを挿入</button>
    <textarea id="comment" placeholder="ここにコメントを入力してください"></textarea>
    <button onclick="posting()" class="footer-button">送信</button>
    
    <script>
      const siteData = {
        "A": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413512629850341527>" },
        "B": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413513054376955954>" },
        "C": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413513231645020301>" },
        "D": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413513351333548124>" },
        "E": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413513421306986506>" },
        "F": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413513508867412019>" },
        "G": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413514295379099658>" },
        "H": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413514381219729499>" },
        "I": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515116950982666>" },
        "J": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515234898870302>" },
        "K": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515381938720839>" },
        "L": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413513822597284011>" },
        "M": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "私的空間" },
        "N": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "空想別館" },
        "O": { webhook: "https://discord.com/api/webhooks/1413155797998764132/PEJOvur6VY1GI6YPku6h2dbHYQyGFCphPzhX-22o0i883X3K8w7qpX4DoP0b3-qFluFv", name: "空想研究室" },
        "P": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515381938720839>" },
        "Q": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515769160925255>" },
        "R": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515847301070889>" },
        "S": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413515914485436610>" },
        "Z": { webhook: "https://discord.com/api/webhooks/1413517661106864219/wuOYSUYqji1ztAW6Cgn5mnvBJdhTYBZtP9eXp6dSffZVCmN96sZO2OYRBbLRfDlWmRm_", name: "<@1413833198022037566>" },
      };

      function mentioned() {
        const selectElement = document.getElementById('siteselect');
        const optionId = selectElement.options[selectElement.selectedIndex].id;
        
        if (siteData[optionId] && siteData[optionId].name) {
          const sitename = siteData[optionId].name;
          const commentElement = document.getElementById('comment');
          commentElement.value += sitename + ' ';
        }
      }

      function posting() {
        const selectElement = document.getElementById('siteselect');
        const optionId = selectElement.options[selectElement.selectedIndex].id;
        
        if (siteData[optionId] && siteData[optionId].webhook) {
          const discordWebHookURL = siteData[optionId].webhook;
          const commentElement = document.getElementById('comment');
          const messageContent = commentElement.value;

          if (messageContent) {
            fetch(discordWebHookURL, {
              "method": 'POST',
              "headers": {
                'Content-Type': 'application/json',
              },
              "body": JSON.stringify({
                "content": messageContent,
              }),
            })
            .then(response => {
              if (response.ok) {
                commentElement.value = '';
              }
            });
          }
        }
      }
    </script>
  </body>
</html>

    }
}
