

const AddToy = () => {
    return (
        <div>

            <form className=" py-10 px-16 mx-auto" style={{ backgroundImage: `url("https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg")` }}>
                <div className="flex mx-auto w-[90%]">
                    <h1>Email</h1>
                    <input type="text" placeholder="Type here" className="py-3  rounded-sm input-bordered input-error w-full max-w-xs" />


                    <h1>Email</h1>
                    <input type="text" placeholder="Type here" className="py-3 px-5 rounded-sm input-bordered input-error w-full max-w-xs" />
                </div>

            </form>
        </div>
    );
};

export default AddToy;