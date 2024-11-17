function SignUp() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600">My Website</h1>
          </div>
  
         
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sign in</h2>
  
         
          <form className="space-y-4">
           
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
  
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
  
          
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
              />
            </div>
  
           
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Register
            </button>
          </form>
  
          
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  