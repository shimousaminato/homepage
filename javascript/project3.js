from bs4 import BeautifulSoup
import requests

function search() {
# 取得したいURL
url = "https://ku-tetsu.net/"

# ウェブページの内容を取得
response = requests.get(url)
html_content = response.content

# BeautifulSoupオブジェクトを作成
soup = BeautifulSoup(html_content, 'html.parser')

# idが「dIndexListDataSeq0」のdiv要素を検索
target_div = soup.find('div', id='dIndexListDataSeq0')

console.log(target_div)
}
