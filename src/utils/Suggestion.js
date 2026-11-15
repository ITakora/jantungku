export const MIN_CF = 0.4;


export const MAX_TIPS = 3;

export const SUGGESTIONS = {
    D01: "Kurangi garam dan makanan olahan, serta rutin cek tekanan darah.",
    D02: "Kurangi gorengan dan makanan berlemak, perbanyak sayur, buah, dan ikan.",
    D03: "Mulai olahraga ringan secara bertahap dan periksakan detak jantungmu ke dokter.",
    D04: "Hentikan aktivitas saat nyeri dada muncul, periksakan ke dokter, dan segera ke IGD jika nyeri tidak mereda.",
    D05: "Batasi minuman manis dan karbohidrat olahan, serta periksa gula darah secara berkala.",
    D06: "Periksakan hasil EKG-mu ke dokter jantung.",
    D07: "Lakukan olahraga ringan secara bertahap dan periksakan detak jantung maksimalmu.",
    D08: "Konsultasikan hasil EKG istirahatmu ke dokter.",
};


export function getSuggestion(inputs) {
    const  sentences = inputs
        .filter((item) => item.cfUser >= MIN_CF && SUGGESTIONS[item.code])
        .sort((a, b) => b.cfUser * b.cfExpert - a.cfUser * a.cfExpert)
        .slice(0, MAX_TIPS)
        .map((item) => SUGGESTIONS[item.code]);

    return `${sentences.join()}`;
}
