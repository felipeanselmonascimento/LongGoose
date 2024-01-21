import styles from './Chart.module.css'

export function Chart() {
    return (
        <div className={styles.div}>
            <div id="dexscreener-embed"><iframe src="https://dexscreener.com/bsc/0xAbEdd084F270b48eE1bFC52c8F3A6EBAe274AEa1?embed=1&theme=dark"></iframe></div>
        </div>
    )
}
