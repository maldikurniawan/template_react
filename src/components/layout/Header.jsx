import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { TbBell, TbLogout, TbMail, TbSettings, TbUser } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {
	Avatar,
	Badge,
	Button,
	ButtonDarkMode,
	ButtonRipple,
	List,
	Popover,
	Tooltip,
} from "..";
import moment from "moment";

const Header = ({ setSideOpen }) => {
	const { themeSkin, navbarType, colorMode, themeColor } =
		useContext(ThemeContext);

	const [dataNotif, setDataNotif] = useState([
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			read: false,
			date: "2023-11-14T11:25:33",
		},
		{
			id: 2,
			title: "Lorem ipsum dolor sit amet",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			read: false,
			date: "2023-11-14T10:59:33",
		},
		{
			id: 3,
			title: "Lorem ipsum dolor sit amet",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			read: false,
			date: "2023-11-01T01:25:33",
		},
		{
			id: 4,
			title: "Lorem ipsum dolor sit amet",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			read: false,
			date: "2023-10-01T11:25:33",
		},
	]);

	const navigate = useNavigate();

	return (
		<header
			className={`bg-base-50/30 dark:bg-neutral-900/10 backdrop-blur-sm h-20 px-6 pt-4 pb-0 top-0 w-full z-30 relative ${navbarType}`}
		>
			<div
				className={`w-full h-full flex justify-between items-center px-6 bg-white/80 dark:bg-base-600/80 backdrop-blur-sm rounded-md ${
					themeSkin === "default" ? "shadow-lg" : themeSkin
				}`}
			>
				<div>
					<div
						onClick={() => setSideOpen(true)}
						className="cursor-pointer block lg:hidden"
					>
						<HiOutlineMenu className="text-2xl" />
					</div>
				</div>

				<div className="flex items-center gap-4">
					<div className="flex items-center">
						{/* Dark Mode */}
						<Tooltip
							tooltip={colorMode === "light" ? "Dark Mode" : "Light Mode"}
							delay={500}
						>
							<ButtonDarkMode />
						</Tooltip>

						{/* Notification */}
						<Popover
							placement="bottom-end"
							spacing={20}
							rounded="md"
							button={
								<ButtonRipple className="p-2 rounded-full transition-[background] hover:bg-neutral-200 dark:hover:bg-base-500">
									<Badge
										hidden
										size="xl"
										placement="top-end"
										skidding={8}
										color="success"
									>
										<div className="text-2xl">
											<TbBell />
										</div>
									</Badge>
								</ButtonRipple>
							}
						>
							<div className="text-sm min-w-[360px]">
								<div>
									<div className="py-2 px-4 border-b dark:border-base-500 flex items-center justify-between">
										<div className="font-semibold">Notifications</div>
										<ButtonRipple className="p-2 rounded-full transition-[background] hover:bg-neutral-200 dark:hover:bg-base-500">
											<Badge
												size="xs"
												placement="right-start"
												skidding={-2}
												spacing={-8}
												color="success"
											>
												<TbMail className="text-lg" />
											</Badge>
										</ButtonRipple>
									</div>
									<div>
										{dataNotif.length > 0 ? (
											<div>
												<div className="max-h-[236px] overflow-y-auto custom-scroll">
													{dataNotif.map((item, itemIdx) => (
														<div
															key={itemIdx}
															className="p-4 py-3 hover:bg-base-50 dark:hover:bg-base-700 border-b dark:border-base-500 cursor-pointer flex items-start gap-2"
														>
															<div className="flex-1">
																<div className="text-sm font-medium leading-none mb-1">
																	{item.title}
																</div>
																<div className="text-xs text-base-100 dark:text-base-400">
																	{item.description}
																</div>
																<div className="text-[10px] text-base-100 dark:text-base-400">
																	{moment(
																		item.date,
																		"YYYY-MM-DDTHH:mm:ss"
																	).fromNow()}
																</div>
															</div>
															<div>
																<div
																	style={{
																		backgroundColor: themeColor,
																	}}
																	className="w-2 h-2 rounded-full mt-1"
																></div>
															</div>
														</div>
													))}
												</div>
												<div className="p-2 text-center border-t dark:border-base-500">
													<Button variant="text" color="primary" block>
														View All
													</Button>
												</div>
											</div>
										) : (
											<div className="p-4 py-10 w-full h-full flex items-center justify-center">
												No Notification
											</div>
										)}
									</div>
								</div>
							</div>
						</Popover>
					</div>

					{/* Profile */}
					<Popover
						placement="bottom-end"
						spacing={20}
						rounded="md"
						button={
							<ButtonRipple className="rounded-full">
								<Badge size="sm" placement="right-end" color="success">
									<Avatar color="primary">AD</Avatar>
								</Badge>
							</ButtonRipple>
						}
					>
						<div className="text-sm w-full md:min-w-[260px]">
							<div className="p-4 border-b dark:border-base-500">
								<div className="flex gap-2 items-center">
									<div className="w-fit">
										<Avatar color="primary">AD</Avatar>
									</div>
									<div>
										<div className="text-sm font-semibold whitespace-nowrap">
											Admin
										</div>
										<div className="text-xs">Admin</div>
									</div>
								</div>
							</div>
							<div className="p-2 font-medium border-b dark:border-base-500">
								<List prefix={<TbUser />} density="loose">
									Profile
								</List>
								<List prefix={<TbSettings />} density="loose">
									Settings
								</List>
							</div>
							<div className="p-2 font-medium">
								<List
									onClick={() => navigate("/login")}
									color="danger"
									prefix={<TbLogout />}
									density="loose"
								>
									Logout
								</List>
							</div>
						</div>
					</Popover>
				</div>
			</div>
		</header>
	);
};

export default Header;
