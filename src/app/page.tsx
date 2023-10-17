import React from 'react';
import Card from './components/card';

const Home = () => {
  return (
    
    <div className=" ">
    <div className="text p-6">
  <h1 className="text-2xl font-bold mb-4">Card Examples</h1>
</div>

      <div className="sm:mt-8 md:mt-16 lg:mt-24 xl:mt-32 "></div>
      <div className="max-h-screen overflow-y-auto scrollbar-width-thin h-screen flex flex-col items-center">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card title="Card 1" description="" backgroundColor="#CFE6FB" height="250px" />
          <Card title="Card 2" description="" backgroundColor="#F8D8A8" height="250px" />
          <Card title="Card 3" description="" backgroundColor="#FAB49E" height="250px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
