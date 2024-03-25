import { convertToRupiah } from "@/utils/convertToRupiah";
import angkaTerbilangJs from "@develoka/angka-terbilang-js";
import { forwardRef } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {{
 * type: 1 | 2 | 3;
 * data: object;
 * company: object;
 * logo: any;
 * }}
 *
 */

const Invoice = forwardRef(function Invoice(props, ref) {
	const { type, data, company, logo } = props;

	if (type === 1) {
		return (
			<div ref={ref} className="p-6 sm:p-10 overflow-x-auto">
				<div className="min-w-full w-max">
					<div className="flex justify-between items-start gap-x-20 gap-y-2 mb-8">
						<div>
							{/* Logo */}
							<div>
								<div className="font-bold text-4xl">{logo}</div>
							</div>
							<div className="text-sm mt-4">
								<div className="uppercase font-semibold">{company.name}</div>
								<div className="text-xs">{company.address}</div>
							</div>
						</div>
						<div className="w-fit text-left sm:text-right">
							<div className="font-bold text-4xl tracking-wider">INVOICE</div>
							<div className="text-sm font-medium">{data.invoiceNumber}</div>
						</div>
					</div>

					<div className="flex flex-wrap gap-x-20 gap-y-2 mb-8">
						<div className="text-sm">
							<div className="mb-1 font-semibold">BILL TO</div>
							<div>{data.customer.name}</div>
							<div>{data.customer.address}</div>
							<div>{data.customer.phone}</div>
						</div>
						<div className="text-sm">
							<div className="mb-1 font-semibold">INVOICE</div>
							<div>Cust. ID: {data.customer.id}</div>
							<div>Date: {data.date}</div>
							<div>Due Date: {data.dueDate}</div>
						</div>
					</div>

					<div className="text-sm mb-8 overflow-x-auto scrollbar-hide">
						<table className="w-full">
							<thead className="border-y dark:border-base-400">
								<tr>
									<th className="p-2 text-left">Description</th>
									<th className="p-2 text-left">Code</th>
									<th className="p-2 text-left">Quantity</th>
									<th className="p-2 text-left">Price</th>
									<th className="p-2 text-right">Sub Total</th>
								</tr>
							</thead>
							<tbody>
								{data.items.map((item, itemIdx) => (
									<tr key={itemIdx}>
										<td className="p-2">
											<div className="font-medium">{item.name}</div>
											<div className="text-xs">{item.description}</div>
										</td>
										<td className="p-2">{item.code}</td>
										<td className="p-2">{item.qty}</td>
										<td className="p-2">{convertToRupiah(item.price)}</td>
										<td className="p-2 text-right">
											{convertToRupiah(item.price * item.qty)}
										</td>
									</tr>
								))}

								<tr className="border-t dark:border-base-400">
									<td colSpan={4} className="pt-2 px-2 text-right">
										Sub Total
									</td>
									<td className="pt-2 px-2 text-right">
										{convertToRupiah(
											data.items.reduce(
												(acc, item) => acc + item.price * item.qty,
												0
											)
										)}
									</td>
								</tr>

								<tr>
									<td colSpan={4} className="px-2 text-right">
										Discount
									</td>
									<td className="px-2 text-right">
										{convertToRupiah(data.discount)}
									</td>
								</tr>

								<tr>
									<td colSpan={4} className="pb-2 px-2 text-right">
										Tax
									</td>
									<td className="pb-2 px-2 text-right">
										{convertToRupiah(data.tax)}
									</td>
								</tr>

								<tr className="border-t dark:border-base-400">
									<td colSpan={4} className="p-2 text-right">
										TOTAL
									</td>
									<td className="px-2 text-right font-semibold">
										{convertToRupiah(
											data.items.reduce(
												(acc, item) => acc + item.price * item.qty,
												0
											) -
												data.discount +
												data.tax
										)}
									</td>
								</tr>
							</tbody>
						</table>

						<div className="capitalize mt-2">
							<div className="font-medium italic">
								*
								{angkaTerbilangJs(
									data.items.reduce(
										(acc, item) => acc + item.price * item.qty,
										0
									) -
										data.discount +
										data.tax
								)}
							</div>
						</div>
					</div>

					<div className="mb-4">
						<div className="text-sm mb-1">
							<div className="mb-1 font-semibold">Our Bank Account:</div>
							<div>{company.bank.name}</div>
							<div>{company.bank.accountNumber}</div>
							<div>{company.bank.accountName}</div>
						</div>
						<div className="text-xs">
							If you have any questions about this invoice,
							<br />
							please contact us at: {company.phone}
						</div>
					</div>

					<div className="text-right text-sm relative mb-8 flex justify-end">
						<div>
							<div className="mb-2">Bandar Lampung, {data.date}</div>
							<div className="flex flex-col items-center">
								<div className="font-bold text-3xl mb-2">{logo}</div>
								<div>Finance</div>
							</div>
						</div>
					</div>

					<div className="text-xs">
						*Catatan: Untuk Menghindari Pemutusan Akses Internet, Mohon
						Melakukan Pembayaran Sebelum Tanggal Jatuh Tempo
					</div>
				</div>
			</div>
		);
	}

	if (type === 2) {
		return (
			<div ref={ref} className="p-6 sm:p-10 overflow-x-auto">
				<div className="min-w-full w-max">
					<div className="flex items-start gap-4 justify-between mb-8">
						<div>
							<div className="font-bold tracking-wider text-4xl mb-4">
								INVOICE
							</div>
							<div>
								<div className="uppercase font-semibold">{company.name}</div>
								<div className="text-xs">{company.address}</div>
							</div>
						</div>
						<div className="font-bold text-4xl">{logo}</div>
					</div>

					<div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-x-8 gap-y-4 text-sm mb-8">
						<div>
							<div className="font-bold mb-1">BILL TO</div>
							<div>{data.customer.name}</div>
							<div>{data.customer.address}</div>
							<div>{data.customer.phone}</div>
						</div>
						<div className="sm:text-right whitespace-nowrap">
							<div className="grid grid-cols-2 gap-6">
								<div className="font-bold">INVOICE</div>
								<div>{data.invoiceNumber}</div>
							</div>
							<div className="grid grid-cols-2 gap-6">
								<div className="font-bold">CUSTOMER ID</div>
								<div>{data.customer.id}</div>
							</div>
							<div className="grid grid-cols-2 gap-6">
								<div className="font-bold">DATE</div>
								<div>{data.date}</div>
							</div>
							<div className="grid grid-cols-2 gap-6">
								<div className="font-bold">DUE DATE</div>
								<div>{data.dueDate}</div>
							</div>
						</div>
					</div>

					<div className="text-sm mb-8 overflow-x-auto scrollbar-hide">
						<table className="w-full">
							<thead className="border-y dark:border-base-400">
								<tr>
									<th className="p-2 text-left">Description</th>
									<th className="p-2 text-left">Code</th>
									<th className="p-2 text-left">Quantity</th>
									<th className="p-2 text-left">Price</th>
									<th className="p-2 text-right">Sub Total</th>
								</tr>
							</thead>
							<tbody>
								{data.items.map((item, itemIdx) => (
									<tr key={itemIdx}>
										<td className="p-2">
											<div className="font-medium">{item.name}</div>
											<div className="text-xs">{item.description}</div>
										</td>
										<td className="p-2">{item.code}</td>
										<td className="p-2">{item.qty}</td>
										<td className="p-2">{convertToRupiah(item.price)}</td>
										<td className="p-2 text-right">
											{convertToRupiah(item.price * item.qty)}
										</td>
									</tr>
								))}

								<tr className="border-t dark:border-base-400">
									<td colSpan={4} className="pt-2 px-2 text-right">
										Sub Total
									</td>
									<td className="pt-2 px-2 text-right">
										{convertToRupiah(
											data.items.reduce(
												(acc, item) => acc + item.price * item.qty,
												0
											)
										)}
									</td>
								</tr>

								<tr>
									<td colSpan={4} className="px-2 text-right">
										Discount
									</td>
									<td className="px-2 text-right">
										{convertToRupiah(data.discount)}
									</td>
								</tr>

								<tr>
									<td colSpan={4} className="pb-2 px-2 text-right">
										Tax
									</td>
									<td className="pb-2 px-2 text-right">
										{convertToRupiah(data.tax)}
									</td>
								</tr>

								<tr className="border-t dark:border-base-400">
									<td colSpan={3} className="p-2 text-left">
										<div className="font-medium italic capitalize">
											*
											{angkaTerbilangJs(
												data.items.reduce(
													(acc, item) => acc + item.price * item.qty,
													0
												) -
													data.discount +
													data.tax
											)}
										</div>
									</td>
									<td className="p-2 text-right">TOTAL</td>
									<td className="px-2 text-right font-semibold">
										{convertToRupiah(
											data.items.reduce(
												(acc, item) => acc + item.price * item.qty,
												0
											) -
												data.discount +
												data.tax
										)}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="mb-4">
						<div className="text-sm mb-1">
							<div className="mb-1 font-semibold">Our Bank Account:</div>
							<div>{company.bank.name}</div>
							<div>{company.bank.accountNumber}</div>
							<div>{company.bank.accountName}</div>
						</div>
						<div className="text-xs">
							If you have any questions about this invoice,
							<br />
							please contact us at: {company.phone}
						</div>
					</div>

					<div className="text-right text-sm relative mb-8 flex justify-end">
						<div>
							<div className="mb-2">Bandar Lampung, {data.date}</div>
							<div className="flex flex-col items-center">
								<div className="font-bold text-3xl mb-2">{logo}</div>
								<div>Finance</div>
							</div>
						</div>
					</div>

					<div className="text-xs">
						*Catatan: Untuk Menghindari Pemutusan Akses Internet, Mohon
						Melakukan Pembayaran Sebelum Tanggal Jatuh Tempo
					</div>
				</div>
			</div>
		);
	}

	if (type === 3) {
		return (
			<div ref={ref} className="overflow-x-auto">
				<div className="min-w-full w-max">
					<div className="px-6 sm:px-10 py-6 w-full bg-base-400 flex items-center justify-between text-white">
						<div className="text-4xl font-bold tracking-wider">INVOICE</div>
						<div className="font-bold text-4xl">{logo}</div>
					</div>
					<div className="p-6 sm:p-10">
						<div className="flex items-start justify-between gap-x-20 gap-y-2 mb-8">
							<div className="text-base">
								<div className="uppercase font-semibold mb-1">
									{company.name}
								</div>
								<div className="text-xs">{company.address}</div>
							</div>
							<div className="text-xl font-bold whitespace-nowrap">
								{data.invoiceNumber}
							</div>
						</div>

						<div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-x-8 gap-y-4 text-sm mb-8">
							<div className="flex gap-x-20 gap-y-2 flex-wrap">
								<div>
									<div className="font-bold mb-1">BILL TO</div>
									<div>{data.customer.name}</div>
									<div>{data.customer.address}</div>
									<div>{data.customer.phone}</div>
								</div>
								<div>
									<div className="font-bold mb-1">INVOICE</div>
									<div>Cust. ID: {data.customer.id}</div>
									<div>Date: {data.date}</div>
									<div>Due Date: {data.dueDate}</div>
								</div>
							</div>

							<div className="sm:text-right">
								<div className="font-bold mb-1">INVOICE TOTAL</div>
								<div className="text-2xl font-bold">
									{convertToRupiah(
										data.items.reduce(
											(acc, item) => acc + item.price * item.qty,
											0
										) -
											data.discount +
											data.tax
									)}
								</div>
							</div>
						</div>

						<div className="text-sm mb-8 overflow-x-auto scrollbar-hide">
							<table className="w-full">
								<thead className="border-y dark:border-base-400">
									<tr>
										<th className="p-2 text-left">Description</th>
										<th className="p-2 text-left">Code</th>
										<th className="p-2 text-left">Quantity</th>
										<th className="p-2 text-left">Price</th>
										<th className="p-2 text-right">Sub Total</th>
									</tr>
								</thead>
								<tbody>
									{data.items.map((item, itemIdx) => (
										<tr key={itemIdx}>
											<td className="p-2">
												<div className="font-medium">{item.name}</div>
												<div className="text-xs">{item.description}</div>
											</td>
											<td className="p-2">{item.code}</td>
											<td className="p-2">{item.qty}</td>
											<td className="p-2">{convertToRupiah(item.price)}</td>
											<td className="p-2 text-right">
												{convertToRupiah(item.price * item.qty)}
											</td>
										</tr>
									))}

									<tr className="border-t dark:border-base-400">
										<td colSpan={4} className="pt-2 px-2 text-right">
											Sub Total
										</td>
										<td className="pt-2 px-2 text-right">
											{convertToRupiah(
												data.items.reduce(
													(acc, item) => acc + item.price * item.qty,
													0
												)
											)}
										</td>
									</tr>

									<tr>
										<td colSpan={4} className="px-2 text-right">
											Discount
										</td>
										<td className="px-2 text-right">
											{convertToRupiah(data.discount)}
										</td>
									</tr>

									<tr>
										<td colSpan={4} className="pb-2 px-2 text-right">
											Tax
										</td>
										<td className="pb-2 px-2 text-right">
											{convertToRupiah(data.tax)}
										</td>
									</tr>

									<tr className="border-t dark:border-base-400">
										<td colSpan={3} className="p-2 text-left">
											<div className="font-medium italic capitalize">
												*
												{angkaTerbilangJs(
													data.items.reduce(
														(acc, item) => acc + item.price * item.qty,
														0
													) -
														data.discount +
														data.tax
												)}
											</div>
										</td>
										<td className="p-2 text-right">TOTAL</td>
										<td className="px-2 text-right font-semibold">
											{convertToRupiah(
												data.items.reduce(
													(acc, item) => acc + item.price * item.qty,
													0
												) -
													data.discount +
													data.tax
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="mb-4">
							<div className="text-sm mb-1">
								<div className="mb-1 font-semibold">Our Bank Account:</div>
								<div>{company.bank.name}</div>
								<div>{company.bank.accountNumber}</div>
								<div>{company.bank.accountName}</div>
							</div>
							<div className="text-xs">
								If you have any questions about this invoice,
								<br />
								please contact us at: {company.phone}
							</div>
						</div>

						<div className="text-right text-sm relative mb-8 flex justify-end">
							<div>
								<div className="mb-2">Bandar Lampung, {data.date}</div>
								<div className="flex flex-col items-center">
									<div className="font-bold text-3xl mb-2">{logo}</div>
									<div>Finance</div>
								</div>
							</div>
						</div>

						<div className="text-xs">
							*Catatan: Untuk Menghindari Pemutusan Akses Internet, Mohon
							Melakukan Pembayaran Sebelum Tanggal Jatuh Tempo
						</div>
					</div>
				</div>
			</div>
		);
	}

	return null;
});

Invoice.propTypes = {
	type: PropTypes.oneOf([1, 2, 3]),
	data: PropTypes.object,
	company: PropTypes.object,
	logo: PropTypes.any,
};

Invoice.defaultProps = {
	type: 1,
	data: {},
	company: {},
	logo: "LOGO",
};

export default Invoice;
