import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Widgets from "@material-ui/icons/Widgets";
import { ColumnToRow, Row, Item } from "@mui-treasury/components/flex";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import {
	SocialProvider,
	SocialLink,
} from "@mui-treasury/components/socialLink";

const Footer = React.memo(function NeptuneAppFooter() {
	return (
		<Box bgcolor={"background.paper"} width={"100%"}>
			<Container>
				<Box pt={8} pb={2}>
					<Row wrap>
						<Item grow={2}>
							<Row alignItems={"center"}>
								<Item color={"#007bff"} fontSize={64} lineHeight={0}>
									<Widgets fontSize={"inherit"} color={"inherit"} />
								</Item>
								<Item>
									<Typography variant={"h6"} color={"textSecondary"}>
										Bootswatch Theme Selector
									</Typography>
								</Item>
							</Row>
							<NavMenu>
								<NavItem>About</NavItem>
								<NavItem>Careers</NavItem>
								<NavItem>Press</NavItem>
								<NavItem>Customer Care</NavItem>
								<NavItem>Services</NavItem>
							</NavMenu>
						</Item>
						<Item grow maxWidth={500} mx={"auto"}>
							<Box textAlign={"center"} mt={{ xs: 2, md: 0 }} my={2}>
								<SocialProvider>
									<SocialLink
										brand={"FacebookCircle"}
										href={"https://github.com/alane019"}
									/>
									<SocialLink
										brand={"Twitter"}
										href={"https://github.com/alane019"}
									/>
									<SocialLink
										brand={"Instagram"}
										href={"https://github.com/alane019"}
									/>
								</SocialProvider>
							</Box>
						</Item>
					</Row>
				</Box>
				<Divider />
				<Box pt={2} pb={10}>
					<ColumnToRow
						at={"md"}
						columnStyle={{ alignItems: "center" }}
						rowStyle={{ alignItems: "unset" }}
					>
						<Item grow ml={-2} shrink={0}>
							<NavMenu>
								<ColumnToRow at={"sm"}>
									<NavItem>Terms &amp; Conditions</NavItem>
									<NavItem>Privacy Policy</NavItem>
									<NavItem>Accessibility</NavItem>
									<NavItem>Legal</NavItem>
								</ColumnToRow>
							</NavMenu>
						</Item>
					</ColumnToRow>
					<ColumnToRow
						className="footerColToRow"
						at={"md"}
						columnStyle={{ alignItems: "left" }}
						rowStyle={{ alignItems: "unset" }}
					>
						<Item>
							<Box
								id="footer-credits"
								py={1}
								textAlign={{ xs: "center", md: "center" }}
							>
								<Typography
									id="footer-credits"
									component={"p"}
									variant={"caption"}
									color={"textSecondary"}
								>
									Bootswatch Theme Selector Copyright &copy; 2022 Adam Lane is
									released under the{" "}
									<a href="https://raw.githubusercontent.com/alane019/bootswatch-theme-selector/main/LICENSE">
										MIT License
									</a>
									.
		
									Bootswatch was created by{" "}
									<a href="https://github.com/thomaspark">Thomas Park</a> under
									the MIT license.

									{" "}
									Bootstrap is a collaborative open source project created and
									maintained by the{" "}
									<a href="https://getbootstrap.com/docs/5.1/about/team/">
										Bootstrap Team
									</a>{" "}
									under the MIT license.
								</Typography>
							</Box>
						</Item>
					</ColumnToRow>
				</Box>
			</Container>
		</Box>
	);
});

export default Footer;
