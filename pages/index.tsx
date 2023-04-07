import Header from "./components/Header/header"
import NavElement from "./components/NavElement/navElement"

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
        </main>
    )
}
