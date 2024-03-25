import { Tab } from "@headlessui/react";
import PropTypes from "prop-types";
import { Button } from "..";

/**
 *
 * @param {{
 * tab: string[];
 * vertical: boolean;
 * children: React.ReactNode;
 * defaultindex: integer;
 * }}
 *
 */

const Tabs = ({ tab, vertical, children, defaultindex }) => {
	return (
		<Tab.Group
			defaultIndex={defaultindex}
			as="div"
			className={`${vertical ? "flex gap-4" : ""}`}
		>
			<Tab.List
				className={`flex flex-wrap gap-2 ${
					vertical ? "flex-col w-fit" : "mb-4"
				}`}
			>
				{tab &&
					tab.map((item, index) => (
						<Tab key={index} as="div" className={`outline-none`}>
							{({ selected }) => (
								<Button
									variant={selected ? "solid" : "text"}
									color={selected ? "primary" : "#888888"}
								>
									{item}
								</Button>
							)}
						</Tab>
					))}
			</Tab.List>
			<Tab.Panels className="flex-1">
				{children && children.length > 0 ? (
					children.map((child, index) => {
						return <Tab.Panel key={index}>{child}</Tab.Panel>;
					})
				) : (
					<Tab.Panel>{children}</Tab.Panel>
				)}
			</Tab.Panels>
		</Tab.Group>
	);
};

Tabs.propTypes = {
	tab: PropTypes.array,
	vertical: PropTypes.bool,
	children: PropTypes.node,
	defaultindex: PropTypes.number,
};

Tabs.defaultProps = {
	tab: [],
	vertical: false,
	children: null,
	defaultindex: 0,
};

export default Tabs;
