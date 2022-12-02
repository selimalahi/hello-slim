import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    // const [services, setServices] =useState([]);



    const {data:categoriesData =[]} = useQuery({
        queryKey: ['categoriesData'],
        queryFn: () => fetch('http://localhost:5000/categoriesData')
        .then(res => res.json())
    })



    // useEffect( () =>{
    //     fetch('http://localhost:5000/categoriesData')
    //     .then(res => res.json())
    //     .then(data =>setServices(data)))
    // }, [])
    return (
        <div  className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoriesData.map(service => <Category
                key={service.id}
                service={service}
                ></Category>)
            }
        </div>
    );
};

export default Categories;