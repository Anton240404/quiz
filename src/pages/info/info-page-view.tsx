import style from './info.module.css'
import styles from '../css/quiz.module.css';
import { Button } from '../../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';

type Props = {
    onNext: () => void;
}

export function InfoPageView(props:Props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className={style.container}>
                <div className={style.info}>
                    <div className={style.flag}></div>
                    <div className={style.infoRight}>
                        <h1 className={style.title}>АНДРЕЕЙВСКИЙ ФЛАГ</h1>
                        <h2 className={style.textInfo}>АНДРЕЕЙВСКИЙ ФЛАГ</h2>
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
                </div>
            </div>
        </div>
    )
}