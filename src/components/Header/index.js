import React from "react";

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
									href="#"
									id="download"
								>
									 Default <span className="caret" />
								</a>
								<div className="dropdown-menu" aria-labelledby="download">
									<a
										className="dropdown-item"
										rel="noopener noreferrer"
										target="_blank"
										href="https://jsfiddle.net/bootswatch/mLascy62/"
									>
										Open in JSFiddle
									</a>
									<div className="dropdown-divider" />
									<a
										className="dropdown-item"
										href="./assets/bootstrap-4.6.1/dist/css/bootstrap.min.css"
										download
										>
										bootstrap.min.css
									</a>
									<a
										className="dropdown-item"
										href="./assets/bootstrap-4.6.1/dist/css/bootstrap.css"
										download
									>
										bootstrap.css
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
									href="https://github.com/thomaspark/bootswatch/"
								>
									<i className="fa fa-github" />  GitHub
								</a>
							</li>
							<li className="nav-item">
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="nav-link"
									href="https://twitter.com/bootswatch"
								>
									<i className="fa fa-twitter" />  Twitter
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
