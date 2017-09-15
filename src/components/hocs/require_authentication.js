import React, { Component } from 'react'
import { connect } from 'react-redux'

// naming convention => ComposedComponent
export default function(ComposedComponent) {
  class Authentication extends Component {
    // dis be some special shit yo
    // React forces you to define the contextTypes properties
    // to access context
    // Creates a static property on class which can be accessed by other code
    // via Authentication.contextTypes without needing to create the class
    static contextTypes = {
      router: React.PropTypes.object
    }

    // accessing router via 'context'
    // if not authenticated => throw user out
    // cant see this secret shit
    componentWillMount() {
      if ( !this.props.authenticated ) {
        this.context.router.push('/')
      }
    }

    // this will handle the edge case where 
    // 1. user is on protected resource
    // 2. user logs out 
    // 3. we now throw the user out after props changes
    componentWillUpdate(nextProps) {
      if ( !nextProps.authenticated ) {
        this.context.router.push('/')
      }
    } 

    render() {
      //console.log(this.context)
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({ authenticated }) {
    return {
      authenticated
    }
  }

  return connect(mapStateToProps)(Authentication)
}

/*
// In some other location... Not in this file...
// We want to use this HOC
import Authentication // This is my HOC
import Resources // The component i want to wrap

const ComposedComponent = Authentication(Resources)

// In some render method...
<ComposedComponent /> // Render out the component wrapped with Authentication
*/