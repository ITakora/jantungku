
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
    let old = 0;
    for (const { cfUser, cfExpert } of items) {
        const cf = cfUser * cfExpert;
        if (old >= 0 && cf >= 0) {
            old = old + cf * (1 - old);
        } else if (old <= 0 && cf <= 0) {
            old = old + cf * (1 + old);
        } else {
            old = (old + cf) / (1 - Math.min(Math.abs(old), Math.abs(cf)));
        }
    }

    return old;
}

export function toPercent(value) {

    return (value * 100).toFixed(2);
}