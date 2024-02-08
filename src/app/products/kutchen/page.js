import React from 'react';
import ProductCard from '@/components/ProductCard';

import {kutchenManzana,tartaletafrutas} from './data'

const Page = () => {
  let i=0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProductCard
        key={i++}
        image={kutchenManzana.image}
        title={kutchenManzana.title}
        description={kutchenManzana.description}
        price={kutchenManzana.price}
        discount={kutchenManzana.discount}
      />
      <ProductCard
        key={i++}
        image={tartaletafrutas.image}
        title={tartaletafrutas.title}
        description={tartaletafrutas.description}
        price={tartaletafrutas.price}
        discount={tartaletafrutas.discount}
      />

      {/*
      <ProductCard
        key={i++}
        image={tortaMerengueFrutilla.image}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
      <ProductCard
        key={i++}
        image={tortaRoguel.image}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
            <ProductCard
        key={i++}
        image={tortaRoguel.image}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
            <ProductCard
        key={i++}
        image={tortaRoguel.image}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
            <ProductCard
        key={i++}
        image={tortaRoguel.image}
        title={tortaRoguel.title}
        description={tortaRoguel.description}
        price={tortaRoguel.price}
        discount={tortaRoguel.discount}
      />
            <ProductCard
        key={i++}
        image={tortaRoguel.image}
        title={tortaRoguel.title}
        description={tortaRoguel.description}
        price={tortaRoguel.price}
        discount={tortaRoguel.discount}
      /> */}
    </div>
  );
};

export default Page;
