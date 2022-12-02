import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Home/Products/BookingModal/BookingModal';
import Products from '../Home/Products/Products';

const Product = () => {

    const [singleProduct, setSingleProducts] =useState(null);

    const product =useLoaderData();
    
    return (
        <section>
            <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                product.map(products =><Products
                key={products.id}
                products={products}
                setSingleProducts={setSingleProducts}
                ></Products>)
            }
        </div>
          { singleProduct &&
            <BookingModal
            
            singleProduct={singleProduct}
            setSingleProducts={setSingleProducts}
            ></BookingModal>
          }
        </section>
        
    );
};

export default Product;