import React from "react";
import { GitHub } from 'react-feather';

const Header = () => {
	return (
		<div>
			<div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
				<div className="container">
					<a href="../" className="navbar-brand">
						Bootswatch Theme Selector
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="https://blog.bootswatch.com/">
									Bootswatch Blog
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									data-bs-toggle="dropdown"
									href="/#"
									id="download"
								>
									 Default <span className="caret" />
								</a>
								<div className="dropdown-menu" aria-labelledby="download">
									<a
										className="dropdown-item"
										rel="noopener noreferrer"
										target="_blank"
										href="https://jsfiddle.net/user/bootswatch/fiddles/2/"
									>
										Open in JSFiddle
									</a>
									<div className="dropdown-divider" /> 
									<a
										className="dropdown-item"
										href="https://github.com/twbs/bootstrap/releases/download/v4.6.1/bootstrap-4.6.1-dist.zip"
										//download
										>
										Download default Bootstrap 4.6.1 (Compliled CSS and JS)
									</a>
									<a className="dropdown-item"
										//download
										href="https://getbootstrap.com/docs/4.6/getting-started/download/"
									>
										Default Bootstrap source documentation 
									</a>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav ms-md-auto">
							<li className="nav-item">
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="nav-link"
									href="https://github.com/alane019/bootswatch-theme-selector"
								>
									<GitHub 
									title="Github repository"
									alt="github icon" />

								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
