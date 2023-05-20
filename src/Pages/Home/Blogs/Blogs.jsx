

const Blogs = () => {
    return (
        <div className='card w-[95%] lg:w-[80%] grid lg:grid-cols-2 gap-6 bg-sky-400 mt-10 mb-6 p-4 py-4 lg:px-10 lg:py-5 mx-auto'>
            <div className='card bg-black text-white px-8 py-5'>
                <h1 className='text-2xl font-bold'>1...What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>***Ans***</span> <span>frat side</span>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <span>seced</span></p>
            </div>
            <div className='card px-8 py-5'>
                <h1 className='text-2xl font-bold'>2...Compare SQL and NoSQL databases??</h1>
                <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>***Ans***</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='card px-8 py-5'>
                <h1 className='text-2xl font-bold'>3...What is express js? What is Nest JS?</h1>
                <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>***Ans***</span> Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div className='card px-8 py-5'>
                <h1 className='text-2xl font-bold'>4...What is MongoDB aggregate and how does it work?</h1>
                <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>***Ans***</span> What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blogs;