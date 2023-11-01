import { useMemo, useState } from "react";
import { FixedSizeList } from "react-window";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";

import { getCities } from "../../services/city";
import { City } from "../../types";
import { CityItem } from "../";

export function CitiesList() {
  const [term, setTerm] = useState("");
  const [cities] = useState(getCities());
  const Cities = useMemo(
    () =>
      cities.filter((item: City) =>
        item.city.toLowerCase().includes(term.toLowerCase()),
      ),
    [cities, term],
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(e.target.value);

  return (
    <>
      <TextField
        label="Search City"
        variant="outlined"
        fullWidth
        value={term}
        onChange={handleSearch}
        data-testid="search-input"
        sx={{ marginBottom: 2 }}
      />
      {Cities.length > 0 ? (
        <Box height={"400px"} overflow={"auto"}>
          <FixedSizeList
            innerElementType={List}
            height={400}
            width={"100%"}
            itemSize={76}
            itemCount={Cities.length}
            itemData={{
              columns: {},
              classes: {},
              items: Cities,
            }}
          >
            {CityItem}
          </FixedSizeList>
        </Box>
      ) : (
        <Alert severity="warning">No matching item has been found.</Alert>
      )}
    </>
  );
}
