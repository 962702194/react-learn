class Menu extends React.Component {
  render () {
    return this.props.menu.map((v, i) => {
      return React.createElement(
        'div',
        {key: i},
        React.createElement(Link, {label: v})
      )
    })
  }
}

class Link extends React.Component {
  render () {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return React.createElement('a', {href: url}, this.props.label)
  }
}

const menuOptions = ['Home', 'About', 'Services', 'Portfolio', 'Contact Us']

ReactDOM.render(
  React.createElement(Menu, {menu: menuOptions}),
  document.getElementById('menu')
)
