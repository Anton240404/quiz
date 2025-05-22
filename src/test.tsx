import { Dropdown } from './components/ui/dropdown/dropdown';

export function Test() {
    return (
        <>
            <Dropdown
                onSelect={(val) => {
                    console.log(val);
                }}
                placeholder="Выберите"
                items={[
                    { id: '1', color: 'default', text: 'Text 1' },
                    { id: '2', color: 'default', text: 'Text 2' },
                    { id: '3', color: 'default', text: 'Text 3' },
                ]}
            />
        </>
    );
}
