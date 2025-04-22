import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import headerLogo from '../assets/header.svg';
import headerLogo2 from '../assets/header2.svg';
import shipImage from '../assets/shipImage.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';

export function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/quiz');
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h1 className={styles.museumTitle}>Дубенский районный краеведческий музей</h1>
                <img src={headerLogo} alt="Логотип" className={styles.headerLogo} />
                <img src={headerLogo2} alt="Логотип" className={styles.headerLogo} />
            </header>

            <main className={styles.content}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.quizTitle}>Квиз для старшеклассников «Умная морская душа»</h2>
                    <button className={styles.button} onClick={handleStart}>
                        Начать
                    </button>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.shipContainer}>
                        <img src={shipImage} alt="Корабль" className={styles.shipImage} />
                    </div>
                    <div className={styles.infoBlocks}>
                        <div className={styles.infoItem}>
                            <img src={icon1} alt="Иконка 1" className={styles.infoIcon} />
                        </div>
                        <div className={styles.infoItem}>
                            <img src={icon2} alt="Иконка 2" className={styles.infoIcon} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}