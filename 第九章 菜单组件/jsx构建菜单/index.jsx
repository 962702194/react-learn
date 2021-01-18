class Menu extends React.Component {
  render () {
    return <div>
      {
        this.props.menu.map((v, i) => {
          return <div key={i}><Link label={v} /></div>
        })
      }
    </div>
  }
}

Menu.defaultProps = {
  menu: ['Home', 'About', 'Services', 'Portfolio', 'Contact Us']
}

class Link extends React.Component {
  render () {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return <div>
      <a href={url}>{this.props.label}</a>
    </div>
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'))
