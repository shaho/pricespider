import { ListChildComponentProps } from "react-window";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { deepOrange } from "@mui/material/colors";

import { City } from "../../types";

export function CityItem({ index, style, data }: ListChildComponentProps) {
  const { city, admin_name, population } = (data?.items[index] as City) || {};

  return (
    <ListItem style={style} key={index}>
      <ListItemAvatar>
        <Avatar
          alt={city}
          sx={{
            bgcolor: deepOrange[500],
          }}
        >
          {city?.charAt(0) || ""}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={city}
        primaryTypographyProps={{ fontWeight: "bold" }}
        secondary={
          <Box component="span">
            <Typography component="span" variant="body2" display="block">
              <Box component="span">Province: </Box>
              {admin_name}
            </Typography>
            <Typography variant="caption" display="block">
              <Box component="span" sx={{ fontStyle: "italic" }}>
                population:{" "}
              </Box>
              {population}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
}
