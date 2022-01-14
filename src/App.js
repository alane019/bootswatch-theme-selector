
import "./App.css";																		
import axios from "axios";																		
import React, { useEffect, useState } from "react";																		
import BootswatchDemo from "./components/BootswatchDemo";																		
import Footer from "./components/Footer";																		
import Header from "./components/Header";																		
import { Container } from "react-bootstrap";																		
import "bootstrap/dist/css/bootstrap.min.css";
																
																		
import { DropdownButton, Dropdown } from "react-bootstrap";																		
																
const apiEndpoint = "https://bootswatch.com/api/5.json";																		
																		
function App() {																		
	const [theme, setTheme] = useState("");																																																
	const [themeList, setThemeList] = useState([]);																	
	const [themeHref, setThemeHref] = useState("");		
	//const [themeNameList, setThemeNameList] = useState([]);																	
	// const [cdnData, setCdnData] = useState("");																	
	
											
																			
	let handleSelectChange = (e) => {																
		console.log("e param in handle select change fn: ", e);															
		setTheme(e);																													
		let hrefText =															
			"https://cdn.jsdelivr.net/npm/bootswatch@5.1.1/dist/" +														
			e +														
			"/bootstrap.min.css";														
		setThemeHref(hrefText);													
	};			
																		
															
				
																		
	useEffect(() => { 
		//getCdnData()
		// const getCdnData = async () => {																	
			axios																
				.get(apiEndpoint)															
				.then((response) => {															
					console.log(response.data);														
					console.log("response.data.themes: ", response.data.themes);														
					// setCdnData(response.data.themes);																												
					if (theme){														
						setThemeHref(													
						"https://cdn.jsdelivr.net/npm/bootswatch@5.1.1/dist/" +												
								theme +											
								"/bootstrap.min.css"
						);													
					}																																										
					let themes = [];
					for (let i = 0; i < response.data.themes.length; i++) {														
						let themeData = {													
							name: response.data.themes[i].name.toLowerCase(),												
							css: response.data.themes[i].css,												
							cssCdn: response.data.themes[i].cssCdn,												
							cssMin: response.data.themes[i].cssMin,												
							description: response.data.themes[i].description,												
							preview: response.data.themes[i].preview,												
							scss: response.data.themes[i].scss,												
							scssVariables: response.data.themes[i].scssVariables,												
							thumbnail: response.data.themes[i].thumbnail,												
						};																																						
						themes.push(themeData);													
					}																											
					setThemeList(themes);																																				
				})															
				.catch((error) => {															
					console.error(error);														
				});																																
	}, []) // eslint-disable-line react-hooks/exhaustive-deps		
		
	let getThemeDescription = () => {																																								
		let themeDescr;
		if(themeList[0]){															
			let index = themeList.findIndex((item) => item.name === theme);														
			themeDescr = themeList[index].description;	
		}
		return themeDescr;													
	};		
													
	//var themeArray = [];																	
	var i = 0;																																		
	let themeArray = themeList;																	
			

	return(																																	
		<Container>																
			{/* <link href={"https://cdn.jsdelivr.net/npm/bootswatch@5.1.1/dist/" + theme + "/bootstrap.min.css"} rel="stylesheet" crossOrigin="anonymous" /> */}															
			{theme ? (															
				<link														
					href={themeHref}													
					type="text/css"													
					rel="stylesheet"													
					crossOrigin="anonymous"													
				/>														
			) : (	<span> </span>														
																		
			)}															
			<Header />															
																		
			{/* ////////////////////////////////////////////// */}															
																		
			<div className="container">															
				<br />														
				<div className="page-header select-theme" id="banner">														
				<div className="row">
					
				<div stye={{fontSize: "3rem"}}>	
				<a href="https://bootswatch.com/">Bootswatch</a> is collection 
				of open source themes for <a href="https://getbootstrap.com/">Bootstrap</a>.
				{"  "} Bootswatch Theme Selector allows you to preview each theme on a single page and 
				includes the link tag for the selected theme. 
				</div>	

				{theme ? "" : <b className="fade-in">
				  <div className="mt-2" ><span className="badge bg-dark">Use the drop down menu below to select a theme. </span>
				  </div></b> }
														
						<div className="col-lg-8 col-md-7 col-sm-6">												
							{theme ? (											
								<h1> {theme} </h1>										
							) : (											
								<div id="default">										
									<span> Default theme </span>									
									<span className="not-bold"> (Bootstrap 4.6.1) </span>									
								</div>										
							)}											
							<p className="lead">											
								{ theme										
									?  getThemeDescription()									
									: "Select a Bootswatch theme."									
								}										
							</p>											
						</div>												
						<div className="col-lg-4 col-md-5 col-sm-6"></div>												
					</div>													
				</div>														
																		
																		
								<DropdownButton										
									onSelect={handleSelectChange}									
									//title="Select a Theme"									
									 title={ theme ? theme : "Select a Theme"}									
									 id="theme-select-dropdown"																	
								>										
									{themeArray.map((arrayItem) => {									
										return (								
											<Dropdown.Item							
												className="dropdown-item"						
												key={"item-" + i++}						
												 eventKey={arrayItem.name}						
												value={arrayItem.name}						
												data-value={arrayItem.name}						
											>							
												{arrayItem.name}						
											</Dropdown.Item>							
										);								
									})}									
							</DropdownButton>											
																		
					{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}													
																													
																		
				{ theme ? (														
								<div										
									className="fade-in card text-black bg-light mb-3"									
									style={{ maxWidth: "95%" }}									
								>										
									<div className="card-body">	
									<div id="cdn-description">
										Use the CDN link tag below or visit the {" "}
										<a href={'https://bootswatch.com/' + theme + '/'}
										rel="noopener noreferrer" target="_blank">
										{theme} theme </a> {" "} page to download.
									</div>
									<div className="card bg-info mb-2"
											style={{maxWidth: "80%",
											margin: "auto"}}>	
											<div className="card-body">	
												<div className="text-white"> 
												{'<link href="' + themeHref + '" type="text/css" rel="stylesheet" crossOrigin="anonymous" />'}
											 </div>	
											</div>								
										</div>	
								    </div>								
								</div>										
				) :  "" }														
																		
																		
			</div>															
																		
			<hr></hr>															
																		
			<BootswatchDemo />															
																		
			{/* ////////////////////////////////////////////////// */}															
																		
			<Footer/>															
	 </Container>																	
  );																		
  																		
}																		
																		
export default App;	