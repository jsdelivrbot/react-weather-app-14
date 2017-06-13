import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

export default (props) => {
	return (
		<div>
			<Sparklines height={50} width={100} data={props.data}>
				<SparklinesBars style={{ fill: `${props.color}`, fillOpacity: ".25" }} />
				<SparklinesLine style={{ stroke:`${props.color}` }} />
			</Sparklines>			
		</div>
	);
}