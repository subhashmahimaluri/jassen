import React from 'react';

const Footer = () => {
    return (
        <footer className="wrapper footer">
            <div className="insidewrapper">
                <div className="footerblock">
                    <div>
                        <div />
                        <nav aria-labelledby="block-janssenspharmaceuticaprize-footer-menu" id="block-janssenspharmaceuticaprize-footer">
                            <ul>
                                <li>
                                    <a href="about.html" title="About the award" data-drupal-link-system-path="node/2">About the award</a>
                                </li>
                                <li>
                                    <a href="prof-bl-feringa.html" title="The jury" data-drupal-link-system-path="node/3">The jury</a>
                                </li>
                                <li>
                                    <a href="nominations.html" title="Nominations" data-drupal-link-system-path="node/5">Nominations</a>
                                </li>
                                <li>
                                    <a href="prof-f-d-toste.html" title="Winners" data-drupal-link-system-path="node/37">Winners</a>
                                </li>
                                <li>
                                    <a href="pictures-award-ceremony.html" title="Media" data-drupal-link-system-path="node/7">Media</a>
                                </li>
                            </ul>
                        </nav>
                        <nav aria-labelledby="block-footer2-menu" id="block-footer2">
                            <ul>
                                <li>
                                    <a href="privacy-policy.html" data-drupal-link-system-path="node/8">Privacy</a>
                                </li>
                                <li>
                                    <a href="legal-notice.html" data-drupal-link-system-path="node/9">Legal notice</a>
                                </li>
                                <li>
                                    <a href="applicable-laws-and-regulations.html" data-drupal-link-system-path="node/11">Applicable laws and regulations</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="footerblock footerright">
                    <img className="janssenlogofooter" src="/images/janssenlogo.jpg" alt="Janssen" />
                    <div>
                        <div id="block-footertext">
                            <div>
                                <p>Janssen Pharmaceutica NV 2018 • Turnhoutseweg 30, B—2340 Beerse — Belgium. All rights reserved. This site is managed in accordance with Belgian Law, and is published by Janssen Pharmaceutica NV, who is solely responsible for its contents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </footer>
    );
};

export default Footer;