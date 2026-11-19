
export const CF_LEVELS = [

    {label: "Sudah pasti tidak", value: -1.0},
    {label: "Hampir Pasti Tidak", value: -0.8},
    {label: "Kemungkinan Tidak", value: -0.6},
    {label: "Mungkin Tidak", value: -0.4},
    { label: 'Tidak', value: 0 },
    { label: 'Mungkin', value: 0.4 },
    { label: 'Kemungkinan', value: 0.6 },
    { label: 'Hampir Pasti', value: 0.8 },
    { label: 'Sudah Pasti', value: 1.0 },
];


export function calculateCF(items) {
    let old = 0;
    for (const { cfUser, cfExpert } of items) {
        const cf = cfUser * cfExpert;
        if (old >= 0 && cf >= 0) {
            old = old + cf * (1 - old);
        } else if (old <= 0 && cf <= 0) {
            old = old + cf * (1 + old);
        }
    }

    return old;
}

export function toPercent(value) {

    return (value * 100).toFixed(2);
}