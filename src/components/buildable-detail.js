import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { staticAssetsUrl } from 'src/utils/resources';

export default class BuildableDetail extends Component {
  static propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    stats: PropTypes.object,
  };

  render() {
    return (
      <article className="buildable-detail">
        <h1 className="buildable-name">{this.props.name}</h1>
        <img
          className="buildable-image"
          src={staticAssetsUrl(this.props.imageUrl)}
          alt={this.props.imageUrl}
        />
        <ul className="buildable-stats">
          {Object.keys(this.props.stats).map(stat => (
            <li>{`${stat}: ${this.props.stats[stat]}`}</li>
          ))}
        </ul>
      </article>
    );
  }
}
