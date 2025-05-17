import { PopupInfo } from '../popup-info/popup-info.ts';

export type InputQuestionPage = {
    type: 'InputQuestionPage';
    question: string;
    correctAnswer: string;
    finished?: boolean;
    selectedAnswer?: string;
    popupInfo: PopupInfo;
};