import CarOfTheDaySlideshow from "components/slideshow/CarOfTheDaySlideshow";
import Link from "next/link";
import React from "react";

const HomePageSidebar = () => (
    <>
        <section>
            <h2>Car of the day</h2>
            <CarOfTheDaySlideshow />
        </section>
        <div id="news">
            <h2>News</h2>
            <section className="card">
                <h3>
                    <Link href="/news/2021/01/driveyourtriumphday">
                        Drive Your Triumph Day
                    </Link>
                </h3>
                <h4>Wednesday 10<sup>th</sup> …</h4>
                <div className="metadata">
                    <span className="author">Rye Livingston</span>
                    <span className="interpunct">·</span>
                    <span className="date">10<sup>th</sup> January 2021</span>
                </div>
                <p>“It’s that time again, Drive Your Triumph Day 2021. The concept is simple: on this day, drive your …”</p>
            </section>
            <section className="card">
                <h3>
                    <Link href="/news/2020/11/cancelledagm">
                        Cancelled AGM
                    </Link>
                </h3>
                <h4>Unprecedented times…</h4>
                <div className="metadata">
                    <span className="author">Paul Burgess</span>
                    <span className="interpunct">·</span>
                    <span className="date">1<sup>st</sup> November 2020</span>
                </div>
                <p>“Due to the continuing COVID-19 situation the committee have decided to cancel this year’s …”</p>
            </section>
            <section className="card">
                <h3>
                    <Link href="/news/2020/10/winterdrivingconditions">
                        Winter Driving Conditions
                    </Link>
                </h3>
                <h4>A guide to staying …</h4>
                <div className="metadata">
                    <span className="author">Rob Davies</span>
                    <span className="interpunct">·</span>
                    <span className="date">29<sup>th</sup> October 2020</span>
                </div>
                <p>“Neil Henderson, working for <i>Hendy Car and Van Store</i> has sent us a very helpful <b>winter driving</b> …”</p>
            </section>
            <section className="card">
                <h3>
                    <Link href="/news/2020/06/newstandardforfuelinuktobeintroducedbyendofyear">
                        New Standard for Fuel in UK to Be Introduced by End of Year
                    </Link>
                </h3>
                <h4>E10 will not be …</h4>
                <div className="metadata">
                    <span className="author">Rob Davies</span>
                    <span className="interpunct">·</span>
                    <span className="date">27<sup>th</sup> June 2020</span>
                </div>
                <p>“By the end of the year, <i>E10</i> will be introduced in the UK. This is a fuel with 10% of bioethanol, …”</p>
            </section>
            <section className="card">
                <h3>
                    <Link href="/news/2020/03/anupdatedstatementondriveitday2020">
                        An Updated Statement on Drive It Day 2020
                    </Link>
                </h3>
                <h4>#DriveItDayMemories</h4>
                <div className="metadata">
                    <span className="author">Andi Emma Davies</span>
                    <span className="interpunct">·</span>
                    <span className="date">25<sup>th</sup> March 2020</span>
                </div>
                <p>“The Federation of British Historic Vehicle Clubs have issued an updated press statement, …”</p>
            </section>
            <section className="card">
                <h3>
                    <Link href="/news/2020/03/fbhvcstatementondriveitday2020">
                        FBHVC Statement on Drive It Day 2020
                    </Link>
                </h3>
                <h4>Drive-on with caution!</h4>
                <div className="metadata">
                    <span className="author">Andi Emma Davies</span>
                    <span className="interpunct">·</span>
                    <span className="date">22<sup>nd</sup> March 2020</span>
                </div>
                <p>“The Federation of British Historic Vehicle Clubs have released a press statement on Drive It Day 2020 …”</p>
            </section>
            <Link href="/news">See more…</Link>
        </div>
    </>
);

export default HomePageSidebar;
