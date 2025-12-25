
import React from 'react';
import { MenuItem } from '../types';

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="p-5 rounded-2xl bg-white border border-zinc-100 hover:border-rose-200 transition-all duration-300 group hover:shadow-xl hover:shadow-rose-100/50">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-cinzel text-lg text-zinc-900 group-hover:text-rose-600 transition-colors font-bold">
          {item.name}
        </h3>
        <span className="font-inter font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full text-xs">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-zinc-500 text-sm italic font-playfair leading-relaxed mt-2 opacity-80">
          {item.description}
        </p>
      )}
    </div>
  );
};

export default MenuCard;