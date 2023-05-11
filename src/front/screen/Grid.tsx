import { CellState, GridState, PlayerColor } from "../../types";

type GridProps = {
	grid: GridState;
};

export function Grid({ grid }: GridProps) {
	return (
		<div className='grid'>
			{grid.map((row, y) =>
				row.map((c, x) => <Cell x={x} y={y} color={c} key={`${x}-${y}`} />)
			)}
		</div>
	);
}

type CellProps = {
	x: number;
	y: number;
	color: CellState;
};

function Cell({ x, y, color }: CellProps) {
	return (
		<div>
			{x} - {y}
		</div>
	);
}