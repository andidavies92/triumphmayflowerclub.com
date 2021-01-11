import "styles/GlobalStyles.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
