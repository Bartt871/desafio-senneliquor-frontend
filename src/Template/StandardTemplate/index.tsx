import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

export const StandardTemplate = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}