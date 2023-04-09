import { FC } from "react"
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"

type HeroBlock = {
    imageSrc: string
    title: string
    subTitle: string
    links: string[]
    alt: string
    isFontColorBlack?: boolean
}

const HeroBlock: FC<HeroBlock> = ({
    imageSrc,
    title,
    subTitle,
    links,
    alt,
    isFontColorBlack,
}) => {
    return (
        <Link
            href={""}
            className={styles["hero-block"]}
            style={{ color: isFontColorBlack ? "#131313" : "#fff" }}
        >
            <div className={styles.title}>
                <h1 className={styles.heading}>{title}</h1>
                <h2 className={styles["sub-heading"]}>{subTitle}</h2>
                <div className={styles["cta-links"]}>
                    {links.map((element) => {
                        return <p>{element}&gt;</p>
                    })}
                </div>
            </div>
            <div className={styles.image}>
                <Image src={imageSrc} alt={alt} width={2400} height={620} />
            </div>
        </Link>
    )
}

export default HeroBlock
