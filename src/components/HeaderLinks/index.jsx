/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
// import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.jsx";
import Button from "../../components/Button";

import headerLinksStyle from './styles';
import Icon from '@material-ui/core/Icon';
import Dropdown from "../Dropdown";


function HeaderLinks({ ...props }) {
	const { classes } = props;
	console.log('classes', classes.signInIcons);
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Dropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="signin-tooltip"
          title="Singin"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.registerNavLink}
          >
					Sign in
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
