import React from 'react'
import { CloudUploadIcon } from '@heroicons/react/outline'

function Dnd() {
    return (
        <div className="w-1/2 mx-auto h-screen flex flex-col justify-center">

            <label
                className="flex flex-col items-center justify-center w-full h-1/2 px-4 transition bg-[#caedf7] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <CloudUploadIcon className='w-36 text-red-500 mb-12' />
                <span className="flex items-center space-x-2">

                    <span className="font-medium text-xl text-black">
                        Drop & drop files, or
                        <span className="text-red-500 text-xl underline ml-1">browse</span>
                    </span>
                </span>
                <span className='text-sm text-gray-500'>Supported formats: DXF, DWG, JPEG, AI, PDF</span>
                <input type="file" name="file_upload" className="hidden" />
            </label>
            <button className='bg-[#00C2FF] my-3 py-3 rounded-md font-medium'>UPLOAD FILES</button>
        </div>
    )
}

export default Dnd