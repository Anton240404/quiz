import { useState } from 'react';
import css from './dropdown.module.css';

type Item = {
    title: string;
    id: string;
    text: string;
    color: 'success' | 'danger' | 'default';
};

type Props = {
    items: Item[];
    onSelect: (item: Item) => void;
    placeholder: string;
};

export function Dropdown(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleItemClick = (item: Item) => {
        setSelectedItem(item);
        props.onSelect(item);
        setIsOpen(false);
    };

    return (
        <div className={css.container}>
            <div
                className={css.placeholder}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedItem ? selectedItem.title : props.placeholder}
                <button
                    className={`${css.arrow} ${isOpen ? css.up : css.down}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>

            {isOpen && (
                <div className={css.dropdown}>
                    {props.items.map((item) => {
                        const isSelected = selectedItem?.id === item.id;
                        const itemClass = `${css.item} ${isSelected ? css[item.color] : ''}`;
                        const circleClass = `${css.circle} ${isSelected ? css[item.color] : css.default}`;

                        return (
                            <div
                                key={item.id}
                                className={itemClass}
                                onClick={() => handleItemClick(item)}
                            >
                                <span className={circleClass} />
                                <span className={css.text}>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
