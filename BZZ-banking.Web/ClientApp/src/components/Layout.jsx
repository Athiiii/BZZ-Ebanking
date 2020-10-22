import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FmLayout } from './demo/FmLayout';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        {
          !window.location.pathname.startsWith("/demo") ?
            (<div>
              <NavMenu />
              <Container>
                {this.props.children}
              </Container>
            </div >)
            : 
            (<FmLayout>
              {this.props.children}
            </FmLayout>)
        }
      </div>
    );
  }
}
