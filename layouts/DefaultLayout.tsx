import CustomPageBodyEnumeration from "data/database/pages/sections/CustomPageBodyEnumeration";
import CustomPageSidebarEnumeration from "data/database/pages/sections/CustomPageSidebarEnumeration";
import Head from "next/head";
import HomePageBody from "components/sections/home/HomePageBody";
import HomePageSidebar from "components/sections/home/HomePageSidebar";
import Page from "model/pages/Page";
import RichText from "model/text/RichText";
import RenderedRichText from "components/text/RenderedRichText";
import ImagesTable from "data/database/tables/ImagesTable";

interface DefaultLayoutProps { page: Page; }

export default function DefaultLayout({ page: { content: { body, sidebar }, metadata: { title } } }: DefaultLayoutProps) {
    const head = (
        <Head>
            <title>{`${title !== "Home" ? `${title} · ` : ""}Triumph Mayflower Club`}</title>
            <meta name="description" content="The Triumph Mayflower Club exists to keep these wonderful and unique vehicles on the road, and to provide a small part of the motoring heritage for the future." />
            <link href="favicon.ico" rel="shortcut icon" />
            <link href="favicon.png" rel="icon" />
        </Head>
    );

    const article = (
        <article>
            {(() => {
                if (body.type === "rich text") {
                    const content = body.content as RichText;
                    return <RenderedRichText data={content} />;
                } else {
                    const content = body.content as CustomPageBodyEnumeration;

                    switch (content) {
                        case CustomPageBodyEnumeration.Home: return <HomePageBody />;
                        default: throw new Error("Unhandled custom page body encountered.");
                    }
                }
            })()}
        </article>
    );

    const aside = sidebar === undefined ? null : (
        <aside>
            {(() => {
                if (sidebar.type === "rich text") {
                    const content = sidebar.content as RichText;
                    return <RenderedRichText data={content} />;
                } else {
                    const content = sidebar.content as CustomPageSidebarEnumeration;

                    switch (content) {
                        case CustomPageSidebarEnumeration.Home: return <HomePageSidebar />;
                        default: throw new Error("Unhandled custom page sidebar encountered.");
                    }
                }
            })()}
        </aside>
    );

    return (
        <>
            {head}
            <main>
                {article}
                {aside}
            </main>
        </>
    );
}
