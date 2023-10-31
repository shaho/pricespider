import { ListChildComponentProps } from "react-window";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
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
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {admin_name} - {population}
          </Typography>
        }
      />
    </ListItem>
  );
}
