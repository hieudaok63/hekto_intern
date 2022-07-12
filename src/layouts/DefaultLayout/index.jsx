import React from 'react';
import { Footer, Header } from '~/modules';

function DefaultLayout({ children }) {
    return (
        <div>
            <>
                <Header />
                {children}
                <Footer />
            </>
        </div>
    );
}

export default DefaultLayout;
