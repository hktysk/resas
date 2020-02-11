import { Selector } from 'testcafe';

fixture('トップページのテスト')
  .page('http://localhost:8080/');

test('ページのタイトルは正しいか', async (t) => {
  await t.expect(Selector('title').innerText).eql('都道府県別の総人口推移グラフ');
});

test('都道府県のチェックボックスをクリックし, グラフが表示されているか', async (t) => {
  await t
    .wait(5000)
    .click('.Prefectures__checkbox')
    .wait(10000)
    .expect(Selector('.highcharts-legend-item').exists)
    .ok();
});
