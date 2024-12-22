import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Signup() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl mt-20">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>

            <form className="space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        placeholder="Enter your first name"
                        className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        placeholder="Enter your last name"
                        className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">Create Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter a strong password"
                        className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        placeholder="Re-enter your password"
                        className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-2 focus:ring-lime-500"
                    />
                    <label htmlFor="remember-me" className="ml-1 text-sm text-gray-700">Remember Me</label>
                </div>


                <NavLink
                    to="/login"
                    className="block w-full bg-lime-600 text-white font-medium py-2 px-4 rounded-md shadow-md text-center hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                    CREATE ACCOUNT
                </NavLink>
            </form>
        </div>



    )
}

export default Signup
