import { Box } from "components/box/box";
import { nanoid } from "nanoid";
import { Text, InputSearch, SearchLabel } from "./SearchBox.styled";

export function SearchBox({ value, onChange }) {
	const loginInputId = nanoid();

	return (
		<Box mb={3}>
			<Text>Find contacts by name</Text>
			<InputSearch
				name="contact"
				className="input-search"
				id={loginInputId}
				value={value}
				type="text"
				onChange={onChange}
			/>
			<SearchLabel className="search" htmlFor={loginInputId}></SearchLabel>
		</Box>
	);
}
