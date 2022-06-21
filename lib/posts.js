import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 投稿したデータが格納されているディレクトリのパス
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

// すべての投稿データのID一覧を取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // 次のような配列で返すことを想定
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// 投稿データを取得する
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter を使って、投稿したデータからメタデータを読み込む
  const matterResult = matter(fileContents);

  // 読み取ったデータとIDを繋げて返却
  return {
    id,
    ...matterResult.data,
  };
}
