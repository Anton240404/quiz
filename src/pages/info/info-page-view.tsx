import style from './info.module.css';
import styles from '../quiz/base-page.module.css';
import { Button } from '../../components/ui/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import flagInfo from '../../.././public/assets/flagInfo.png';
import { InfoPage } from '../../types/info-page/info-page.ts';

type Props = {
    page: InfoPage;
    onNext: () => void;
};

export function InfoPageView(props: Props) {
    const navigate = useNavigate();

    return (
        <>
            <div className={style.info}>
                <div className={style.flag}>
                    <img
                        src={flagInfo}
                        alt={props.page.title}
                        className={style.flagImage}
                    />
                </div>
                <div className={style.infoRight}>
                    <h1 className={style.title}>{props.page.title}</h1>
                    <h2 className={style.textInfo}>{props.page.text}</h2>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    text={'НА ГЛАВНУЮ'}
                    onClick={() => navigate('/')}
                    color={'primary'}
                />
                <Button
                    text={'ДАЛЕЕ'}
                    onClick={props.onNext}
                    color={'primary'}
                />
            </div>
        </>
    );
}
