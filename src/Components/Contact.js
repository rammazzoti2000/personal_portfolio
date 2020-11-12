import React, { Component } from 'react';

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-me", ...this.state })
    })
      .then(() => {
        alert("Your message was successfully sent!");
        this.setState({
          name: "",
          email: "",
          message: ""
        })
      })
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({
    [e.target.name]: e.target.value,
  });

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input
                      type="text"
                      size="35"
                      id="contactName"
                      name="name"
                      value={this.state.name}
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input
                      type="email"
                      size="35"
                      id="contactEmail"
                      name="email"
                      value={this.state.email}
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="message"
                      value={this.state.message}
                      required
                      onChange={this.handleChange}
                    >
                    </textarea>
                  </div>

                  <div>
                    <button type="submit" className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
            </div>


            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">

                <h4>Address and Phone</h4>
                <p className="address">
                  {name}<br />
                  {street} <br />
                  {city}, {state} {zip}<br />
                  <span>{phone}</span><br />
                  <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                </p>
              </div>
            </aside>
          </div>
        </section>
    );
  }
}

export default Contact;
