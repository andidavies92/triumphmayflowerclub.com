import Link from "next/link";

const HomePageBody = () => (
    <>
        <h1>Home</h1>
        <p>Welcome to the online home of the Triumph Mayflower Club! Click on a section link below to get started…</p>
        <section>
            <h2>
                <Link href="/about">
                    About
                </Link>
            </h2>
            <p>Want to know more about the club, the car or the company that started it all, the Triumph Motor Company? This is the place for it! Includes details about the club’s reach around the world and honour boards of committee members past and present.</p>
        </section>
        <section>
            <h2>
                <Link href="/history">
                    History
                </Link>
            </h2>
            <p>Articles compiled, researched and written by our website editor that delve further into the history of the club, car and company. We’re always keen to know more and to be able to publish that information here for all to see, so please get in touch if you have any such information.</p>
        </section>
        <section>
            <h2>
                <Link href="/news">
                    News
                </Link>
            </h2>
            <p>The latest goings-on from the club, including announcements, event details, etc. This will be the most up-to-date source of information for club members so be sure to check back regularly.</p>
        </section>
        <section>
            <h2>
                <Link href="/events">
                    Events
                </Link>
            </h2>
            <p>Everything that’s happening in the world of Mayflower! We post calendars here of upcoming events (including official club rallies), reports of rallies gone by and even member-submitted accounts of events they’ve attended around the world.</p>
        </section>
        <section>
            <h2>
                <Link href="/photos">
                    Photos
                </Link>
            </h2>
            <p>What better way to immortalise our beautiful cars than with a collection of snaps? This section is in its infancy but we intend for it to grow with your help! Looking for submissions of any kind: pre-build, during build, post-build cars, events you’ve attended and anything else you think is worthy of showing the world.</p>
        </section>
        <section>
            <h2>
                <Link href="/documents">
                    Documents
                </Link>
            </h2>
            <p>Our online repository of digitised technical documentation, archived Flower Power magazine issues, technical articles, AGM minutes and so on.</p>
        </section>
        <section>
            <h2>
                <Link href="/shop">
                    Shop
                </Link>
            </h2>
            <p>A one-stop shop for all things Mayflower. In this section, you can purchase club membership, post or view classified advertisments, buy official club regalia, order spare parts from the club and access a list of external part suppliers to help your with your build and car’s upkeep.</p>
        </section>
        <section>
            <h2>
                <Link href="/forum">
                    Forum
                </Link>
            </h2>
            <p>Coming soon! We hope to establish in future an online forum for members to discuss anything and everything to do with Mayflowers and the club. Visit this section to read more about this as well as examples of the kinds of systems we might use for it.</p>
        </section>
        <section>
            <h2>
                <Link href="/contact">
                    Contact
                </Link>
            </h2>
            <p>Need to get in touch with the committee or other members of the club? Visit this section to view a list of up-to-date contact details for individuals involved with our club. Please also let us know if you notice any incorect or out-of-date details!</p>
        </section>
        <section>
            <h2>
                <Link href="/links">
                    Links
                </Link>
            </h2>
            <p>This section includes links to other interesting websites, including affiliated clubs, members’ personal websites, relevant magazines and other related bodies. If you know of any sites you think would be worth featuring here, let us know.</p>
        </section>
        <section>
            <h2>
                <Link href="/search">
                    Search
                </Link>
            </h2>
            <p>This will be the next major addition to the website after launch. Given that this new website contains a large amount of Mayflower-related material, it makes sense that it should be possible to search this veritable goldmine of information to more easily find and discover articles and titbits.</p>
        </section>
    </>
);

export default HomePageBody;
