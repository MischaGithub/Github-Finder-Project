import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    // Pulling all the data from Github
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hierable,
    } = this.props.user;

    const { loading } = this.props;
    return <div>{name}</div>;
  }
}

export default User;
