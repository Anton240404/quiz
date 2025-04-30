import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Quiz } from './pages/Quiz.tsx';
import { Home } from './pages/Home.tsx';
import styles from './reset.module.css';
import { QuizIntro } from './pages/Quiz-intro.tsx';

function App() {

    return (
        <div className={styles.reset}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<QuizIntro />} />
                    <Route path="/quiz/:questionId" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
