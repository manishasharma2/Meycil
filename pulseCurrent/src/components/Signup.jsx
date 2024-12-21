import React from 'react'

function Signup() {
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg m-20 ">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        placeholder="First name"
                        className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        placeholder="Last name"
                        className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Create Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="mt-1 block w-full px-4 py-2 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-lime-600 border-lime-300 rounded focus:ring-lime-500"
                    />
                    <label className="ml-2 block text-sm text-gray-700">Remember Me</label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-lime-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                    CREATE ACCOUNT
                </button>
            </form>
        </div>


    )
}

export default Signup
