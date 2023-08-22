import { useState } from "react";
import styled from "styled-components";


interface BurgerProps {
   children?: React.ReactNode;
}

const Bg = styled.div``;

const HamburgerMenu = styled.div`
  .menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    z-index: 90;
    background-color: #009949;
  }

  .menu-btn span,
  .menu-btn span:before,
  .menu-btn span:after {
    content: "";
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
  }

  .menu-btn span:before {
    bottom: 8px;
  }

  .menu-btn span:after {
    top: 8px;
  }

  /* Checkbox checked styles */
  #menu-btn-check:checked ~ .menu-btn span {
    background-color: rgba(255, 255, 255, 0);
  }
  #menu-btn-check:checked ~ .menu-btn span::before {
    bottom: 0;
    transform: rotate(45deg);
  }
  #menu-btn-check:checked ~ .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
  }

  #menu-btn-check {
    display: none;
  }
`;

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%;
  z-index: 80;
  background-color: #009949;
  transition: all 0.5s;

  ul {
    padding: 70px 10px 0;
  }

  li {
    margin-bottom: 20px;
    border-bottom: solid 1px #fff;
    list-style: none;
  }

  a {
    display: block;
    width: 100%;
    font-size: 15px;
    box-sizing: border-box;
    color: #ffffff;
    text-decoration: none;
    padding: 9px 15px 10px 0;
    position: relative;
  }

  a::before {
    content: "";
    width: 7px;
    height: 7px;
    border-top: solid 2px #ffffff;
    border-right: solid 2px #ffffff;
    transform: rotate(45deg);
    position: absolute;
    right: 15px;
    top: 16px;
  }
`;

const Burger: React.FC<BurgerProps> = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Bg>
      <HamburgerMenu>
        <input
          type="checkbox"
          id="menu-btn-check"
          checked={menuOpen}
        />
        <label htmlFor="menu-btn-check" className="menu-btn" onClick={handleMenuToggle}>
          <span></span>
        </label>

        <MenuContent style={{ left: menuOpen ? "0" : "100%" }}>
          <ul onClick={() => {setMenuOpen(false)}}>
            {children}
          </ul>
        </MenuContent>
      </HamburgerMenu>
    </Bg>
  );
};

export default Burger;
