# react-practice-for-work
## 衣類ECサイトの選択ボタンを実装など
### 問題の意図
#### ` Q1 ) React.jsの活用とinputとbuttonなどに対する理解点検問題`
#### ` Q2 ) クライアントとサーバ間の通信に対する理解と活用(JSON, API, PROXY, CORS)、そして非同期処理に対する基本能力の点検問題(async, Promise, setTimeout, fetch)`
#### ` Q3 ) 複雑で理解しにくいデータ加工の点検問題`

##
#### `Q1 ) React.jsを利用して、与えられた条件を画面に出力する問題です。(src/App.js)`
##### (1) 季節のCheckboxは多重選択可能にする。
##### (2) 季節のCheckboxは全体(ALL)チェックボックスをクリックすると季節全体が選択され、もう一度クリックすると全体選択が解除される。
##### (3) メッセージと生地に何も入力(操作)せず、下段のShowボタンを押したとき、alertウィンドウを表示する。
##### (4) Showボタンを押すと、選択した結果がjson形式でconsoleに出力する。
##### `PS. useCallback, memoなどを利用して最適化にも気を配りました。`

##
#### `Q2 ) サーバーからデータを取り寄せる問題です。(request.html)`
##### (1) GET https://jsonplaceholder.typicode.com/todos/1 をすると1番の掲示文を持ってきて、GET  https://jsonplaceholder.typicode.com/todos/99 をすると99番の掲示文を持ってきます。
##### (2) 1番から100番までのコメントを持ってきて、completedがtrueのものだけ選びたいです。
##### (3) サーバーに無理を与えないため、最初に10個を要請した後、2秒休んでもう一度その次に10個を要請して2秒休んで、こうして繰り返そうと思います。
##### (4) 結果は、配列形式でcompleted:trueである掲示文のIDを集めて[5, 17, 33, 97]こうやって、consoleに記録すればいいです。

##
#### `Q3 ) 複雑なロジックを理解しデータ加工する問題です。(logic.html)`
##### (1) testersには3人のテスターが、sizeChartsには3つの衣類が詰まっています。
##### (2) 単位にご注意ください。 PREDICTが付いた値はmm単位です。 他のはcmです。
##### (3) 3つの衣類の平均RISEを求めてください。(sizeCharts)
##### (4) (3)番で求めた値が25.5以上であれば，腰の高さ(PREDICT_WAIST_HEIGHT)を用い、25.5未満なら、へそレベルの腰の高さ(PREDICT_BELLY_HEIGHT)を使用してください。
##### (5) (4)番で求めた高さからそれぞれの衣類のOUTSEAMを外してください。 (ex)1番テスターの腰高1026 - 衣類SのOUTSEAM 960 = 66
##### (6) (5)番で求めた差が底からどれだけ衣類が上がっているかmm単位で表現したものです。 私たちは人ごとに4つの基準点を作ります。 [お尻の高さ, 膝の高さ, 足首の高さ, 底(0)]。 (ex)1番ユーザーの場合 [838, 438, 65, 0]が基準点になります。

#### `小さな質問項目の問題は後ほど追加するようにします。。。`


##
## `--- 0910 Commit ---` 
#### `0910 Checkbox function fixed, additional RadioButton can be used Without HardCoding, Alert function`
![0910_clothes_07](https://user-images.githubusercontent.com/49154920/92700257-92f7bd80-f389-11ea-807a-d34680280424.PNG)
![0910_clothes_08](https://user-images.githubusercontent.com/49154920/92700258-92f7bd80-f389-11ea-918b-87da037d9d29.PNG)
![0910_clothes_09](https://user-images.githubusercontent.com/49154920/92700254-91c69080-f389-11ea-87d2-d52e3ceb10cb.PNG)


## `--- 0909 Commit ---`
![0909_clothes_02](https://user-images.githubusercontent.com/49154920/92607627-4f507580-f2ef-11ea-901b-ffca44965992.PNG)
![0909_clothes_03](https://user-images.githubusercontent.com/49154920/92607630-5081a280-f2ef-11ea-80f1-9de1a64c50dc.PNG)
![0909_clothes_04](https://user-images.githubusercontent.com/49154920/92607631-5081a280-f2ef-11ea-83de-b2433e3ce98c.PNG)
![0909_clothes_05](https://user-images.githubusercontent.com/49154920/92607633-5081a280-f2ef-11ea-9d7e-2151954974cf.PNG)
![0909_clothes_06](https://user-images.githubusercontent.com/49154920/92607635-511a3900-f2ef-11ea-9e0d-13ee215dc758.PNG)
