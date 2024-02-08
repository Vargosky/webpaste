import React from 'react';
import ProductCard from '@/components/ProductCard';

import {tortaRoguel,tortaTresLeches,tortaMerengueFrutilla} from './data'

const Page = () => {
  let i=0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProductCard
        key={i++}
        images={tortaRoguel.images}
        title={tortaRoguel.title}
        description={tortaRoguel.description}
        price={tortaRoguel.price}
        discount={tortaRoguel.discount}
      />
      <ProductCard
        key={i++}
        images={tortaTresLeches.images}
        title={tortaTresLeches.title}
        description={tortaTresLeches.description}
        price={tortaTresLeches.price}
        discount={tortaTresLeches.discount}
      />
      <ProductCard
        key={i++}
        images={tortaMerengueFrutilla.images}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
      <ProductCard
        key={i++}
        images={tortaRoguel.images}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
            <ProductCard
        key={i++}
        images={tortaRoguel.images}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
            <ProductCard
        key={i++}
        images={tortaRoguel.images}
        title={tortaMerengueFrutilla.title}
        description={tortaMerengueFrutilla.description}
        price={tortaMerengueFrutilla.price}
        discount={tortaMerengueFrutilla.discount}
      />
            <ProductCard
        key={i++}
        images={tortaRoguel.images}
        title={tortaRoguel.title}
        description={tortaRoguel.description}
        price={tortaRoguel.price}
        discount={tortaRoguel.discount}
      />
            <ProductCard
        key={i++}
        images={tortaRoguel.images}
        title={tortaRoguel.title}
        description={tortaRoguel.description}
        price={tortaRoguel.price}
        discount={tortaRoguel.discount}
      />
    </div>
  );
};

export default Page;
