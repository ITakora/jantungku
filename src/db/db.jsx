import Dexie from 'dexie';

export const db = new Dexie('cf-heart');

db.version(1).stores({
    symptoms: 'code',
    users: '++id, &username, password, role',
    diagnoses: '++id, userId, createdAt',
});

db.on('populate', () => {
    db.symptoms.bulkAdd([
        { code: 'D01', name: 'Resting BP (>120)', cfExpert: 0.4 },
        { code: 'D02', name: 'Cholesterol (>200)', cfExpert: 0.4 },
        { code: 'D03', name: 'Heart Rate Deficit >= 40', cfExpert: 0.8 },
        { code: 'D04', name: 'Exercise Angina', cfExpert: 0.8 },
        { code: 'D05', name: 'Fasting BS', cfExpert: 0.8 },
        { code: 'D06', name: 'ST Slope', cfExpert: 0.8 },
        { code: 'D07', name: 'Max HR (<140)', cfExpert: 0.8 },
        { code: 'D08', name: 'Resting ECG', cfExpert: 0.6 },
    ]);
    db.users.add({ username: 'admin', role: 'admin' });
});