import React, { Component } from 'react';

class LyricList extends Component {
  //use render lyrics method because we are only fetching info for one song ???
  //unlike using restAPI we fetch what we only need

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics.map(({ id, content }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

export default LyricList;
