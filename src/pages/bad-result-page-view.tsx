// bad-result-page-view.tsx
import styles from './css/bad-result-page.module.css'
import iconBad from '../assets/iconBad.png'
import { Button } from '../components/ui-compnents/button.tsx';

type Props = {
    correctAnswers: number,
    allAnswers: number,
    onNext: () => void
}

export function BadResultPageView(props:Props) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <img src={iconBad} alt="Bad result icon" />
                    <h1>Не сдавайся</h1>
                    <div className={styles.resultInfo}>
                        Вы ответили правильно на {props.correctAnswers} из {props.allAnswers}
                    </div>
                    <Button color='primary' text='Продолжить квиз' onClick={props.onNext} />
                </div>
            </div>
        </div>
    )}
