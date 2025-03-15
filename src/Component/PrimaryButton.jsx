import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ 
  href, 
  variant = 'default',
  children,
  className = '',
  ...props 
}) => {
  const baseStyles = "text-sm md:text-base transition-all duration-300";
  
  const variants = {
    default: "text-gray-600 hover:text-emerald-600",
    primary: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 md:px-6 rounded-lg hover:shadow-lg hover:scale-105"
  };

  return href ? (
    <Link
      to={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;