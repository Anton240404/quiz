import { useState } from 'react';
import css from './dropdown.module.css';
import arrowIcon from './arrow-icon.svg';

type Item = {
    title: string;
    id: string;
    text: string;
    color: 'success' | 'danger' | 'default';
};

type Props = {
    selectedId: string | undefined;
    items: Item[];
    onSelect: (item: Item) => void;
    placeholder: string;
    closeOnSelect?: boolean;
};

export function Dropdown(props: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const closeOnSelect = props.closeOnSelect ?? true;
    // const closeOnSelect = props.closeOnSelect || true

    const handleItemClick = (item: Item) => {
        props.onSelect(item);

        if (closeOnSelect) {
            setIsOpen(false);
        }
    };

    const selectedItem = props.items.find((x) => x.id === props.selectedId);

    return (
        <div className={css.container}>
            <div className={css.placeholder} onClick={() => setIsOpen(!isOpen)}>
                {selectedItem ? selectedItem.title : props.placeholder}
                <button
                    className={`${css.arrow} ${isOpen ? css.up : css.down}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src={arrowIcon} />
                </button>
            </div>

            {isOpen && (
                <div className={css.dropdown}>
                    {props.items.map((item) => {
                        const isSelected = selectedItem?.id === item.id;

                        const itemClass = `${css.item} ${css[item.color]}`; // !

                        const circleClass = `${css.circle} ${
                            isSelected ? css[item.color] : css.default
                        }`;

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
