import React from 'react';

interface CardProps {
  title: string;
  backgroundImage: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, backgroundImage, onClick }) => {
  return (
    <div 
      className="relative h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg border border-slate-200"
      onClick={onClick}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-end p-6">
        <h2 className="text-white text-xl lg:text-2xl font-bold tracking-wide transform transition-transform duration-300 group-hover:translate-y-[-4px]">
          {title}
        </h2>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </div>
  );
};

export default Card;