import defaultAuthor from "data/defaults/DefaultAuthor";
import Head from "next/head";
import Page from "model/page/Page";

import { authorToString } from "model/identity/Author";

interface DefaultLayoutProps { page: Page; }

const DefaultLayout = ({ page: { content, metadata } }: DefaultLayoutProps) => (
    <>
        <Head>
            <title>{metadata.title ? `${metadata.title} · ` : ""}Triumph Mayflower Club</title>
            <meta name="description" content="The Triumph Mayflower Club exists to keep these wonderful and unique vehicles on the road and to provide a small part of the motoring heritage for the future." />
            <link href="favicon.ico" rel="shortcut icon" />
            <link href="favicon.png" rel="icon" />
        </Head>
        <main>
            <article>
                <h1>{metadata.title}</h1>
                <p><b>Author:</b> {authorToString(metadata.author ?? defaultAuthor)}</p>
                <p><b>Temp:</b> {content.temp}</p>
            </article>
        </main>
    </>
);

export default DefaultLayout;
