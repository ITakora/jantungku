import { useState } from "react";
import {Link, useNavigate} from "react-router";
import {db} from "../db/db.jsx";
import {saveSession} from "../utils/SaveSession.js";


const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = await db.users.where("username").equals(username.trim()).first();

        if (!user || user.password !== password) {
            setError("Wrong username or password");
            return;
        }

        saveSession(user);
        navigate('/user/diagnosis');
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E4EBE8] px-4">
            <div className="bg-white w-full max-w-sm max-h- shadow-md rounded-xl p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">Sign In</h1>


                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-[#1F6B5C] hover:bg-[#195A4D] text-white font-medium py-2 rounded-md transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-4 mr-3">
                    Belum ada akun? <Link to="/signup" className="text-black">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}


export default SignIn;