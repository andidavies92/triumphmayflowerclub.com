import "reflect-metadata";
import "styles/GlobalStyles.scss";

import Database from "types/database/Database";
import DatabaseInstance from "data/database/DatabaseInstance";

import { AppProps } from "next/app";
import { container } from "tsyringe";

export default function App({ Component, pageProps }: AppProps) {
    container.register(Database, { useValue: DatabaseInstance });
    return <Component {...pageProps} />;
}
