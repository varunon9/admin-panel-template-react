import React from 'react';
import {
  Grid, 
  Segment,
  Header,
  List
} from 'semantic-ui-react';

const AgencyOfficeBanner = (/*props*/) => {
  return (
    <Grid.Column id="agencyOfficeBanner">
      <Segment basic>
        <Header as="h1">
          AgencyOffice
          <Header.Subheader>
            Your insurance agency business. Online.
          </Header.Subheader>
        </Header>
        <Segment basic>
          <List relaxed>
            <List.Item>
              <List.Content>
                <List.Header as="h3">
                  Your portfolio at one place
                </List.Header>
                <List.Description as="h4">
                  Get all your customers and policies together at one 
                  place for easy management.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content>
                <List.Header as="h3">
                  Customer delight
                </List.Header>
                <List.Description as="h4">
                  Manage your customer engagement using the best of 
                  digital tools in our all-in-one package.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content>
                <List.Header as="h3">
                  In-built claim assistance
                </List.Header>
                <List.Description as="h4">
                  Make your customer’s life easy at the point of claim 
                  using our best-in-class claim assistance.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content>
                <List.Header as="h3">
                  Double up your income in no time
                </List.Header>
                <List.Description as="h4">
                  You get to focus on sales when you have the best of 
                  technology and claims assistance backing you.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Segment>
    </Grid.Column>
  );
};

export default AgencyOfficeBanner;
