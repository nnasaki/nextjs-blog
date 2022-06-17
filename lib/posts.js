import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // posts ディレクトリのファイル一覧を取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ".md" 拡張子を消してidとして読み込む
    const id = fileName.replace(/\.md$/, '');

    // ファイルを読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter でメタデータを取得
    const matterResult = matter(fileContents);

    // IDとメタデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  // 投稿データを日付順でソートする
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}