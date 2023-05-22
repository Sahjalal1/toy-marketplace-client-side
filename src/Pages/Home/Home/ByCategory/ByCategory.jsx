// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { AuthContext } from '../../../../Providers/AuthProviders';

const ByCategory = () => {
    // const { user } = useContext(AuthContext)
    const [categorys, setCategorys] = useState([])
    const [tavcategry, setTavcategry] = useState('regular-car')

    useEffect(() => {
        fetch(`https://toy-client-server-mdsahjalalrahim-gmailcom.vercel.app/toyscategory/${tavcategry}`)
            .then(res => res.json())
            .then(data => {
                const something = data.slice(1, 3)
                setCategorys(something)
            })

    }, [tavcategry]);
    // console.log(categorys._id)

    return (

        <div className='mt-20'>
            <Tabs>
                <div className='bg-[#52fff3] text-xl mx-auto'>
                    <TabList>
                        <div className='w-[95%] flex gap-5 text-center mx-auto pt-3'>
                            <Tab><span onClick={() => setTavcategry('regular-car')} className='text-2xl font-bold '>Sports Car</span></Tab>
                            <Tab><span onClick={() => setTavcategry('truck-car')} className='text-2xl font-bold '>Truck</span></Tab>
                            <Tab><span onClick={() => setTavcategry('sports-car')} className='text-2xl font-bold '>Regular Car</span></Tab>
                        </div>
                    </TabList>
                </div>


                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                        {
                            categorys.map(category =>
                                <div key={category._id}>

                                    <div className="card  w-[90%] mx-auto lg:w-[80%] bg-black  shadow-xl">
                                        <figure><img className='pt-4 px-4 h-[400px]' src={category.photo} alt="Shoes" /></figure>
                                        <div className="card-body text-white">
                                            <h2 className="card-title"><span className='font-serif'>TitName:</span> {category.toyname}</h2>
                                            <h1><span className='font-serif'>Price:</span> {category.price}</h1>
                                            <p><span className='font-serif'>Rating:</span> {category.rating}</p>
                                            <div className="card-actions justify-end">
                                                <button className="px-4 py-3 border-2 text-[#52fff3] border-[#52fff3] hover:bg-[#52fff3] hover:text-black rounded-md">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                        {
                            categorys.map(category =>
                                <div key={category._id}>

                                    <div className="card  w-[90%] mx-auto lg:w-[80%] bg-black  shadow-xl">
                                        <figure><img className='pt-4 px-4 h-[400px]' src={category.photo} alt="Shoes" /></figure>
                                        <div className="card-body text-white">
                                            <h2 className="card-title"><span className='font-serif'>TitName:</span> {category.toyname}</h2>
                                            <h1><span className='font-serif'>Price:</span> {category.price}</h1>
                                            <p><span className='font-serif'>Rating:</span> {category.rating}</p>
                                            <div className="card-actions justify-end">
                                                <button className="px-4 py-3 border-2 text-[#52fff3] border-[#52fff3] hover:bg-[#52fff3] hover:text-black rounded-md">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                        {
                            categorys.map(category =>
                                <div key={category._id}>

                                    <div className="card  w-[90%] mx-auto lg:w-[80%] bg-black  shadow-xl">
                                        <figure><img className='pt-4 px-4 h-[400px]' src={category.photo} alt="Shoes" /></figure>
                                        <div className="card-body text-white">
                                            <h2 className="card-title"><span className='font-serif'>TitName:</span> {category.toyname}</h2>
                                            <h1><span className='font-serif'>Price:</span> {category.price}</h1>
                                            <p><span className='font-serif'>Rating:</span> {category.rating}</p>
                                            <div className="card-actions justify-end">
                                                <button className="px-4 py-3 border-2 text-[#52fff3] border-[#52fff3] hover:bg-[#52fff3] hover:text-black rounded-md">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >


    );
};

export default ByCategory;

