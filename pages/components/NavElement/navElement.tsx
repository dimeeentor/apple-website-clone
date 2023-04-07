import styles from "./navElement.module.scss"

import { FC } from "react"
import Link from "next/link"

type NavElement = {
    name: string
}

const NavElement: FC<NavElement> = ({ name }) => {
    return (
        <li className={styles.navBlock}>
            <Link href={""} className={styles.navElement}>
                {name}
            </Link>
        </li>
    )
}

export default NavElement
