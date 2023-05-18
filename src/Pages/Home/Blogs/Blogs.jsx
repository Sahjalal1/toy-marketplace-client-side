

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p><span>Ans</span> <span>frat side</span>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <span>seced</span></p>
            </div>
        </div>
    );
};

export default Blogs;