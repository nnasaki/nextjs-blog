import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

// 投稿データのレイアウトを取得
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

// 投稿データのID一覧を取得
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// 投稿データを取得
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
