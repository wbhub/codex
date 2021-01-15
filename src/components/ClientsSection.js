import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";

function ClientsSection(props) {
  const items = [
    {
      name: "Brex",
      image: "https://miro.medium.com/max/1400/0*EuW7Ho6jRIK05h8w",
      width: "180px",
    },
    {
      name: "Carta",
      image:
        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4IiB3aWR0aD0iMTI2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxtYXNrIGlkPSJhIiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMCA0Ny40NzNoMTI2VjBIMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvbWFzaz48ZyBmaWxsPSIjMTExIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02Ni4yNDggMTYuMjY4Yy0xLjA1Ny0uODg5LTIuODYxLTEuMzMzLTUuNDEzLTEuMzMzaC01Ljc1NnYxNy43ODhoNC4zMDR2LTUuNTc1aDEuOTI4YzIuMzQgMCA0LjA1Ni0uNTE1IDUuMTQ4LTEuNTQ2IDEuMjMtMS4xNTUgMS44NDktMi42OTMgMS44NDktNC42MTMgMC0xLjk5MS0uNjg3LTMuNTY1LTIuMDYtNC43MjFtLTUuMDQ0IDYuODU1aC0xLjgyMVYxOC45NmgxLjYzNmMxLjk5IDAgMi45ODUuNjk4IDIuOTg1IDIuMDk0IDAgMS4zNzgtLjkzNCAyLjA2OC0yLjggMi4wNjhtMTQuNDY5LTguMTg4aC00LjQ4OHYxNy43ODhoOS42OXYtNC4wMjZoLTUuMjAyem0xMy45OTUgMGwtNy4wNSAxNy43ODhoNC44MzJsLjkyNC0yLjU4Nkg5NC41bC44NDUgMi41ODZoNC44ODZsLTctMTcuNzg4em0tLjA1MyAxMS42MDFsMS44NDktNi4wOCAxLjgyIDYuMDh6Ii8+PHBhdGggZD0iTTEwMi40NzMgMzIuNzIyaDQuNDg5VjE0LjkzNGgtNC40ODl6bTIxLjkxNy0xNC40NTRhNy4zNzYgNy4zNzYgMCAwMC0yLjE0LTIuMDUzYy0xLjM1NS0uODU0LTMuMjA0LTEuMjgtNS41NDUtMS4yOGgtNS45MTR2MTcuNzg3aDYuOTE4YzIuNSAwIDQuNTA2LS44MTcgNi4wMi0yLjQ1MyAxLjUxNC0xLjYzNSAyLjI3LTMuODA1IDIuMjctNi41MDggMC0yLjE1LS41MzctMy45ODEtMS42MS01LjQ5M20tNy4xODIgMTAuNDI3aC0xLjkyN3YtOS43MzRoMS45NTRjMS4zNzMgMCAyLjQyOC40MyAzLjE2OCAxLjI4Ny43NC44NTcgMS4xMSAyLjA3MyAxLjExIDMuNjQ3IDAgMy4yLTEuNDM1IDQuOC00LjMwNSA0LjhNMTguNjM3IDBMNC4wOSAzLjgxLjA4MSAxOC40MzlsNS4wMTQgNS4xNDhMMCAyOC42NWwzLjc3MyAxNC42OTMgMTQuNDg0IDQuMDQ3IDUuMDk2LTUuMDY0IDUuMDE0IDUuMTQ3IDE0LjU0Ny0zLjgxIDQuMDA4LTE0LjYzLTUuMDEzLTUuMTQ2IDUuMDk1LTUuMDYzTDQzLjIzMSA0LjEzIDI4Ljc0NS4wODNsLTUuMDk0IDUuMDYzek05LjcxIDYuNjI0bDcuNjYzLTIuMDA4IDMuMzUxIDMuNDQtNC44ODcgNC44NTZ6bTE2LjgyMiAxLjQ3OGwzLjQwNS0zLjM4MyA3LjYzIDIuMTMyLTYuMjI3IDYuMTg3em0tMjEuODYgOS4xMzZsMi4xMTEtNy43MDUgNi4xMjUgNi4yODgtNC44ODYgNC44NTZ6bTI5LjU0Ny0xLjI0M2w2LjIyNy02LjE4OSAxLjk4NiA3Ljc0LTMuNDA0IDMuMzg0em0tMTUuNTAyLS4xMjdsNC44ODctNC44NTYgNC44MDcgNC45MzYtNC44ODYgNC44NTZ6bS03LjgxNCA3Ljc2NWw0Ljg4Ni00Ljg1NiA0LjgxIDQuOTM2LTQuODg4IDQuODU2em0xNS41MDMuMTI3bDQuODg2LTQuODU2TDM2LjEgMjMuODRsLTQuODg3IDQuODU2ek00LjU3IDI5LjkyN2wzLjQwNi0zLjM4NSA0LjgwNyA0LjkzNy02LjIyNSA2LjE4NnptMTQuMDIxIDEuNTk4bDQuODg3LTQuODU2IDQuODA4IDQuOTM2LTQuODg2IDQuODU2em0xNS41MDIuMTI4bDQuODg3LTQuODU2IDMuMzUxIDMuNDM5LTIuMTEgNy43MDV6bS0yNC42NTYgOC45N2w2LjIyNi02LjE4OSA0LjgxIDQuOTM2LTMuNDA2IDMuMzg1em0xNi44NDMtMS4yMDZsNC44ODYtNC44NTYgNi4xMjYgNi4yODktNy42NjIgMi4wMDd6IiBtYXNrPSJ1cmwoI2EpIi8+PC9nPjwvc3ZnPg==",
      width: "125px",
    },
    {
      name: "Capbase",
      image: "https://capbase.com/static/media/color-dark-text.98fbbe94.svg",
      width: "165px",
    },
    {
      name: "Chime",
      image:
        "https://www.chime.com/wp-content/themes/project-sscms-2021-01-13T02-09-13/images/brand/chime-logo.svg",
      width: "130px",
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
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Grid container={true} justify="center">
            {items.map((item, index) => (
              <Grid item={true} xs={12} md="auto" key={index}>
                <Box py={2} px={3}>
                  <img src={item.image} width={item.width} alt={item.name} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default ClientsSection;
