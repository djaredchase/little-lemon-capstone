import { useRef } from 'react';
import './Nav.css';
import Logo from '../../assets/Logo.svg';
import {
    IconButton,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <header>
            <nav className='header-nav'>
                <img src={Logo} alt='Little Lemon logo' />
                <ul>
                    <li className='nav-selected'><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Order online</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
                <IconButton
                    className='header-nav-btn'
                    aria-label='Open the menu'
                    icon={<HamburgerIcon />}
                    ref={btnRef}
                    onClick={onOpen}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody className='nav-drawer'>
                            <ul>
                                <li className='nav-selected'><a href='/'>Home</a></li>
                                <li><a href='/'>About</a></li>
                                <li><a href='/'>Menu</a></li>
                                <li><a href='/'>Order online</a></li>
                                <li><a href='/'>Reservations</a></li>
                                <li><a href='/'>Login</a></li>
                            </ul>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </nav>
        </header>
    )
}