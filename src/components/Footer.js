import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const Footer = () => {
    const style = {color: " white", fontSize: "1.8em" }
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList mt-4'>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsFacebook style={style} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsLinkedin style={style} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsTwitter style={style} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsStackOverflow style={style} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsGoogle style={style} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsGithub style={style} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/obadaajouly">
                                        <BsYoutube style={style} />
                                    </a>
                                </li> 
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© All right reserved</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
