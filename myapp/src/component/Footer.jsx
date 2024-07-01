import React from 'react';
import { IoLogoFacebook ,  IoLogoGithub , IoLogoLinkedin , IoLogoInstagram , IoLogoGoogle, IoLogoTwitter} from "react-icons/io";
import './assets/css/bgtxt.css'; // Ensure the correct path to your CSS file

const Footer = () => {
    return (
        <footer className="text-center footerbg py-4 w-100 "> 
            <div className="container fbg">
                <section className=" mt-6 ">
                    <div className="row text-center d-flex justify-content-center  ">
                        <div className="col-md-2 ">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" >About us</a>
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" >Products</a>
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" >Awards</a>
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" >Help</a>
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" >Contact</a>
                            </h6>
                        </div>
                    </div>
                </section>
                <hr className="my-5" />
                {/* <section className="mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
                            </p>
                        </div>
                    </div>
                </section> */}
                <section className="text-center mb-2">
                    <a href="#!" className="icon-black me-4">
                        <IoLogoFacebook />
                    </a>
                    <a href="#!" className="icon-black me-4">
                        <IoLogoTwitter />
                    </a>
                    <a href="#!" className="icon-black me-4">
                        <IoLogoGoogle />
                    </a>
                    <a href="#!" className="icon-black me-4">
                        <IoLogoInstagram />
                    </a>
                    <a href="#!" className="icon-black me-4">
                        <IoLogoLinkedin />
                    </a>
                    <a href="#!" className=" me-4">
                        <IoLogoGithub />
                    </a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
