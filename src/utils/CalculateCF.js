export const CF_LEVELS = [

    {label: "Definitely Not", value: -1.0},
    {label: "Almost Certainly Not", value: -0.8},
    {label: "Probably Not", value: -0.6},
    {label: "Maybe Not", value: -0.4},
    { label: 'No', value: 0 },
    { label: 'Maybe', value: 0.4 },
    { label: 'Probably', value: 0.6 },
    { label: 'Almost certainly', value: 0.8 },
    { label: 'Definitely', value: 1.0 },
];


export function calculateCF(items) {
    return items.reduce((old, { cfUser, cfExpert }) => {
        const cf = cfUser * cfExpert;
        return old + cf * (1 - old);
    }, 0);
}

export function toPercent(value) {
    return (value * 100).toFixed(2);
}