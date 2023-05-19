import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ByCategory = () => {
    const [activeTab, setActiveTab] = useState('remote')
    const active = (hah) => {
        setActiveTab(hah)
    }
    return (
        <Tabs>
            <TabList>
                <Tab onClick={() => active('name1')}
                    className={`tab tab-lg tab-lifted ${activeTab == 'name1' ? "bg-blue-400 text-[#cf1b1b]" : 'bg-white'}`}
                >Title 1</Tab>
                <Tab onClick={() => active('name2')}
                    className={`tab tab-lg tab-lifted ${activeTab == 'name2' ? " bg-blue-400" : 'bg-white'}`}
                >Title 2</Tab>
                

            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
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