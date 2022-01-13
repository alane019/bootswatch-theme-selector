import React from "react";
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {  Container } from "@mui/material";

const BootswatchDemo = () => {

	return (
	<Container style={{paddingBottom: '20px'}}> 
		{/* Navbar ================================================== */}
				<div className="bs-docs-section clearfix">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="navbars">Navbars</h1>
							</div>
							<div className="bs-component">
								<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
									<div className="container-fluid">
										<a className="navbar-brand" href="#">
											Navbar
										</a>
										<button
											className="navbar-toggler"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#navbarColor01"
											aria-controls="navbarColor01"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span className="navbar-toggler-icon" />
										</button>
										<div
											className="collapse navbar-collapse"
											id="navbarColor01"
										>
											<ul className="navbar-nav me-auto">
												<li className="nav-item">
													<a className="nav-link active" href="#">
														Home
														<span className="visually-hidden">(current)</span>
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Features
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Pricing
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														About
													</a>
												</li>
												<li className="nav-item dropdown">
													<a
														className="nav-link dropdown-toggle"
														data-bs-toggle="dropdown"
														href="#"
														aria-haspopup="true"
														aria-expanded="false"
													>
														Dropdown
													</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">
															Action
														</a>
														<a className="dropdown-item" href="#">
															Another action
														</a>
														<a className="dropdown-item" href="#">
															Something else here
														</a>
														<div className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a>
													</div>
												</li>
											</ul>
											<form className="d-flex">
												<input
													className="form-control me-sm-2"
													type="text"
													placeholder="Search"
												/>
												<button
													className="btn btn-secondary my-2 my-sm-0"
													type="submit"
												>
													Search
												</button>
											</form>
										</div>
									</div>
								</nav>
                              {/* -------------- */}
							</div>
							<div className="bs-component">
								<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
									<div className="container-fluid">
										<a className="navbar-brand" href="#">
											Navbar
										</a>
										<button
											className="navbar-toggler"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#navbarColor02"
											aria-controls="navbarColor02"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span className="navbar-toggler-icon" />
										</button>
										<div
											className="collapse navbar-collapse"
											id="navbarColor02"
										>
											<ul className="navbar-nav me-auto">
												<li className="nav-item">
													<a className="nav-link active" href="#">
														Home
														<span className="visually-hidden">(current)</span>
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Features
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Pricing
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														About
													</a>
												</li>
												<li className="nav-item dropdown">
													<a
														className="nav-link dropdown-toggle"
														data-bs-toggle="dropdown"
														href="#"
														aria-haspopup="true"
														aria-expanded="false"
													>
														Dropdown
													</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">
															Action
														</a>
														<a className="dropdown-item" href="#">
															Another action
														</a>
														<a className="dropdown-item" href="#">
															Something else here
														</a>
														<div className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a>
													</div>
												</li>
											</ul>
											<form className="d-flex">
												<input
													className="form-control me-sm-2"
													type="text"
													placeholder="Search"
												/>
												<button
													className="btn btn-secondary my-2 my-sm-0"
													type="submit"
												>
													Search
												</button>
											</form>
										</div>
									</div>
								</nav>
                              {/* -------------- */}
							</div>
							<div className="bs-component">
								<nav className="navbar navbar-expand-lg navbar-light bg-light">
									<div className="container-fluid">
										<a className="navbar-brand" href="#">
											Navbar
										</a>
										<button
											className="navbar-toggler"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#navbarColor03"
											aria-controls="navbarColor03"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span className="navbar-toggler-icon" />
										</button>
										<div
											className="collapse navbar-collapse"
											id="navbarColor03"
										>
											<ul className="navbar-nav me-auto">
												<li className="nav-item">
													<a className="nav-link active" href="#">
														Home
														<span className="visually-hidden">(current)</span>
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Features
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														Pricing
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">
														About
													</a>
												</li>
												<li className="nav-item dropdown">
													<a
														className="nav-link dropdown-toggle"
														data-bs-toggle="dropdown"
														href="#"
														aria-haspopup="true"
														aria-expanded="false"
													>
														Dropdown
													</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">
															Action
														</a>
														<a className="dropdown-item" href="#">
															Another action
														</a>
														<a className="dropdown-item" href="#">
															Something else here
														</a>
														<div className="dropdown-divider" />
														<a className="dropdown-item" href="#">
															Separated link
														</a>
													</div>
												</li>
											</ul>
											<form className="d-flex">
												<input
													className="form-control me-sm-2"
													type="text"
													placeholder="Search"
												/>
												<button
													className="btn btn-secondary my-2 my-sm-0"
													type="submit"
												>
													Search
												</button>
											</form>
										</div>
									</div>
								</nav>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>

				{/* Buttons ================================================== */}

				<div className="bs-docs-section">
					<div className="page-header">
						<div className="row">
							<div className="col-lg-12">
								<h1 id="buttons">Buttons</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-7">
							<p className="bs-component">
								<button type="button" className="btn btn-primary">
									Primary
								</button>
								<button type="button" className="btn btn-secondary">
									Secondary
								</button>
								<button type="button" className="btn btn-success">
									Success
								</button>
								<button type="button" className="btn btn-info">
									Info
								</button>
								<button type="button" className="btn btn-warning">
									Warning
								</button>
								<button type="button" className="btn btn-danger">
									Danger
								</button>
								<button type="button" className="btn btn-light">
									Light
								</button>
								<button type="button" className="btn btn-dark">
									Dark
								</button>
								<button type="button" className="btn btn-link">
									Link
								</button>
                              {/* -------------- */}
							</p>
							<p className="bs-component">
								<button type="button" className="btn btn-primary disabled">
									Primary
								</button>
								<button type="button" className="btn btn-secondary disabled">
									Secondary
								</button>
								<button type="button" className="btn btn-success disabled">
									Success
								</button>
								<button type="button" className="btn btn-info disabled">
									Info
								</button>
								<button type="button" className="btn btn-warning disabled">
									Warning
								</button>
								<button type="button" className="btn btn-danger disabled">
									Danger
								</button>
								<button type="button" className="btn btn-light disabled">
									Light
								</button>
								<button type="button" className="btn btn-dark disabled">
									Dark
								</button>
								<button type="button" className="btn btn-link disabled">
									Link
								</button>
                              {/* -------------- */}
							</p>
							<p className="bs-component">
								<button type="button" className="btn btn-outline-primary">
									Primary
								</button>
								<button type="button" className="btn btn-outline-secondary">
									Secondary
								</button>
								<button type="button" className="btn btn-outline-success">
									Success
								</button>
								<button type="button" className="btn btn-outline-info">
									Info
								</button>
								<button type="button" className="btn btn-outline-warning">
									Warning
								</button>
								<button type="button" className="btn btn-outline-danger">
									Danger
								</button>
								<button type="button" className="btn btn-outline-light">
									Light
								</button>
								<button type="button" className="btn btn-outline-dark">
									Dark
								</button>
                              {/* -------------- */}
							</p>
							<div className="bs-component">
								<div
									className="btn-group"
									role="group"
									aria-label="Button group with nested dropdown"
								>
									<button type="button" className="btn btn-primary">
										Primary
									</button>
									<div className="btn-group" role="group">
										<button
											id="btnGroupDrop1"
											type="button"
											className="btn btn-primary dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										/>
										<div
											className="dropdown-menu"
											aria-labelledby="btnGroupDrop1"
										>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
										</div>
									</div>
								</div>
								<div
									className="btn-group"
									role="group"
									aria-label="Button group with nested dropdown"
								>
									<button type="button" className="btn btn-success">
										Success
									</button>
									<div className="btn-group" role="group">
										<button
											id="btnGroupDrop2"
											type="button"
											className="btn btn-success dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										/>
										<div
											className="dropdown-menu"
											aria-labelledby="btnGroupDrop2"
										>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
										</div>
									</div>
								</div>
								<div
									className="btn-group"
									role="group"
									aria-label="Button group with nested dropdown"
								>
									<button type="button" className="btn btn-info">
										Info
									</button>
									<div className="btn-group" role="group">
										<button
											id="btnGroupDrop3"
											type="button"
											className="btn btn-info dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										/>
										<div
											className="dropdown-menu"
											aria-labelledby="btnGroupDrop3"
										>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
										</div>
									</div>
								</div>
								<div
									className="btn-group"
									role="group"
									aria-label="Button group with nested dropdown"
								>
									<button type="button" className="btn btn-danger">
										Danger
									</button>
									<div className="btn-group" role="group">
										<button
											id="btnGroupDrop4"
											type="button"
											className="btn btn-danger dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										/>
										<div
											className="dropdown-menu"
											aria-labelledby="btnGroupDrop4"
										>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
											<a className="dropdown-item" href="#">
												Dropdown link
											</a>
										</div>
									</div>
								</div>
                              {/* -------------- */}
							</div>
							<div className="bs-component">
								<button type="button" className="btn btn-primary btn-lg">
									Large button
								</button>
								<button type="button" className="btn btn-primary">
									Default button
								</button>
								<button type="button" className="btn btn-primary btn-sm">
									Small button
								</button>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-5">
							<div className="bs-component">
								<div className="d-grid gap-2">
									<button className="btn btn-lg btn-primary" type="button">
										Block button
									</button>
									<button className="btn btn-lg btn-primary" type="button">
										Block button
									</button>
								</div>
                              {/* -------------- */}
							</div>
							<div className="bs-component mb-3">
								<div
									className="btn-group"
									role="group"
									aria-label="Basic checkbox toggle button group"
								>
									<input
										type="checkbox"
										className="btn-check"
										id="btncheck1"
										defaultChecked
										autoComplete="off"
									/>
									<label className="btn btn-primary" htmlFor="btncheck1">
										Checkbox 1
									</label>
									<input
										type="checkbox"
										className="btn-check"
										id="btncheck2"
										autoComplete="off"
									/>
									<label className="btn btn-primary" htmlFor="btncheck2">
										Checkbox 2
									</label>
									<input
										type="checkbox"
										className="btn-check"
										id="btncheck3"
										autoComplete="off"
									/>
									<label className="btn btn-primary" htmlFor="btncheck3">
										Checkbox 3
									</label>
								</div>
                              {/* -------------- */}
							</div>
							<div className="bs-component mb-3">
								<div
									className="btn-group"
									role="group"
									aria-label="Basic radio toggle button group"
								>
									<input
										type="radio"
										className="btn-check"
										name="btnradio"
										id="btnradio1"
										autoComplete="off"
										defaultChecked
									/>
									<label
										className="btn btn-outline-primary"
										htmlFor="btnradio1"
									>
										Radio 1
									</label>
									<input
										type="radio"
										className="btn-check"
										name="btnradio"
										id="btnradio2"
										autoComplete="off"
										defaultChecked
									/>
									<label
										className="btn btn-outline-primary"
										htmlFor="btnradio2"
									>
										Radio 2
									</label>
									<input
										type="radio"
										className="btn-check"
										name="btnradio"
										id="btnradio3"
										autoComplete="off"
										defaultChecked
									/>
									<label
										className="btn btn-outline-primary"
										htmlFor="btnradio3"
									>
										Radio 3
									</label>
								</div>
                              {/* -------------- */}
							</div>
							<div className="bs-component">
								<div className="btn-group-vertical">
									<button type="button" className="btn btn-primary">
										Button
									</button>
									<button type="button" className="btn btn-primary">
										Button
									</button>
									<button type="button" className="btn btn-primary">
										Button
									</button>
									<button type="button" className="btn btn-primary">
										Button
									</button>
									<button type="button" className="btn btn-primary">
										Button
									</button>
									<button type="button" className="btn btn-primary">
										Button
									</button>
								</div>
                              {/* -------------- */}
							</div>
							<div className="bs-component mb-3">
								<div
									className="btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button type="button" className="btn btn-secondary">
										Left
									</button>
									<button type="button" className="btn btn-secondary">
										Middle
									</button>
									<button type="button" className="btn btn-secondary">
										Right
									</button>
								</div>
                              {/* -------------- */}
							</div>
							<div className="bs-component mb-3">
								<div
									className="btn-toolbar"
									role="toolbar"
									aria-label="Toolbar with button groups"
								>
									<div
										className="btn-group me-2"
										role="group"
										aria-label="First group"
									>
										<button type="button" className="btn btn-secondary">
											1
										</button>
										<button type="button" className="btn btn-secondary">
											2
										</button>
										<button type="button" className="btn btn-secondary">
											3
										</button>
										<button type="button" className="btn btn-secondary">
											4
										</button>
									</div>
									<div
										className="btn-group me-2"
										role="group"
										aria-label="Second group"
									>
										<button type="button" className="btn btn-secondary">
											5
										</button>
										<button type="button" className="btn btn-secondary">
											6
										</button>
										<button type="button" className="btn btn-secondary">
											7
										</button>
									</div>
									<div
										className="btn-group"
										role="group"
										aria-label="Third group"
									>
										<button type="button" className="btn btn-secondary">
											8
										</button>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>
				{/* Typography ================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="typography">Typography</h1>
							</div>
						</div>
					</div>
					{/* Headings */}
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<h1>Heading 1</h1>
								<h2>Heading 2</h2>
								<h3>Heading 3</h3>
								<h4>Heading 4</h4>
								<h5>Heading 5</h5>
								<h6>Heading 6</h6>
								<h3>
									Heading
									<small className="text-muted">with muted text</small>
								</h3>
								<p className="lead">
									Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
									auctor.
								</p>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<h2>Example body text</h2>
								<p>
									Nullam quis risus eget <a href="#">urna mollis ornare</a> vel
									eu leo. Cum sociis natoque penatibus et magnis dis parturient
									montes, nascetur ridiculus mus. Nullam id dolor id nibh
									ultricies vehicula.
								</p>
								<p>
									<small>
										This line of text is meant to be treated as fine print.
									</small>
								</p>
								<p>
									The following is <strong>rendered as bold text</strong>.
								</p>
								<p>
									The following is <em>rendered as italicized text</em>.
								</p>
								<p>
									An abbreviation of the word attribute is{" "}
									<abbr title="attribute">attr</abbr>.
								</p>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<h2>Emphasis classes</h2>
								<p className="text-muted">
									Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
								</p>
								<p className="text-primary">
									Nullam id dolor id nibh ultricies vehicula ut id elit.
								</p>
								<p className="text-secondary">
									Pellentesque ornare sem lacinia quam venenatis vestibulum.
								</p>
								<p className="text-warning">
									Etiam porta sem malesuada magna mollis euismod.
								</p>
								<p className="text-danger">
									Donec ullamcorper nulla non metus auctor fringilla.
								</p>
								<p className="text-success">
									Duis mollis, est non commodo luctus, nisi erat porttitor
									ligula.
								</p>
								<p className="text-info">
									Maecenas sed diam eget risus varius blandit sit amet non
									magna.
								</p>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					{/* Blockquotes */}
					<div className="row">
						<div className="col-lg-12">
							<h2 id="type-blockquotes">Blockquotes</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<figure>
									<blockquote className="blockquote">
										<p className="mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer posuere erat a ante.
										</p>
									</blockquote>
									<figcaption className="blockquote-footer">
										Someone famous in{" "}
										<cite title="Source Title">Source Title</cite>
									</figcaption>
								</figure>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<figure className="text-center">
									<blockquote className="blockquote">
										<p className="mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer posuere erat a ante.
										</p>
									</blockquote>
									<figcaption className="blockquote-footer">
										Someone famous in{" "}
										<cite title="Source Title">Source Title</cite>
									</figcaption>
								</figure>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<figure className="text-end">
									<blockquote className="blockquote">
										<p className="mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer posuere erat a ante.
										</p>
									</blockquote>
									<figcaption className="blockquote-footer">
										Someone famous in{" "}
										<cite title="Source Title">Source Title</cite>
									</figcaption>
								</figure>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>
				{/* Tables
================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="tables">Tables</h1>
							</div>
							<div className="bs-component">
								<table className="table table-hover">
									<thead>
										<tr>
											<th scope="col">Type</th>
											<th scope="col">Column heading</th>
											<th scope="col">Column heading</th>
											<th scope="col">Column heading</th>
										</tr>
									</thead>
									<tbody>
										<tr className="table-active">
											<th scope="row">Active</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr>
											<th scope="row">Default</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-primary">
											<th scope="row">Primary</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-secondary">
											<th scope="row">Secondary</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-success">
											<th scope="row">Success</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-danger">
											<th scope="row">Danger</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-warning">
											<th scope="row">Warning</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-info">
											<th scope="row">Info</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-light">
											<th scope="row">Light</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
										<tr className="table-dark">
											<th scope="row">Dark</th>
											<td>Column content</td>
											<td>Column content</td>
											<td>Column content</td>
										</tr>
									</tbody>
								</table>
                              {/* -------------- */}
							</div>
							{/* /example */}
						</div>
					</div>
				</div>
				{/* Forms
================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="forms">Forms</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="bs-component">
								<form>
									<fieldset>
										<legend>Legend</legend>
										<div className="form-group row">
											<label
												htmlFor="staticEmail"
												className="col-sm-2 col-form-label"
											>
												Email
											</label>
											<div className="col-sm-10">
												<input
													type="text"
													readOnly
													className="form-control-plaintext"
													id="staticEmail"
													defaultValue="email@example.com"
												/>
											</div>
										</div>
										<div className="form-group">
											<label
												htmlFor="exampleInputEmail1"
												className="form-label mt-4"
											>
												Email address
											</label>
											<input
												type="email"
												className="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
											<small id="emailHelp" className="form-text text-muted">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div className="form-group">
											<label
												htmlFor="exampleInputPassword1"
												className="form-label mt-4"
											>
												Password
											</label>
											<input
												type="password"
												className="form-control"
												id="exampleInputPassword1"
												placeholder="Password"
											/>
										</div>
										<div className="form-group">
											<label
												htmlFor="exampleSelect1"
												className="form-label mt-4"
											>
												Example select
											</label>
											<select className="form-select" id="exampleSelect1">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label
												htmlFor="exampleSelect2"
												className="form-label mt-4"
											>
												Example multiple select
											</label>
											<select
												multiple
												className="form-select"
												id="exampleSelect2"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label
												htmlFor="exampleTextarea"
												className="form-label mt-4"
											>
												Example textarea
											</label>
											<textarea
												className="form-control"
												id="exampleTextarea"
												rows={3}
												defaultValue={""}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="formFile" className="form-label mt-4">
												Default file input example
											</label>
											<input
												className="form-control"
												type="file"
												id="formFile"
											/>
										</div>
										<fieldset className="form-group">
											<legend className="mt-4">Radio buttons</legend>
											<div className="form-check">
												<label className="form-check-label">
													<input
														type="radio"
														className="form-check-input"
														name="optionsRadios"
														id="optionsRadios1"
														defaultValue="option1"
														defaultChecked
													/>
													Option one is this and that—be sure to include why
													it's great
												</label>
											</div>
											<div className="form-check">
												<label className="form-check-label">
													<input
														type="radio"
														className="form-check-input"
														name="optionsRadios"
														id="optionsRadios2"
														defaultValue="option2"
													/>
													Option two can be something else and selecting it will
													deselect option one
												</label>
											</div>
											<div className="form-check disabled">
												<label className="form-check-label">
													<input
														type="radio"
														className="form-check-input"
														name="optionsRadios"
														id="optionsRadios3"
														defaultValue="option3"
														disabled
													/>
													Option three is disabled
												</label>
											</div>
										</fieldset>
										<fieldset className="form-group">
											<legend className="mt-4">Checkboxes</legend>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													defaultValue
													id="flexCheckDefault"
												/>
												<label
													className="form-check-label"
													htmlFor="flexCheckDefault"
												>
													Default checkbox
												</label>
											</div>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													defaultValue
													id="flexCheckChecked"
													defaultChecked
												/>
												<label
													className="form-check-label"
													htmlFor="flexCheckChecked"
												>
													Checked checkbox
												</label>
											</div>
										</fieldset>
										<fieldset>
											<legend className="mt-4">Switches</legend>
											<div className="form-check form-switch">
												<input
													className="form-check-input"
													type="checkbox"
													id="flexSwitchCheckDefault"
												/>
												<label
													className="form-check-label"
													htmlFor="flexSwitchCheckDefault"
												>
													Default switch checkbox input
												</label>
											</div>
											<div className="form-check form-switch">
												<input
													className="form-check-input"
													type="checkbox"
													id="flexSwitchCheckChecked"
													defaultChecked
												/>
												<label
													className="form-check-label"
													htmlFor="flexSwitchCheckChecked"
												>
													Checked switch checkbox input
												</label>
											</div>
										</fieldset>
										<fieldset className="form-group">
											<legend className="mt-4">Ranges</legend>
											<label htmlFor="customRange1" className="form-label">
												Example range
											</label>
											<input
												type="range"
												className="form-range"
												id="customRange1"
											/>
											<label htmlFor="disabledRange" className="form-label">
												Disabled range
											</label>
											<input
												type="range"
												className="form-range"
												id="disabledRange"
												disabled
											/>
											<label htmlFor="customRange3" className="form-label">
												Example range
											</label>
											<input
												type="range"
												className="form-range"
												min={0}
												max={5}
												step="0.5"
												id="customRange3"
											/>
										</fieldset>
										<button type="submit" className="btn btn-primary">
											Submit
										</button>
									</fieldset>
								</form>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4 offset-lg-1">
							<form className="bs-component">
								<div className="form-group">
									<fieldset disabled>
										<label className="form-label" htmlFor="disabledInput">
											Disabled input
										</label>
										<input
											className="form-control"
											id="disabledInput"
											type="text"
											placeholder="Disabled input here..."
											disabled
										/>
									</fieldset>
								</div>
								<div className="form-group">
									<fieldset>
										<label className="form-label mt-4" htmlFor="readOnlyInput">
											Readonly input
										</label>
										<input
											className="form-control"
											id="readOnlyInput"
											type="text"
											placeholder="Readonly input here..."
											readOnly
										/>
									</fieldset>
								</div>
								<div className="form-group has-success">
									<label className="form-label mt-4" htmlFor="inputValid">
										Valid input
									</label>
									<input
										type="text"
										defaultValue="correct value"
										className="form-control is-valid"
										id="inputValid"
									/>
									<div className="valid-feedback">Success! You've done it.</div>
								</div>
								<div className="form-group has-danger">
									<label className="form-label mt-4" htmlFor="inputInvalid">
										Invalid input
									</label>
									<input
										type="text"
										defaultValue="wrong value"
										className="form-control is-invalid"
										id="inputInvalid"
									/>
									<div className="invalid-feedback">
										Sorry, that username's taken. Try another?
									</div>
								</div>
								<div className="form-group">
									<label
										className="col-form-label col-form-label-lg mt-4"
										htmlFor="inputLarge"
									>
										Large input
									</label>
									<input
										className="form-control form-control-lg"
										type="text"
										placeholder=".form-control-lg"
										id="inputLarge"
									/>
								</div>
								<div className="form-group">
									<label className="col-form-label mt-4" htmlFor="inputDefault">
										Default input
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Default input"
										id="inputDefault"
									/>
								</div>
								<div className="form-group">
									<label
										className="col-form-label col-form-label-sm mt-4"
										htmlFor="inputSmall"
									>
										Small input
									</label>
									<input
										className="form-control form-control-sm"
										type="text"
										placeholder=".form-control-sm"
										id="inputSmall"
									/>
								</div>
								<div className="form-group">
									<label className="form-label mt-4">Input addons</label>
									<div className="form-group">
										<div className="input-group mb-3">
											<span className="input-group-text">$</span>
											<input
												type="text"
												className="form-control"
												aria-label="Amount (to the nearest dollar)"
											/>
											<span className="input-group-text">.00</span>
										</div>
										<div className="input-group mb-3">
											<input
												type="text"
												className="form-control"
												placeholder="Recipient's username"
												aria-label="Recipient's username"
												aria-describedby="button-addon2"
											/>
											<button
												className="btn btn-primary"
												type="button"
												id="button-addon2"
											>
												Button
											</button>
										</div>
									</div>
								</div>
								<div className="form-group">
									<label className="form-label mt-4">Floating labels</label>
									<div className="form-floating mb-3">
										<input
											type="email"
											className="form-control"
											id="floatingInput"
											placeholder="name@example.com"
										/>
										<label htmlFor="floatingInput">Email address</label>
									</div>
									<div className="form-floating">
										<input
											type="password"
											className="form-control"
											id="floatingPassword"
											placeholder="Password"
										/>
										<label htmlFor="floatingPassword">Password</label>
									</div>
								</div>
                              {/* -------------- */}
							</form>
						</div>
					</div>
				</div>
				{/* Navs
================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="navs">Navs</h1>
							</div>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col-lg-6">
							<h2 id="nav-tabs">Tabs</h2>
							<div className="bs-component">
								<ul className="nav nav-tabs">
									<li className="nav-item">
										<a
											className="nav-link active"
											data-bs-toggle="tab"
											href="#home"
										>
											Home
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											data-bs-toggle="tab"
											href="#profile"
										>
											Profile
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link disabled" href="#">
											Disabled
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											data-bs-toggle="dropdown"
											href="#"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Dropdown
										</a>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#">
												Action
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<a className="dropdown-item" href="#">
												Something else here
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Separated link
											</a>
										</div>
									</li>
								</ul>
								<div id="myTabContent" className="tab-content">
									<div className="tab-pane fade show active" id="home">
										<p>
											Raw denim you probably haven't heard of them jean shorts
											Austin. Nesciunt tofu stumptown aliqua, retro synth master
											cleanse. Mustache cliche tempor, williamsburg carles vegan
											helvetica. Reprehenderit butcher retro keffiyeh
											dreamcatcher synth. Cosby sweater eu banh mi, qui irure
											terry richardson ex squid. Aliquip placeat salvia cillum
											iphone. Seitan aliquip quis cardigan american apparel,
											butcher voluptate nisi qui.
										</p>
									</div>
									<div className="tab-pane fade" id="profile">
										<p>
											Food truck fixie locavore, accusamus mcsweeney's marfa
											nulla single-origin coffee squid. Exercitation +1 labore
											velit, blog sartorial PBR leggings next level wes anderson
											artisan four loko farm-to-table craft beer twee. Qui photo
											booth letterpress, commodo enim craft beer mlkshk aliquip
											jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
											organic, assumenda labore aesthetic magna delectus mollit.
										</p>
									</div>
									<div className="tab-pane fade" id="dropdown1">
										<p>
											Etsy mixtape wayfarers, ethical wes anderson tofu before
											they sold out mcsweeney's organic lomo retro fanny pack
											lo-fi farm-to-table readymade. Messenger bag gentrify
											pitchfork tattooed craft beer, iphone skateboard locavore
											carles etsy salvia banksy hoodie helvetica. DIY synth PBR
											banksy irony. Leggings gentrify squid 8-bit cred
											pitchfork.
										</p>
									</div>
									<div className="tab-pane fade" id="dropdown2">
										<p>
											Trust fund seitan letterpress, keytar raw denim keffiyeh
											etsy art party before they sold out master cleanse
											gluten-free squid scenester freegan cosby sweater. Fanny
											pack portland seitan DIY, art party locavore wolf cliche
											high life echo park Austin. Cred vinyl keffiyeh DIY salvia
											PBR, banh mi before they sold out farm-to-table VHS viral
											locavore cosby sweater.
										</p>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-6">
							<h2 id="nav-pills">Pills</h2>
							<div className="bs-component">
								<ul className="nav nav-pills">
									<li className="nav-item">
										<a className="nav-link active" href="#">
											Active
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											data-bs-toggle="dropdown"
											href="#"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Dropdown
										</a>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#">
												Action
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<a className="dropdown-item" href="#">
												Something else here
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Separated link
											</a>
										</div>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Link
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link disabled" href="#">
											Disabled
										</a>
									</li>
								</ul>
                              {/* -------------- */}
							</div>
							<br />
							<div className="bs-component">
								<ul className="nav nav-pills flex-column">
									<li className="nav-item">
										<a className="nav-link active" href="#">
											Active
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											data-bs-toggle="dropdown"
											href="#"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Dropdown
										</a>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#">
												Action
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<a className="dropdown-item" href="#">
												Something else here
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Separated link
											</a>
										</div>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Link
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link disabled" href="#">
											Disabled
										</a>
									</li>
								</ul>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<h2 id="nav-breadcrumbs">Breadcrumbs</h2>
							<div className="bs-component">
								<ol className="breadcrumb">
									<li className="breadcrumb-item active">Home</li>
								</ol>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="#">Home</a>
									</li>
									<li className="breadcrumb-item active">Library</li>
								</ol>
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="#">Home</a>
									</li>
									<li className="breadcrumb-item">
										<a href="#">Library</a>
									</li>
									<li className="breadcrumb-item active">Data</li>
								</ol>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-6">
							<h2 id="pagination">Pagination</h2>
							<div className="bs-component">
								<div>
									<ul className="pagination">
										<li className="page-item disabled">
											<a className="page-link" href="#">
												«
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												4
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												5
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												»
											</a>
										</li>
									</ul>
								</div>
								<div>
									<ul className="pagination pagination-lg">
										<li className="page-item disabled">
											<a className="page-link" href="#">
												«
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												4
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												5
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												»
											</a>
										</li>
									</ul>
								</div>
								<div>
									<ul className="pagination pagination-sm">
										<li className="page-item disabled">
											<a className="page-link" href="#">
												«
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												4
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												5
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												»
											</a>
										</li>
									</ul>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>
				{/* Indicators
================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="indicators">Indicators</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<h2>Alerts</h2>
							<div className="bs-component">
								<div className="alert alert-dismissible alert-warning">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<h4 className="alert-heading">Warning!</h4>
									<p className="mb-0">
										Best check yo self, you're not looking too good. Nulla vitae
										elit libero, a pharetra augue. Praesent commodo cursus
										magna,{" "}
										<a href="#" className="alert-link">
											vel scelerisque nisl consectetur et
										</a>
										.
									</p>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="alert alert-dismissible alert-danger">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<strong>Oh snap!</strong>{" "}
									<a href="#" className="alert-link">
										Change a few things up
									</a>{" "}
									and try submitting again.
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="alert alert-dismissible alert-success">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<strong>Well done!</strong> You successfully read{" "}
									<a href="#" className="alert-link">
										this important alert message
									</a>
									.
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="alert alert-dismissible alert-info">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<strong>Heads up!</strong> This{" "}
									<a href="#" className="alert-link">
										alert needs your attention
									</a>
									, but it's not super important.
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="alert alert-dismissible alert-primary">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<strong>Oh snap!</strong>{" "}
									<a href="#" className="alert-link">
										Change a few things up
									</a>{" "}
									and try submitting again.
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="alert alert-dismissible alert-secondary">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<strong>Well done!</strong> You successfully read{" "}
									<a href="#" className="alert-link">
										this important alert message
									</a>
									.
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="alert alert-dismissible alert-light">
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="alert"
									/>
									<strong>Heads up!</strong> This{" "}
									<a href="#" className="alert-link">
										alert needs your attention
									</a>
									, but it's not super important.
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					<div>
						<h2>Badges</h2>
						<div className="bs-component mb-4">
							<span className="badge bg-primary">Primary</span>
							<span className="badge bg-secondary">Secondary</span>
							<span className="badge bg-success">Success</span>
							<span className="badge bg-danger">Danger</span>
							<span className="badge bg-warning">Warning</span>
							<span className="badge bg-info">Info</span>
							<span className="badge bg-light">Light</span>
							<span className="badge bg-dark">Dark</span>
						</div>
						<div className="bs-component">
							<span className="badge rounded-pill bg-primary">Primary</span>
							<span className="badge rounded-pill bg-secondary">Secondary</span>
							<span className="badge rounded-pill bg-success">Success</span>
							<span className="badge rounded-pill bg-danger">Danger</span>
							<span className="badge rounded-pill bg-warning">Warning</span>
							<span className="badge rounded-pill bg-info">Info</span>
							<span className="badge rounded-pill bg-light">Light</span>
						</div>
					</div>
				</div>
				{/* Progress ================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="progress">Progress</h1>
							</div>
							<h3 id="progress-basic">Basic</h3>
							<div className="bs-component">
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "25%" }}
										aria-valuenow={25}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
                              {/* -------------- */}
							</div>
							<h3 id="progress-alternatives">Contextual alternatives</h3>
							<div className="bs-component">
								<div className="progress">
									<div
										className="progress-bar bg-success"
										role="progressbar"
										style={{ width: "25%" }}
										aria-valuenow={25}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar bg-info"
										role="progressbar"
										style={{ width: "50%" }}
										aria-valuenow={50}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar bg-warning"
										role="progressbar"
										style={{ width: "75%" }}
										aria-valuenow={75}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar bg-danger"
										role="progressbar"
										style={{ width: "100%" }}
										aria-valuenow={100}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
                              {/* -------------- */}
							</div>
							<h3 id="progress-multiple">Multiple bars</h3>
							<div className="bs-component">
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: "15%" }}
										aria-valuenow={15}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
									<div
										className="progress-bar bg-success"
										role="progressbar"
										style={{ width: "30%" }}
										aria-valuenow={30}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
									<div
										className="progress-bar bg-info"
										role="progressbar"
										style={{ width: "20%" }}
										aria-valuenow={20}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
                              {/* -------------- */}
							</div>
							<h3 id="progress-striped">Striped</h3>
							<div className="bs-component">
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped"
										role="progressbar"
										style={{ width: "10%" }}
										aria-valuenow={10}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped bg-success"
										role="progressbar"
										style={{ width: "25%" }}
										aria-valuenow={25}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped bg-info"
										role="progressbar"
										style={{ width: "50%" }}
										aria-valuenow={50}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped bg-warning"
										role="progressbar"
										style={{ width: "75%" }}
										aria-valuenow={75}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped bg-danger"
										role="progressbar"
										style={{ width: "100%" }}
										aria-valuenow={100}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
                              {/* -------------- */}
							</div>
							<h3 id="progress-animated">Animated</h3>
							<div className="bs-component">
								<div className="progress">
									<div
										className="progress-bar progress-bar-striped progress-bar-animated"
										role="progressbar"
										aria-valuenow={75}
										aria-valuemin={0}
										aria-valuemax={100}
										style={{ width: "75%" }}
									/>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>
				{/* Containers
================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="containers">Containers</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<h2>List groups</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<ul className="list-group">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Cras justo odio
										<span className="badge bg-primary rounded-pill">14</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Dapibus ac facilisis in
										<span className="badge bg-primary rounded-pill">2</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Morbi leo risus
										<span className="badge bg-primary rounded-pill">1</span>
									</li>
								</ul>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="list-group">
									<a
										href="#"
										className="list-group-item list-group-item-action active"
									>
										Cras justo odio
									</a>
									<a
										href="#"
										className="list-group-item list-group-item-action"
									>
										Dapibus ac facilisis in
									</a>
									<a
										href="#"
										className="list-group-item list-group-item-action disabled"
									>
										Morbi leo risus
									</a>
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="list-group">
									<a
										href="#"
										className="list-group-item list-group-item-action flex-column align-items-start active"
									>
										<div className="d-flex w-100 justify-content-between">
											<h5 className="mb-1">List group item heading</h5>
											<small>3 days ago</small>
										</div>
										<p className="mb-1">
											Donec id elit non mi porta gravida at eget metus. Maecenas
											sed diam eget risus varius blandit.
										</p>
										<small>Donec id elit non mi porta.</small>
									</a>
									<a
										href="#"
										className="list-group-item list-group-item-action flex-column align-items-start"
									>
										<div className="d-flex w-100 justify-content-between">
											<h5 className="mb-1">List group item heading</h5>
											<small className="text-muted">3 days ago</small>
										</div>
										<p className="mb-1">
											Donec id elit non mi porta gravida at eget metus. Maecenas
											sed diam eget risus varius blandit.
										</p>
										<small className="text-muted">
											Donec id elit non mi porta.
										</small>
									</a>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<h2>Cards</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<div
									className="card text-white bg-primary mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Primary card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card text-white bg-secondary mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Secondary card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card text-white bg-success mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Success card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card text-white bg-danger mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Danger card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card text-white bg-warning mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Warning card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card text-white bg-info mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Info card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card bg-light mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Light card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card text-white bg-dark mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Dark card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div
									className="card border-primary mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Primary card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-secondary mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Secondary card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-success mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Success card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-danger mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Danger card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-warning mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Warning card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-info mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Info card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-light mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Light card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
								<div
									className="card border-dark mb-3"
									style={{ maxWidth: "20rem" }}
								>
									<div className="card-header">Header</div>
									<div className="card-body">
										<h4 className="card-title">Dark card title</h4>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="card mb-3">
									<h3 className="card-header">Card header</h3>
									<div className="card-body">
										<h5 className="card-title">Special title treatment</h5>
										<h6 className="card-subtitle text-muted">
											Support card subtitle
										</h6>
									</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="d-block user-select-none"
										width="100%"
										height={200}
										aria-label="Placeholder: Image cap"
										focusable="false"
										role="img"
										preserveAspectRatio="xMidYMid slice"
										viewBox="0 0 318 180"
										style={{ fontSize: "1.125rem", textAnchor: "middle" }}
									>
										<rect width="100%" height="100%" fill="#868e96" />
										<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
											Image cap
										</text>
									</svg>
									<div className="card-body">
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
									</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">Cras justo odio</li>
										<li className="list-group-item">Dapibus ac facilisis in</li>
										<li className="list-group-item">Vestibulum at eros</li>
									</ul>
									<div className="card-body">
										<a href="#" className="card-link">
											Card link
										</a>
										<a href="#" className="card-link">
											Another link
										</a>
									</div>
									<div className="card-footer text-muted">2 days ago</div>
								</div>
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Card title</h4>
										<h6 className="card-subtitle mb-2 text-muted">
											Card subtitle
										</h6>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
										<a href="#" className="card-link">
											Card link
										</a>
										<a href="#" className="card-link">
											Another link
										</a>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-12">
							<h2>Accordions</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="bs-component">
								<div className="accordion" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingOne">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												Accordion Item #1
											</button>
										</h2>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											aria-labelledby="headingOne"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<strong>
													This is the first item's accordion body.
												</strong>{" "}
												It is shown by default, until the collapse plugin adds
												the appropriate classes that we use to style each
												element. These classes control the overall appearance,
												as well as the showing and hiding via CSS transitions.
												You can modify any of this with custom CSS or overriding
												our default variables. It's also worth noting that just
												about any HTML can go within the{" "}
												<code>.accordion-body</code>, though the transition does
												limit overflow.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingTwo">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												Accordion Item #2
											</button>
										</h2>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											aria-labelledby="headingTwo"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<strong>
													This is the second item's accordion body.
												</strong>{" "}
												It is hidden by default, until the collapse plugin adds
												the appropriate classes that we use to style each
												element. These classes control the overall appearance,
												as well as the showing and hiding via CSS transitions.
												You can modify any of this with custom CSS or overriding
												our default variables. It's also worth noting that just
												about any HTML can go within the{" "}
												<code>.accordion-body</code>, though the transition does
												limit overflow.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingThree">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												Accordion Item #3
											</button>
										</h2>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											aria-labelledby="headingThree"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<strong>
													This is the third item's accordion body.
												</strong>{" "}
												It is hidden by default, until the collapse plugin adds
												the appropriate classes that we use to style each
												element. These classes control the overall appearance,
												as well as the showing and hiding via CSS transitions.
												You can modify any of this with custom CSS or overriding
												our default variables. It's also worth noting that just
												about any HTML can go within the{" "}
												<code>.accordion-body</code>, though the transition does
												limit overflow.
											</div>
										</div>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>
				{/* Dialogs  ================================================== */}
				<div className="bs-docs-section">
					<div className="row">
						<div className="col-lg-12">
							<div className="page-header">
								<h1 id="dialogs">Dialogs</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<h2>Modals</h2>
							<div className="bs-component">
								<div className="modal">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title">Modal title</h5>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												>
													<span aria-hidden="true" />
												</button>
											</div>
											<div className="modal-body">
												<p>Modal body text goes here.</p>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-primary">
													Save changes
												</button>
												<button
													type="button"
													className="btn btn-secondary"
													data-bs-dismiss="modal"
												>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
						<div className="col-lg-6">
							<h2>Popovers</h2>
							<div className="bs-component mb-5">
								<button
									type="button"
									className="btn btn-secondary"
									title="popover-left"
									data-bs-container="body"
									data-bs-toggle="popover"
									data-bs-placement="left"
									data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
									data-bs-original-title="Popover Title"
								>
									Left
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									title="popover-top"
									data-bs-container="body"
									data-bs-toggle="popover"
									data-bs-placement="top"
									data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
									data-bs-original-title="Popover Title"
								>
									Top
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									title="btn-secondary"
									data-bs-container="body"
									data-bs-toggle="popover"
									data-bs-placement="bottom"
									data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
									data-bs-original-title="Popover Title"
								>
									Bottom
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									title="popover-right"
									data-bs-container="body"
									data-bs-toggle="popover"
									data-bs-placement="right"
									data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
									data-bs-original-title="Popover Title"
								>
									Right
								</button>
                              {/* -------------- */}
							</div>
							<h2>Tooltips</h2>
							<div
								className="bs-component mb-5"
								data-html='
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">Left</button>

        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Top</button>

        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">Bottom</button>

        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">Right</button>'
		>
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-toggle="tooltip"
									data-bs-placement="left"
									title="tooltip-left"
									data-bs-original-title="Tooltip on left"
								>
									Left
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="tooltip-top"
									data-bs-original-title="Tooltip on top"
								>
									Top
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									title="tooltip-bottom"
									data-bs-original-title="Tooltip on bottom"
								>
									Bottom
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-toggle="tooltip"
									data-bs-placement="right"
									title="tooltip-right"
									data-bs-original-title="Tooltip on right"
								>
									Right
								</button>
                              {/* -------------- */}
							</div>
							<h2>Toasts</h2>
							<div className="bs-component">
								<div
									className="toast show"
									role="alert"
									aria-live="assertive"
									aria-atomic="true"
								>
									<div className="toast-header">
										<strong className="me-auto">Bootstrap</strong>
										<small>11 mins ago</small>
										<button
											type="button"
											className="btn-close ms-2 mb-1"
											data-bs-dismiss="toast"
											aria-label="Close"
										>
											<span aria-hidden="true" />
										</button>
									</div>
									<div className="toast-body">
										Hello, world! This is a toast message.
									</div>
								</div>
                              {/* -------------- */}
							</div>
						</div>
					</div>
				</div>
				<div id="source-modal" className="modal fade" tabIndex={-1}>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Source Code</h4>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-hidden="true"
								/>
							</div>
							<div className="modal-body">
								<pre className="language-html">
									<code />
								</pre>
							</div>
						</div>
					</div>
				</div>

</Container>
	);
}

export default BootswatchDemo;