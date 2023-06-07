import '@styles/globals.css';
import { Children } from 'react';
export const metadata = {
    title: 'Prompty',
    description: 'See and share AI prompts' 
}

const RootLayout = ({children}) =>{
    return (
        <html Lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'>

                    </div>
                </div>

                <main className='app'>
                    {children}
                </main>

            </body>
        </html>
    )
}

export default RootLayout;