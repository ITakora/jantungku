const KEY = 'user';

export function saveSession(user) {
    localStorage.setItem(
        KEY,
        JSON.stringify({ id: user.id, username: user.username, role: user.role })
    );
}

export function getUser() {
    try {
        return JSON.parse(localStorage.getItem("user")); // { id, username, role } or null
    } catch {
        return null;
    }
}