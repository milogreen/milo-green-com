import React from "react";
import { Grid, Column } from "@carbon/react";
import Inverse from "../Inverse";
import LeadSpace from "../LeadSpace";
import "./_wallet.scss";

const Wallet = () => {
	return (
		<div>
			<Inverse>
				<LeadSpace heading="CoinFlip Wallet" />
			</Inverse>
			<section className="content-section">
				<Grid className="content-group">
					<Column lg={{span: 12, offset: 4}} md={{span: 6, offset: 2}} sm={4}>
						<img src="https://i.imgur.com/2LtE1wo.png" />
						<img src="https://i.imgur.com/vlWQD0I.png" />
						<img src="https://i.imgur.com/gxNAXrc.png" />
						<img src="https://i.imgur.com/uX8R6Bw.png" />
					</Column>
				</Grid>
			</section>
		</div>
	);
}

export default Wallet;
