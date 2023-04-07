import styles from "./header.module.scss"
import { FC, ReactNode } from "react"

type Header = {
    children?: ReactNode | ReactNode[]
}

const Header: FC<Header> = ({ children }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>{children}</nav>
        </header>
    )
}

export default Header
