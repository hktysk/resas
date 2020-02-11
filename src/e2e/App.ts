import { Selector } from 'testcafe';

fixture('トップページのテスト')
  .page('http://localhost:8080/');

test('ページのタイトルは正しいか', async (t) => {
  await t.expect(Selector('title').innerText).eql('都道府県別の総人口推移グラフ');
});
