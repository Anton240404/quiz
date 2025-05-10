import styles from './info-page-tour-five.module.css';
import { Button } from '../../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';
import info1 from '../../../public/assets/info1.png'
import info2 from '../../../public/assets/info1.png'


type Props = {
    onNext: () => void;
}

export function InfoPageTourFiveView(props: Props) {
    const navigate = useNavigate();
    return (
        <>
                <div className={styles.header}>
                    <p className={styles.headerText}>Примеры оснастки и снаряжения</p>
                </div>
                <div className={styles.infoOnRow}>
                    <div className={styles.imageAndText}>
                        <img src={info1} alt={'info'} />
                        <p>Градшток</p>
                    </div>
                    <div>
                        <img src={info2} alt={'info'}/>
                        <p>Квадрант</p>
                    </div>
                </div>
                <div className={styles.infoOnRow}>
                    <div>
                        <img />
                        <p></p>
                    </div>
                    <div>
                        <img />
                        <p></p>
                    </div>
                </div>
                <div className={styles.infoOnRow}>
                    <div>
                        <img />
                        <p></p>
                    </div>
                    <div>
                        <img />
                        <p></p>
                    </div>
                </div>
            <div className={styles.buttonContainer}>
                <Button
                    text={'НА ГЛАВНУЮ'}
                    onClick={() => navigate('/')}
                    color={'primary'}
                ></Button>
                <Button
                    text={'ДАЛЕЕ'}
                    onClick={props.onNext}
                    color={'primary'}
                ></Button>
            </div>
        </>
    );
}