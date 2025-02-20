// import React, { useState } from 'react'
// import logo from "../../assets/images/icons/logo-sm.png"
// import search from "../../assets/images/icons/search-icon-sm.png"
// import cart from "../../assets/images/icons/cart-sm.png"

// // import NavbarList from "./NavbarList";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";


// function Header() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   return (
//     <div>
//       <div className="nav-wrapper fixed-top">
//         <div className="container">
//           <nav className="navbar navbar-expand-md">
//             <Link className="navbar-brand mx-auto" to="/logo"><img src={logo} alt="Logo" /></Link>
//             <button 
//               className="navbar-toggler" 
//               type="button" 
//               data-toggle="collapse" 
//               data-target="#navbarNav" 
//               aria-controls="navbarNav" 
//               aria-expanded={!isNavCollapsed ? true : false} 
//               aria-label="Toggle navigation"
//               onClick={handleNavCollapse}

//             >☰</button>

//             <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
//               <ul className="navbar-nav nav-justified w-100 nav-fill">
//                 <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/mac">Mac</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/iphone">iphone</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/ipad">ipad</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/watch">Watch</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="tv">tv</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/music">Music</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="#/support">Support</Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/search/"><img src={search} alt="Search" /></Link></li>
//                 <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/cart/"><img src={cart} alt="Cart" /></Link></li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header




import React, { useState } from "react";
import logo from "../../assets/images/icons/logo-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Navbar expand="lg" fixed="top" bg="dark" className="navbar-dark">
      <Container className="px-4">
        {" "}
        {/* Added padding class */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="main" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-between">
            <Nav.Link as={Link} to="/mac/">
              Mac
            </Nav.Link>
            <Nav.Link as={Link} to="/iphone">
              iPhone
            </Nav.Link>
            <Nav.Link as={Link} to="/ipad/">
              iPad
            </Nav.Link>
            <Nav.Link as={Link} to="/watch/">
              Watch
            </Nav.Link>
            <Nav.Link as={Link} to="/tv/">
              TV
            </Nav.Link>
            <Nav.Link as={Link} to="/music/">
              Music
            </Nav.Link>
            <Nav.Link as={Link} to="/support/">
              Support
            </Nav.Link>
            <Nav.Link as={Link} to="/search/">
              <img src={search} alt="Search" />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart/">
              <img src={cart} alt="Cart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
