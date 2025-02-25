import React from 'react';

const Header = ({ title }) => {
    return (
        <header>
            {/* <h1>Welcome to My React App</h1> */}
            <h1>{title}</h1>
        </header>
    );
};

// It also can be coded like this:
// function Header() {
//     return (
//         <header>
//             <h1>Welcome to My React App</h1>
//         </header>
//     );
// }

export default Header;