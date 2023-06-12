import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-5" style={{ backgroundColor: 'black', color: 'white' }}>
            <Container>
                <br/>
                <Row>
                    <Col>
                        <p className="text-center">
                            &copy; {new Date().getFullYear()} Created by Moises Figueroa
                        </p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <a target="_blank" href="https://github.com/MoisesFC">
                            <FaGithub /> GitHub
                        </a>
                        {' | '}
                        <a target="_blank" href="https://linkedin.com/in/moisesfc">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </Col>
                </Row>
                <br/>
            </Container>
        </footer>
    );
};

export default Footer;
