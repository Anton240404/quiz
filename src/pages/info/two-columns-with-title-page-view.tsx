import style from './two-columns-with-title-page-view.module.css';
import styles from '../css/quiz.module.css';
import { Button } from '../../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';
import { TwoColumnsWithTitlePage } from '../../types/types.ts';


type Props = {
    page: TwoColumnsWithTitlePage
    onNext: () => void;
}

export function TwoColumnsWithTitlePageView(props: Props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={style.header}>
                <h2 className={style.headerText}>{props.page.title}</h2>
            </div>
            <div className={style.overallItemsWrapper}>
                {props.page.items.map((item) => (
                    <div className={style.container}>
                        <div className={style.imageAndText}>
                            <img src={item.image} alt={'info'} className={style.image} />
                            <p className={style.text}>{item.text}</p>
                        </div>
                    </div>
                        )
                )}
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