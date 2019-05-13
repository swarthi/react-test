import React, { Component } from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
// @material-ui/icons

// core components
// import Header from "components/Header/Header.jsx";
// import Footer from "components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/Button";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";
import Parallax from "../../components/Parallax";

import homePageStyle from "./styles";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
// import WorkSection from "./Sections/WorkSection.jsx";

// const dashboardRoutes = [];

class Home extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/*}
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {//*/}
        <Parallax filter image={require("../../assets/img/jumbotron-citiconnect2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Typography variant="h2" className={classes.title}>Your Story Starts With Us.</Typography>
                <Typography variant="h4" className={classes.text}>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </Typography>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
				{/*}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
				<Footer />
				{//*/}
      </div>
    );
  }
}

export default withStyles(homePageStyle)(Home);
