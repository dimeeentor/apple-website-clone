import { FC } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

const HintBlock: FC = () => {
    return (
        <div className={styles.hintBlock}>
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
            trade in iPhone 11 or higher.
            <sup>
                <Link href={""} className={styles.footnote}>
                    1
                </Link>
            </sup>
            <Link href={""} className={styles.shopIphone}>
                Shop iPhone &gt;
            </Link>
        </div>
    )
}

export default HintBlock
