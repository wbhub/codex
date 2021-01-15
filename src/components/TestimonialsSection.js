import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: 0,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function TestimonialsSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar:
        "https://pbs.twimg.com/profile_images/845469808258957313/DLoDCB24_400x400.jpg",
      name: "Marty Ringlein",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      company: "Director of Product, Brex",
    },
    {
      avatar:
        "https://pbs.twimg.com/profile_images/1284176218535927809/qD1EAMJJ_400x400.jpg",
      name: "Stefan Nagey",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
      company: "Founder/CEO, Capbase",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-12.jpeg",
      name: "Blake Elder",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
      company: "Product Manager, Roblox",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={4} key={index}>
              <Card raised={true}>
                <CardContent>
                  <Typography variant="body1" component="p">
                    "{item.testimonial}"
                  </Typography>
                </CardContent>
                <CardHeader
                  className={classes.header}
                  avatar={
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  }
                  title={item.name}
                  subheader={item.company}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
