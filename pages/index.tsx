import Head from "next/head";
import styles from "styles/Home.module.css";

const Home = () => (
    <div className={styles.container}>
        <Head>
            <title>Triumph Mayflower Club</title>
            <meta charSet="utf-8" />
            <link href="favicon.ico" rel="shortcut icon" />
            <link href="favicon.png" rel="icon" />
        </Head>
        <main className={styles.main}>
            <p>Hello, Next.js world!</p>
        </main>
    </div>
);

export default Home;
