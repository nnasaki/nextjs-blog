import Link from 'next/link'; // Linkコンポーネントインポートする
import Head from 'next/head'; // Headコンポーネントをインポート

// ファイル呼び出し時のエントリーポイント
export default function FirstPost() {
  return (
    // HTMLの範囲を示す何らかのタグが必要。
    // 今回は空タグを使用しているが<div>等でもよい
    <>
      {/* タイトルを追加 */}
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        {/* リンク先をhrefで指定する */}
        <Link href="/">
          {/* 表示したい文字を<a>タグで囲う */}
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
