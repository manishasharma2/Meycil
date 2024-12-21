import React from 'react'

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Log In</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-lime-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                    >
                        LOG IN
                    </button>
                </form>
            </div>
        </div>


    )
}

export default Login
