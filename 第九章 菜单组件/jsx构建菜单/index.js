class Menu extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      this.props.menu.map((v, i) => {
        return React.createElement(
          'div',
          { key: i },
          React.createElement(Link, { label: v })
        );
      })
    );
  }
}

Menu.defaultProps = {
  menu: ['Home', 'About', 'Services', 'Portfolio', 'Contact Us']
};

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
    return React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: url },
        this.props.label
      )
    );
  }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));
