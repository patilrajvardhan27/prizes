import React from 'react';

// Define the prop types for the Card component
type CardProps = {
  title: string;
  description: string;
  backgroundColor: string;
  height: string; // Add a prop for the card height
};

const Card: React.FC<CardProps> = ({ title, description, backgroundColor, height }) => {
  // Define a style object to set the background color and height
  const cardStyle = {
    backgroundColor: backgroundColor,
    height: height,
  };

  return (
    <div className="w-[227px] h-[387px] relative">
      <div className="w-[227px] h-[387px] absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="p-4 max-w-md mx-auto border shadow-lg rounded-lg" style={cardStyle}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;