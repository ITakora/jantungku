import Dexie from 'dexie';

export const db = new Dexie('cf-heart');

db.version(1).stores({
    symptoms: 'code, name, cfExpert',
    users: '++id, &username,password, role',
    diagnoses: '++id, userId,  createdAt',
});

db.on('populate', () => {
    db.symptoms.bulkAdd([
        { code: 'D01', name: 'Apakah tekanan darah Anda saat istirahat berada di atas 120 mmHg?', cfExpert: 0.4 },
        { code: 'D02', name: 'Apakah hasil pemeriksaan kadar kolesterol total Anda di atas 200 mg/dL?', cfExpert: 0.4 },
        { code: 'D03', name: 'Apakah jantung Anda terasa sulit berdetak kencang/cepat lelah saat melakukan aktivitas fisik berat?', cfExpert: 0.8 },
        { code: 'D04', name: 'Apakah dada Anda terasa sakit, nyeri, atau tertekan saat atau setelah berolahraga?', cfExpert: 0.8 },
        { code: 'D05', name: 'Apakah kadar gula darah puasa Anda tergolong tinggi (di atas 120 mg/dL)?', cfExpert: 0.8 },
        { code: 'D06', name: 'Apakah hasil pemeriksaan rekam jantung (EKG) Anda menunjukkan grafik kemiringan ST yang mendatar (Flat)?', cfExpert: 0.8 },
        { code: 'D07', name: 'Apakah hasil pemeriksaan rekam jantung (EKG) Anda menunjukkan grafik kemiringan ST yang menurun (Down)', cfExpert: 0.8 },
        { code: 'D08', name: 'Apakah detak jantung maksimal Anda saat beraktivitas berada di bawah 140 denyut per menit (bpm)', cfExpert: 0.8 },
        { code: 'D09', name: 'Apakah hasil rekam jantung (EKG) Anda saat istirahat menunjukkan adanya kelainan atau hasil yang tidak normal?', cfExpert: 0.6 },
    ]);
    db.users.bulkAdd([
        { username: 'admin', password: 'admin123', role: 'admin' },
        { username: 'user', password: 'user123', role: 'user' },
    ]);
});