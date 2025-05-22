import { useState } from 'react';
import { Button } from '../../components/ui/button/button';
import { Dropdown } from '../../components/ui/dropdown/dropdown';
import { OrderPage } from '../../types/order-page';
import sharedCss from '../quiz/base-page.module.css';

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
        <div>
            <div
                className={sharedCss.questionContainer}
                style={{ marginBottom: 2 }}
            >
                <div>{props.tourNumber} тур</div>
                <div>{props.page.title}</div>
            </div>
            <div style={{ display: 'flex', gap: 30, padding: 40 }}>
                <div
                    style={{
                        background: '#fff',
                        flex: 1,
                        display: 'flex',
                        gap: 16,
                    }}
                >
                    <Dropdown
                        onSelect={(val) => {
                            currentText.selectedPosition = Number(val.id);
                        }}
                        placeholder="Выбрать позицию"
                        items={props.page.items.map((item) => {
                            const getColor = ():
                                | 'default'
                                | 'danger'
                                | 'success' => {
                                if (currentText.selectedPosition === undefined)
                                    return 'default';

                                return 'default';

                                // if (
                                //     currentText.selectedPosition ===
                                //     currentText.correctPosition
                                // )
                                //     return 'success';
                            };

                            return {
                                id: item.correctPosition.toString(),
                                color: getColor(),
                                text: item.text,
                            };
                        })}
                    />
                    <div>{currentText.text}</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                    }}
                >
                    {props.page.items.map((x, i) => {
                        return (
                            <Button
                                text={`ОТРЫВОК ${i}`}
                                color={
                                    selectedIndex === i ? 'success' : 'primary'
                                }
                                onClick={() => setSelectedIndex(i)}
                            />
                        );
                    })}
                </div>
                <div></div>
            </div>
            <div style={{ display: 'flex' }}>
                <Button text="На главную" color="primary" />
                <Button text="Далее" color="primary" />
            </div>
        </div>
    );
}
