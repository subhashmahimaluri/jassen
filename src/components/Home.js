import React, { Fragment } from 'react';
import Nav from './common/Nav';
import Footer from './common/Footer';
import './Home.scss';

const Home = () => {
    return (
        <Fragment>
            <Nav />
            <div className="wrapper content">
        <div className="insidewrapper">
            <div className="nodecontent fullwidthcontent">
                <div>
                    <div id="block-janssenspharmaceuticaprize-content">


                        <div className="col2layout homepage">
                            <div className="col2layoutwrap">
                                <div className="col2col col2col_left">
                                    <div>
                                        <h1>A New Name, A New Look, A New Era!</h1>
                                    </div>

                                    <div>
                                        <p style={{fontSize: "14px"}}>
                                            In celebration of the 30+ year history of the Prize and its global reach, we are pleased to unveil our new identity and name: the <span style={{color: "deepblue", fontWeight: "bold"}}>Janssen Prize for Creativity in Organic Synthesis.</span>
                                        </p>
                                        <br />
                                        <p style={{fontSize: "14px"}}>
                                            This prestigious recognition was established in 1986 by Janssen Pharmaceuticals, members of the academic chemistry community and the Belgian Organic Synthesis Symposium (BOSS) to bring attention to the positive impact of organic synthesis in drug discovery.
                                        </p>
                                        <br />
                                    </div>
                                    <div style={{float: "left", width: "20%"}}><img alt="" src="/images/2018-06/jpp.png" /></div>
                                    <div style={{fontSize: "14px", float: "right", width: "78%"}}>
                                        <ul style={{paddingLeft: "10px", listStyleType: "square"}}>
                                            <b>About the Prize:</b>
                                            <li>Awarded every two years to a chemist, under the age of 50, who has made a significant contribution to the field of organic synthesis</li>
                                            <li>Nominations submitted by the global academic community of organic chemists
                                            </li><li>A panel of <a href="prof-bl-feringa.html">international jury members</a>, chaired by Prof. B. Feringa, 2016 Nobel Prize winner, select the winner.</li>
                                            <li>The recipient receives 20.000 Euros, a trophy, a plaque and delivers a keynote address at BOSS.</li>
                                            <li>Learn more about our 30-year legacy <a href="history.html">here</a> and our impressive winners <a href="prof-f-d-toste.html">here</a>.</li>
                                        </ul>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="col2col col2col_right">
                                    <div style={{float: "left", width: "60%"}}>
                                        <h1 style={{marginBottom: "15px"}}>Congratulations to our 2018 Winner!</h1>
                                        <p style={{color: "black", fontSize: "24px", fontWeight: "bold"}}>F. Dean Toste</p><br />
                                        <p style={{color: "deepskyblue", fontSize: "16px", fontWeight: "normal"}}><i>Professor of Chemistry at the University of California, Berkeley</i></p><br />
                                    </div>
                                    <div style={{float: "right", width: "38%"}}>
                                        <img src="/images/2018-06/Toste_MG_4894.jpg" alt="" />
                                    </div>
                                    <div className="clear"></div>
                                    <div>
                                        <p style={{fontSize: "14px"}}>
                                            His pioneering work in homogeneous metal catalysis, in particular gold catalysis, and thorough mechanistic thinking have pushed the boundaries of synthetic organic chemistry, leading to many new discoveries at an unprecedented rate (find out more here)
                                        </p><br />
                                        <p style={{fontSize: "14px"}}>
                                            Professor Toste will deliver a keynote lecture at the 16th Belgian Organic Synthesis Symposium in Brussels on July 10th, where he will receive a trophy and certificate from Janssen Prize jury president <b>B. Feringa</b> and <b>Dash Dhanak</b>, Global Head, Discovery Sciences, Janssen Research &amp; Development.
                                        </p>
                                        <p>
                                            <img alt="Boss|XVI" data-entity-type="file" data-entity-uuid="9d9d8095-38ac-4912-bbd5-eaada01afc41" src="/images/inline-images/boss_xv_updated.png" style={{paddingRight: "14px", paddingTop: "27px", height: "61px" }} className="align-center" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>

            </div>

            <span className="last_updated">
                Last updated:  June 25, 2018
            </span>
        </div>
    </div>
            <Footer />
        </Fragment>
    );
};

export default Home;