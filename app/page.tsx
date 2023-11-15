import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.result}>
            <h2>Your Result</h2>
            <div className={styles.resultNumber}>
                <h3>75</h3>
                <p>of 100</p>
            </div>
            <div className={styles.resultText}>
              <h3>Great</h3>
              <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
        <div className={styles.sumcont}>
          <h2>Summary</h2>
          <div className={styles.summary}>
            <div className={`${styles.sumitem} ${styles.textReaction}`}>
              <span className={styles.citem}><Image
                src="./icon-reaction.svg"
                alt="Reaction Icon"
                className={styles.texticon}
                width={20}
                height={20}
                priority
              />
              Reaction</span>
              <span className={styles.precc}><span className={styles.precc2}>76</span> / 100</span>
            </div>
            <div className={`${styles.sumitem} ${styles.textMemory}`}>
              <span className={styles.citem}><Image
                src="./icon-memory.svg"
                alt="Reaction Icon"
                className={styles.texticon}
                width={20}
                height={20}
                priority
              />
              Memory</span>
              <span className={styles.precc}><span className={styles.precc2}>74</span> / 100</span>
            </div>
            <div className={`${styles.sumitem} ${styles.textVerbal}`}>
              <span className={styles.citem}><Image
                src="./icon-verbal.svg"
                alt="Reaction Icon"
                className={styles.texticon}
                width={20}
                height={20}
                priority
              />
              Verbal</span>
              <span className={styles.precc}><span className={styles.precc2}>78</span> / 100</span>
            </div>
            <div className={`${styles.sumitem} ${styles.textVisual}`}>
              <span className={styles.citem}><Image
                src="./icon-visual.svg"
                alt="Reaction Icon"
                className={styles.texticon}
                width={20}
                height={20}
                priority
              />
              Visual</span>
              <span className={styles.precc}><span className={styles.precc2}>72</span> / 100</span>
            </div>
            <button className={styles.btn}>Continue</button>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}
