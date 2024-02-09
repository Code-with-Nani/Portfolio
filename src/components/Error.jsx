import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';


const Error = () => {
  return (
    <>
    <Header/>
    <section className="bg3 bg-cover bg-center py-20 w-screen h-[90vh] ">
      <div className="container mx-auto sm:my-28 my-44">
        <h2 className="text-3xl font-bold mb-10 text-center text-red-700">404 - Page Not Found</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-center text-red-700">Oops! It seems like you've encountered a lost link. Don't worry, let's get you back on track.</p>
          <div className="flex justify-center mt-8">
            <Link to="/" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>

    </>
    
  )
}

export default Error
