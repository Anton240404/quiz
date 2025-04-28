import { useNavigate } from 'react-router-dom';
import styles from './css/home.module.css';
import headerLogo from '../assets/header.svg';
import headerLogo2 from '../assets/header2.svg';
import shipImage from '../assets/shipImage.svg';
import tours from '../assets/tours.svg';
import info from '../assets/info.svg';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <img src={headerLogo} alt="Логотип" className={styles.headerLogo} />
                    <h1 className={styles.museumTitle}>Дубенский районный <br/> краеведческий музей</h1>
                </div>
                <img src={headerLogo2} alt="Логотип" className={styles.headerLogo} />
            </header>

            <main className={styles.content}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.quizTitle}>Квиз для <br/> старшеклассников <br/> «Умная морская душа»</h2>
                    <button className={styles.button} onClick={() => navigate('/quiz')}>
                        Начать
                    </button>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.shipContainer}>
                        <img src={shipImage} alt="Корабль" className={styles.shipImage} />
                    </div>
                    <div className={styles.infoBlocks}>
                        <div className={styles.infoItem}>
                            <img src={tours} alt="Иконка 1" className={styles.infoIcon} />
                            <h4 className={styles.text}>7 захватывающих <br/> этапов</h4>
                        </div>
                        <div className={styles.infoItem}>
                            <img src={info} alt="Иконка 2" className={styles.infoIcon} />
                            <h4 className={styles.text}>Отправься в увлекательное <br/> путешествие по загадочным <br/> глубинам знаний</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}