import React from 'react';
import Card from '../Cards/Card';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const paintings =useLoaderData();
    const card1=paintings.find(item => item.subcategory_name==="Landscape Painting");
    const card2=paintings.find(item => item.subcategory_name==="Portrait Drawing");
    const card3=paintings.find(item => item.subcategory_name==="Watercolour Painting");
    const card4=paintings.find(item => item.subcategory_name==="Oil Painting");
    const card5=paintings.find(item => item.subcategory_name==="Cartoon Drawing");

    return (
        <div>
            <h2 className='text-4xl font-semibold text-center'>Painting Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-12">
                
                     <Card key={card1.id} card={card1} categorySec={true}></Card>
                     <Card key={card2.id} card={card2} categorySec={true}></Card>
                     <Card key={card3.id} card={card3} categorySec={true}></Card>
                     <Card key={card4.id} card={card4} categorySec={true}></Card>
                     <Card key={card5.id} card={card5} categorySec={true}></Card>
                
            </div>

        </div>

    );
};

export default Category;