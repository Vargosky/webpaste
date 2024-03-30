import React from 'react';
import ProductCard from '@/components/ProductCard';
import { catalogoTorta, catalogoKutchen } from '../../data/products';


const catalogo = catalogoKutchen
const Page = ({listado}) => {
  let i=0;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {console.log("entro")}
      {catalogo.map((producto, index) => (
        
                <ProductCard
                key={i++}
                images={producto.images}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                discount={producto.discount}
              />
      ))}
   
    </div>
  );
};

export default Page;
