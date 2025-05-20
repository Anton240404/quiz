import { useState } from 'react';

type Item = {
    id: string,
    text: string
    color: 'success' | 'danger' | 'default'
}

type Props = {
    items: Item[],
    onSelect: (item: Item) => void;
    placeholder: string
}

export function Dropdown(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleItemClick = (item: Item) => {
        setSelectedItem(item);
        props.onSelect(item);
        setIsOpen(false);
    };

    return (
        <>
            <div className={css.container}>
                <div className={css.wrapper}>
                    <div
                        className={css.placeholder}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedItem ? selectedItem.text : props.placeholder}
                        <button
                            className={`${css.arrow} ${isOpen ? css.up : css.down}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? '▲' : '▼'}
                        </button>
                    </div>

                    {isOpen && (
                        <div className={css.dropdown}>
                            {props.items.map((item) => (
                                <div
                                    key={item.id}
                                    /*className={`${css.item} ${css[item.color]}`}*/
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

