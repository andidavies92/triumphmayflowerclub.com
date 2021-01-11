import Head from "next/head";
import { FunctionComponent } from "react";

interface DefaultLayoutProps { title?: string; }

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children, title }) => (
    <>
        <Head>
            <title>{title ? `${title} · ` : ""}Triumph Mayflower Club</title>
            <link href="favicon.ico" rel="shortcut icon" />
            <link href="favicon.png" rel="icon" />
        </Head>
        <main>{children}</main>
    </>
);

export default DefaultLayout;
