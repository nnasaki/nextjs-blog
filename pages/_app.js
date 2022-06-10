import '../styles/global.css'; // グローバルCSSを読み込む

// Custom App作成時の決まり文句
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
