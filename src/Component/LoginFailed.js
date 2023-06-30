import React from 'react'

function LoginFailed() {
return (
    <div className='Container text-center mt-5'>
        <h1>Login failed ,Please try Again !</h1>
        <button className='btn btn-warning mt-4 '><a className='text-decoration-none text-dark' href="/">Retry</a> </button>

    </div>
)
}

export default LoginFailed;
