
import React from 'react';
import "./footer.css"
import Phone from "../../Images/icons/Phone-icon.svg"
import Mail from "../../Images/icons/Mail-icon.svg"
import Logo from '../../Images/TripThrill-Logo-1.png'
import Facebook from "../../Images/icons/Facebook-icon.svg"
import Insta from "../../Images/icons/Instagram-icon.svg"
import Twitter from "../../Images/icons/Twitter-icon.svg"
import Map from "../../Images/icons/Map-icon.svg"

function Footer () {
	return (
		<>
			<div className="Footer-Box">
				<div className="Footer-Container">
					<div className="Footer-Row">

						<div className="Footer-Column-1">
							<div className="Footer-icon">
								<img  src={Logo} alt="Logo" height="100%" width="80px"  />
							</div>
							<div className="Footer-Heading-1">
									TripThrill is a homestay curation and management company. We help individual, families and groups (Corporates, Wedding Planners, Event Managers, 
							</div>
						</div>


						<div className="Footer-Column-2">
							<div className="Footer-Heading">
								Contact Us
							</div>
							<div className="FooterLink" href="#"><img src={Phone} className="Footer-many-icons" alt="icons"/>&nbsp;+919133335120</div>
							<div className="FooterLink" href="#"><img src={Mail} className="Footer-many-icons" alt="icons"/>&nbsp;&nbsp;info@tripthrill.com</div>
							<div className="FooterLink" href="#"><img src={Map} className="Footer-many-icons" alt="icon" />&nbsp;&nbsp;Hyderabad</div>
							{/* <div className="FooterLink" href="#">Bidar</div> */}
							<div className="FooterLink-icon"><img src={Facebook} className="Footer-many-icons"alt="icons"/>&nbsp;&nbsp;&nbsp;&nbsp; <img src={Insta}className="Footer-many-icons" alt="icons"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={Twitter} className="Footer-many-icons"alt="icons"/></div>
						</div>

						<div className="Footer-Column-3">
							<div className="Footer-Heading">Quick Links</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-facebook-f">
									<span style={{ marginLeft: "10px" }}>
									Facebook
									</span>
								</i> */}
								Home Stays
							</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-instagram">
									<span style={{ marginLeft: "10px" }}>
									Instagram
									</span>
								</i> */}
								Locations
							</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-twitter">
									<span style={{ marginLeft: "10px" }}>
									Twitter
									</span>
								</i> */}
								About us
							</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-youtube">
									<span style={{ marginLeft: "10px" }}>
									Youtube
									</span>
								</i> */}
								Trip Dairys
							</div>
						</div>

						<div className="Footer-Column-4">
							<div className="Footer-Heading">States</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-facebook-f">
									<span style={{ marginLeft: "10px" }}>
									Facebook
									</span>
								</i> */}
								Karnataka
							</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-instagram">
									<span style={{ marginLeft: "10px" }}>
									Instagram
									</span>
								</i> */}
								Goa
							</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-twitter">
									<span style={{ marginLeft: "10px" }}>
									Twitter
									</span>
								</i> */}
								Kerala
							</div>
							<div className="FooterLink" href="#">
								{/* <i className="fab fa-youtube">
									<span style={{ marginLeft: "10px" }}>
									Youtube
									</span>
								</i> */}
								Maharashtra 
							</div>
						</div>
					</div>
				</div>
				<div className="footer-privacy-main">
					<div className="footer-privacy">
						<p>  &copy; TripThrill &middot; <a  href="#privacy">Privacy</a> &middot; <a  href="#terms">Terms</a></p>
					</div>
					<div className="footer-code-made">
						<p><a className="link-color float-right" href="www.anyonecancode.in">made by anyonecancode.in</a></p>
					</div>
				</div>
			</div>
		</>
	)
}


export default Footer;