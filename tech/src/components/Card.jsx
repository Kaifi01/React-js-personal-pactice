import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = ({pitems}) => {
  return (
  <>
<>
  {/* Product Card */}
  <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  w-[23%]">
    
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-800">  {pitems.title}</h3>
      <p className="text-gray-600 text-sm mt-2">
     {pitems.body}
      </p>
      <div className="flex items-center justify-between mt-4">
       <FontAwesomeIcon icon={faWhatsapp} />
       <FontAwesomeIcon icon={faPhone} />
      
        <span className="text-xl font-bold text-orange-500">$79.99</span>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</>

  </>
  )
}

export default Card