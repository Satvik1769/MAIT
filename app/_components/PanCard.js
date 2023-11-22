import React from 'react'

function PanCard() {
  return (
    <div className="flex items-center justify-center h-screen ">
    <div className="w-96 bg-white border border-gray-200 rounded-lg shadow p-8  dark:bg-green-50 	">
      <a href="#">
        <img className="rounded-t-lg" src="" alt="" />
      </a>
      <div className="mt-4">
        <a href="#">
          <h5 className="text-xl font-bold text-gray-900 dark:text-black">Pan Card</h5>
        </a>
        <p className="text-gray-700 dark:text-black-400 mt-2">ABC1244HCA</p>

        <p className="text-gray-700 dark:text-gray-400 mt-4">Issued By</p>

        <p className="text-gray-700 dark:text-black-400">Income Tax Department</p>
      </div>
    </div>
  </div>
  )
}

export default PanCard;