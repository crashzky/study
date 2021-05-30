import {Navbar,
        NavbarBrand,
        Collapse,
        Nav,
        NavItem,
        Row,
        Col} from 'reactstrap';
import Separator from '../components/separator';
import {css} from '@emotion/css';

import Search from '../components/search';

export default function Header() {
    return (
        <Navbar className='ps-4 border-bottom' expand="md">
            <NavbarBrand href="/">
                <img src='/svg/trello.svg' alt='Logo'/>
            </NavbarBrand>
            <Separator/>
            <Collapse className='ms-4' navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem className='align-self-center'>
                        <Row>
                            <Col className='p-0'>
                                <img src='/svg/boards.svg' alt='Boards'/>
                            </Col>
                            <Col className={css`
                                padding-top: 2px;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 24px;
                            `}>Boards</Col>
                        </Row>
                    </NavItem>
                    <NavItem className='mx-2'>
                        <Separator/>
                    </NavItem>
                    <NavItem className='ms-3'>
                        <Search/>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}