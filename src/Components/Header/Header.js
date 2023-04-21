import React, {useState} from 'react';
import {
    Container, Wrapper, Header1, Header2, LogoHold, SearchHold,
    Select, SearchButton, Advanced, Nav1, Nav1Hold,
    Select2, Nav2, Input, Nav2Hold, MenuHold, NavDiv
} from './HeaderStyle'
import {GiHamburgerMenu} from 'react-icons/gi'
import SideNav from './SideNav';

const Header = () => {

    const [sidenav, SetSideNav] = useState(false);

  return (
    <>
    <Container>
        <Wrapper>
            <Header1>
                <LogoHold>
                    <img src='/glogo.svg' alt='logo'/>
                </LogoHold>
                <SearchHold>
                    <Input type='text' placeholder='Search' />
                    <Select>
                    <option>All Category</option>
                    <option>Guns & Firearms</option>
                    <option>Gun Parts</option>
                    <option>Scopes, Sights & Optics</option>
                    <option>Amunition</option>
                    <option>Amunition Reloading</option>
                    <option>Black powder & muzzleloaders</option>
                    <option>Class 3 firearms, NFA & Destructive Devices</option>
                    <option>Holsters & Gun Leather</option>
                    <option>Hunting supplies & Gear</option>
                    <option>Shooting supplies</option>
                    <option>Air Guns</option>
                    <option>Archery & Bow hunting</option>
                    <option>Books, videos & Literature</option>
                    <option>Camera & photo</option>
                    <option>Clothing, jewelry, watches</option>
                    <option>Coins and precious metals</option>
                    <option>Collectibles & Militaria</option>
                    <option>Concealed carry</option>
                    <option>Fishing Tackle</option>
                    <option>Home Electronics</option>
                    <option>Knives & sword</option>
                    <option>Miscellaneous</option>
                    <option>Mobile Audio</option>
                    <option>Musical Instruments & Gear</option>
                    <option>Non-firing Replica Guns</option>
                    <option>Storage: cases, safes, cabinets</option>
                    <option>survival Gear</option>
                    <option>Tactical Gear</option>
                    <option>Taxidermy, Antlers & Mounts</option>
                    <option>Tools & Hardware</option>
                    <option>Vehicles</option>
                    </Select>
                    <SearchButton>Search</SearchButton>
                    <Advanced>Advanced</Advanced>
                </SearchHold>
                <Nav1Hold>
                    <Nav1 to='/login'>Sign In</Nav1>
                    <span>/</span>
                    <Nav1 to='/register'>Register</Nav1>
                    <MenuHold onClick={() =>{
                        SetSideNav(true)
                    }}>
                        <GiHamburgerMenu style={{color: "#006400", width: 35, height: 35}}/>
                    </MenuHold>
                </Nav1Hold>
            </Header1>
            <Header2>
                <Select2 name="Category" id='category' title='category search'>
                    <option>All Category</option>
                    <option>Guns & Firearms</option>
                    <option>Gun Parts</option>
                    <option>Scopes, Sights & Optics</option>
                    <option>Amunition</option>
                    <option>Amunition Reloading</option>
                    <option>Black powder & muzzleloaders</option>
                    <option>Class 3 firearms, NFA & Destructive Devices</option>
                    <option>Holsters & Gun Leather</option>
                    <option>Hunting supplies & Gear</option>
                    <option>Shooting supplies</option>
                    <option>Air Guns</option>
                    <option>Archery & Bow hunting</option>
                    <option>Books, videos & Literature</option>
                    <option>Camera & photo</option>
                    <option>Clothing, jewelry, watches</option>
                    <option>Coins and precious metals</option>
                    <option>Collectibles & Militaria</option>
                    <option>Concealed carry</option>
                    <option>Fishing Tackle</option>
                    <option>Home Electronics</option>
                    <option>Knives & sword</option>
                    <option>Miscellaneous</option>
                    <option>Mobile Audio</option>
                    <option>Musical Instruments & Gear</option>
                    <option>Non-firing Replica Guns</option>
                    <option>Storage: cases, safes, cabinets</option>
                    <option>survival Gear</option>
                    <option>Tactical Gear</option>
                    <option>Taxidermy, Antlers & Mounts</option>
                    <option>Tools & Hardware</option>
                    <option>Vehicles</option>
                </Select2>
                <Nav2Hold>
                    <Nav2><a href='https://www.gunbroker.com/#home-footer'>Buy</a></Nav2>
                    <Nav2><a href='https://www.gunbroker.com/a/list-an-item'>Sell</a></Nav2>
                    <Nav2><a href='https://www.gunbroker.com/coupon/couponcenter'>Coupons</a></Nav2>
                    <Nav2><a href='https://www.gunbroker.com/s/'>Stores</a></Nav2>
                    <Nav2><a href='https://www.gunbroker.com/c/article/'>Articles</a></Nav2>
                    <Nav2><a href='https://www.gunbroker.com/c/video/'>Videos</a></Nav2>
                    <Nav2><a href='https://support.gunbroker.com/'>Help</a></Nav2>
                </Nav2Hold>
            </Header2>
        </Wrapper>
    </Container>
    {
        sidenav?(<NavDiv>
            <SideNav SetSideNav={SetSideNav}/>
        </NavDiv>) : null
    }
    </>
  )
}

export default Header;