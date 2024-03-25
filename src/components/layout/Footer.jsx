import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<div className="p-6 text-xs">
			Copyright ©️ 2023{" "}
			<span
				style={{
					color: themeColor,
				}}
			>
				Queen Network Nusantara
			</span>
			. All rights reserved.
		</div>
	);
};

export default Footer;
