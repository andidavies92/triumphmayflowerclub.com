import Head from "next/head";
import { FunctionComponent } from "react";

interface DefaultLayoutProps { title?: string; }

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children, title }) => (
    <>
        <Head>
            <title>{title ? `${title} · ` : ""}Triumph Mayflower Club</title>
            <meta charSet="utf-8" />
            <link href="favicon.ico" rel="shortcut icon" />
            <link href="favicon.png" rel="icon" />
        </Head>
        {title && <h1>{title}</h1>}
        <main>
            {children}
        </main>
    </>
);

export default DefaultLayout;
