import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Result } from './pages/Results.tsx';
import { Quiz } from './pages/Quiz.tsx';
import { Home } from './pages/Home.tsx';
import styles from './reset.module.css';

function App() {

    return (
        <div className={styles.reset}>
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:round" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
