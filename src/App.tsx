import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Quiz } from './pages/quiz/quiz.tsx';
import { Home } from './pages/start-page/start-page.tsx';
import styles from './reset.module.css';
import { QuizIntro } from './pages/quiz-intro/quiz-intro.tsx';

function App() {
    return (
        <div className={styles.reset}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
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

export default App;
