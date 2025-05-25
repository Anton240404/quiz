import { useState } from 'react';
import { Button } from '../../components/ui/button/button';
import { Dropdown } from '../../components/ui/dropdown/dropdown';
import { OrderPage } from '../../types/order-page';
import css from './order-page.module.css';
import styles from '../quiz/base-page.module.css';

type Props = {
    page: OrderPage;
    onChange: (page: OrderPage) => void;

    tourNumber: number;
    onExitAttempt: () => void;
};

export function OrderPageView(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const currentText = props.page.items[selectedIndex];

    return (
        <>
            <div className={css.questionContainer}>
                <div className={css.tour}>{props.tourNumber + 1} тур</div>
                <div className={css.title}>{props.page.title}</div>
            </div>
            <div className={css.wrapper}>
                <div
                    style={{
                        background: '#fff',
                        flex: 1,
                        display: 'flex',
                        gap: 16,
                        padding: 30,
                        borderRadius: 20,
                    }}
                >
                    <div style={{}}>
                        <Dropdown
                            selectedId={
                                currentText.selectedPosition === undefined
                                    ? undefined
                                    : currentText.selectedPosition.toString()
                            }
                            closeOnSelect={false}
                            onSelect={(val) => {
                                const newPage = { ...props.page };
                                newPage.items[selectedIndex].selectedPosition =
                                    Number(val.id);
                                props.onChange(newPage);
                            }}
                            placeholder="Выбрать позицию"
                            items={props.page.items.map((item, i) => {
                                const getColor = ():
                                    | 'default'
                                    | 'danger'
                                    | 'success' => {
                                    if (
                                        currentText.selectedPosition ===
                                        undefined
                                    )
                                        return 'default';

                                    if (
                                        currentText.selectedPosition ===
                                            currentText.correctPosition &&
                                        currentText.selectedPosition === i
                                    )
                                        return 'success';

                                    if (
                                        currentText.selectedPosition !==
                                            currentText.correctPosition &&
                                        currentText.selectedPosition === i
                                    )
                                        return 'danger';

                                    // ...

                                    return 'default';
                                };

                                return {
                                    id: item.correctPosition.toString(),
                                    color: getColor(),
                                    text: item.text,
                                    title: item.title,
                                };
                            })}
                        />
                    </div>
                    <div style={{ flex: 1 }}>{currentText.text}</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        width: 200,
                    }}
                >
                    {props.page.items.map((x, i) => {
                        return (
                            <Button
                                text={`ОТРЫВОК ${i + 1}`}
                                color={
                                    selectedIndex === i ? 'success' : 'primary'
                                }
                                onClick={() => {
                                    setSelectedIndex(i);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button
                    text={'НА ГЛАВНУЮ'}
                    onClick={props.onExitAttempt}
                    color={'primary'}
                />
                <Button text="Далее" color="primary" />
            </div>
        </>
    );
}
