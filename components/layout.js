import styles from './layout.module.css'; // cssをインポート

// divにcssを適用する
export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
}
