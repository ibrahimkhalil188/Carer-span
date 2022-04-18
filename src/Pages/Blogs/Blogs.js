import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 container mx-auto pt-12'>
            <div className='shadow-xl p-4 border-2'>
                <h1 className='text-2xl md:text-4xl font-mono p-4'>Why i'm using firebase?</h1>
                <div className='text-lg font-mono'>
                    Usually firebase provide 6-7 services but now i'm using 2 services of firebase.
                    <ul>
                        <li>user authentication</li>
                        <li>hoisting my web application</li>
                    </ul>
                </div>
            </div>
            <div className='shadow-xl p-4 border-2'>
                <h1 className='text-2xl md:text-4xl font-mono p-4'>What other options do you have to implement authentication?</h1>
                <div className='text-lg font-mono'>
                    <p>I have so many alternative option for implement authentication. Here is a short list</p>
                    <ul>
                        <li>OKta</li>
                        <li>Flutter</li>
                        <li>LoopBack</li>
                        <li>NativeScript</li>
                        <li>RxDB</li>
                    </ul>
                </div>
            </div>
            <div className='shadow-xl p-4 border-2'>
                <h1 className='text-2xl md:text-4xl font-mono p-4'>What other services does firebase provide other than authentication</h1>
                <div className='text-lg font-mono'>
                    <p>Firebase provide 4-5 other services other than authentication. like...</p>
                    <ul>
                        <li>Hoisting</li>
                        <li>Realtime database</li>
                        <li>Database</li>
                        <li>Storage</li>
                        <li>Functions</li>
                        <li>Machine learning</li>
                    </ul>
                </div>

            </div>
            <div className='shadow-xl p-4 border-2'>
                <h1 className='text-2xl md:text-4xl font-mono p-4'> Difference between authorization and authentication</h1>
                <div className='text-lg font-mono'>
                    <p>Authorization is a process where check who are you?</p>
                    <p>Authorization need your identity token</p>
                    <p>Authentication is a process that check what is permissible for you</p>
                    <p>authentication need access token</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;