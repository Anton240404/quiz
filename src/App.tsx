import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Quiz } from './pages/quiz/quiz.tsx';
import { Home } from './pages/start-page/start-page.tsx';
import styles from './reset.module.css';
import { QuizIntro } from './pages/quiz-intro/quiz-intro.tsx';
import { Test } from './test.tsx';
import { OrderPageView } from './pages/order-page/order-page-view.tsx';
import { toursData } from './data/tours-data.ts';
import { Button } from './components/ui/button/button.tsx';
import { useState } from 'react';

function App() {
    return (
        <div className={styles.reset}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test2" element={<Test2 />} />
                    <Route
                        path="/test"
                        element={
                            <OrderPageView
                                onChange={() => {}}
                                page={toursData[7].pages[0] as any}
                                tourNumber={666}
                                onExitAttempt={() => {}}
                            />
                        }
                    />
                    <Route
                        path="/quiz-intro/:tourIndex"
                        element={<QuizIntro />}
                    />
                    <Route path="/quiz/:tourIndex" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Test2() {
    const [value, setValue] = useState(1);

    return (
        <>
            <SelectNumber
                currentValue={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </>
    );
}

type Props = {
    currentValue: number;
    onChange: (newNumber: number) => void;
};

function SelectNumber(props: Props) {
    return (
        <>
            currentValue = {props.currentValue}
            <div style={{ display: 'flex' }}>
                <Button
                    text="1"
                    onClick={() => props.onChange(1)}
                    color="primary"
                />
                <Button
                    text="2"
                    onClick={() => props.onChange(2)}
                    color="primary"
                />
                <Button
                    text="3"
                    onClick={() => props.onChange(3)}
                    color="primary"
                />
            </div>
        </>
    );
}

export default App;
