import Header from "./components/Header"
import HeroBlock from "./components/HeroBlock"
import HintBlock from "./components/HintBlock"
import NavElement from "./components/NavElement"
import styles from "../styles/styles.module.scss"

export default function Home() {
    return (
        <main className={styles["main-document"]}>
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
            <HeroBlock
                imageSrc={"/../public/images/hero_iphone14pro.jpg"}
                title={"iPhone 14 Pro"}
                subTitle="Pro. Beyond."
                links={["Learn More", "Buy"]}
                alt="iphone14pro_hero"
            />
            <HeroBlock
                imageSrc={
                    "/../public/images/hero_iphone14_yellow__eun20sn4imi6_largetall_2x.jpg"
                }
                title={"iPhone 14"}
                subTitle="Two great sizes. Now with a yellow splash."
                links={["Learn More", "Buy"]}
                alt="iphone14_hero"
                isFontColorBlack={true}
            />
            <HeroBlock
                imageSrc={
                    "/../public/images/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_largetall_2x.jpg"
                }
                title={"Watch Series 8"}
                subTitle="Two great sizes. Now with a yellow splash."
                links={["Learn More", "Buy"]}
                alt="iphone14_hero"
            />
        </main>
    )
}
