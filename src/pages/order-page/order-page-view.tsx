import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button/button';
import { Dropdown } from '../../components/ui/dropdown/dropdown';
import { OrderPage } from '../../types/order-page/order-page.tsx';
import css from './order-page.module.css';
import styles from '../quiz/base-page.module.css';

type Props = {
    page: OrderPage;
    onChange: (page: OrderPage) => void;
    onNext: () => void;
    tourNumber: number;
    onExitAttempt: () => void;
};

export function OrderPageView(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isNextButtonActive, setIsNextButtonActive] = useState(false);

    const currentText = props.page.items[selectedIndex];
    useEffect(() => {
        const allItemsHaveSelection = props.page.items.every(
            (item) => item.selectedPosition !== undefined
        );
        setIsNextButtonActive(allItemsHaveSelection);
    }, [props.page.items]);

    const getColor = (
        dropdownOptionItem: (typeof props.page.items)[number],
        dropdownOptionIndex: number
    ): 'default' | 'danger' | 'success' => {
        if (currentText.selectedPosition === undefined) {
            return 'default';
        }
        if (dropdownOptionIndex === currentText.selectedPosition) {
            if (
                currentText.correctPosition ===
                dropdownOptionItem.correctPosition
            ) {
                return 'success';
            } else {
                return 'danger';
            }
        }

        return 'default';
    };

    return (
        <>
            <div className={css.questionContainer}>
                <div className={css.tour}>{props.tourNumber + 1} тур</div>
                <div className={css.title}>{props.page.title}</div>
            </div>
            <div className={css.wrapper}>
                <div className={css.textContainer}>
                    <div>
                        <Dropdown
                            selectedId={
                                currentText.selectedPosition !== undefined
                                    ? currentText.selectedPosition.toString()
                                    : undefined
                            }
                            closeOnSelect={false}
                            onSelect={(val) => {
                                const updatedItems = [...props.page.items];
                                updatedItems[selectedIndex] = {
                                    ...updatedItems[selectedIndex],
                                    selectedPosition: Number(val.id),
                                };
                                props.onChange({
                                    ...props.page,
                                    items: updatedItems,
                                });
                            }}
                            placeholder="Выбрать позицию"
                            items={props.page.items.map((item, i) => ({
                                id: i.toString(),
                                color: getColor(item, i),
                                text: item.text,
                                title: item.title,
                            }))}
                        />
                    </div>
                    <div className={css.text}>{currentText.text}</div>
                </div>
                <div className={css.list}>
                    {props.page.items.map((_, i) => {
                        return (
                            <Button
                                size={'sm'}
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
                <Button
                    text="ДАЛЕЕ"
                    onClick={props.onNext}
                    color={isNextButtonActive ? 'primary' : 'disabledButtons'}
                    disabled={!isNextButtonActive}
                />
            </div>
        </>
    );
}
