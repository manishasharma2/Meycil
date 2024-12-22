import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Log In</h2>
                <form className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-2 focus:ring-lime-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember me</label>
                    </div>

                    <NavLink
                        to="/"
                        className="block w-full bg-lime-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 text-center"
                    >
                        LOG IN
                    </NavLink>
                </form>
            </div>
        </div>



    )
}

export default Login
