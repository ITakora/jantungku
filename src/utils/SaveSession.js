const KEY = 'user';

export function saveSession(user) {
    localStorage.setItem(
        KEY,
        JSON.stringify({ id: user.id, username: user.username, role: user.role })
    );
}