import Header from "./components/Header"
import HintBlock from "./components/HintBlock"
import NavElement from "./components/NavElement"

export default function Home() {
    return (
        <main>
            <Header>
                <NavElement name="Store" />
                <NavElement name="Mac" />
                <NavElement name="iPad" />
                <NavElement name="iPhone" />
                <NavElement name="Watch" />
                <NavElement name="AirPods" />
                <NavElement name="TV & Home" />
                <NavElement name="Enterainment" />
                <NavElement name="Accessoires" />
                <NavElement name="Support" />
            </Header>
            <HintBlock />
        </main>
    )
}
