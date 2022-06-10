import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'; // Layoutコンポーネントをインポート

export default function FirstPost() {
  return (
    // レイアウトコンポーネントに変更
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
