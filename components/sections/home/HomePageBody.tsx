import HomePageBodySections from "data/database/pages/home/HomePageBodySections";
import Link from "next/link";

const HomePageBody = () => (
    <>
        <h1>Home</h1>
        <p>Welcome to the online home of the Triumph Mayflower Club! Click on a section link below to get started…</p>
        {HomePageBodySections.map(({ body, title }) => (
            <section key={title}>
                <h2>
                    <Link href={`/${title.toLowerCase()}`}>
                        {title}
                    </Link>
                </h2>
                <p>{body}</p>
            </section>
        ))}
    </>
);

export default HomePageBody;
