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

                <div className='my-16 grid lg:gap-4 lg:grid-cols-2'>
                    <TabPanel>
                        {
                            categorys.map(category =>
                                <div key={category._id} className="card  w-[90%] mx-auto lg:w-[80%]  bg-base-100  shadow-xl">
                                    <figure><img src={category.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        {category._id}
                                        <h2 className="card-title">{category.toyname}</h2>
                                        <h1>{category.price}</h1>
                                        <p>{category.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-outline btn-error">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </TabPanel>
                </div>
                <TabPanel>
                    {
                        categorys.map(category =>
                            <div key={category._id} className="card card-compact w-[40%]  bg-base-100 mt-16 lg:mt-0 shadow-xl">
                                <figure><img src={category.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    {category._id}
                                    <h2 className="card-title">{category.toyname}</h2>
                                    <h1>{category.price}</h1>
                                    <p>{category.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline btn-error">View Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
                <TabPanel>
                    {
                        categorys.map(category =>
                            <div key={category._id} className="card card-compact w-[40%]  bg-base-100 mt-16 lg:mt-0 shadow-xl">
                                <figure><img src={category.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    {category._id}
                                    <h2 className="card-title">{category.toyname}</h2>
                                    <h1>{category.price}</h1>
                                    <p>{category.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline btn-error">View Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
            </Tabs>
        </div>


    );
};

export default ByCategory;

{/* <div onClick={() => active('remote')} className="tabs">
<a className={`tab tab-lg tab-lifted ${activeTab == 'remote' ? "bg-black text-white" : ''}`} >remote</a>
</div>
<div onClick={() => active('haha')} className="tabs">
<a className={`tab tab-lg tab-lifted ${activeTab == 'haha' ? "bg-black text-white" : ''}`} >haha</a>
</div>
<div className="tabs">
<a  className="tab tab-lg tab-lifted">Large</a>
<a className="tab tab-lg tab-lifted tab-active">Large</a>
<a className="tab tab-lg tab-lifted">Large</a>
</div> */}