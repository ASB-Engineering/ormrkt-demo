import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    config: {
      api_key: "1RSAW0S-BFTMB4H-PDEQDW8-J57T7D0",
      firm_id: "b8116db6-7bf5-4adb-aa1c-92f1e97fec26",
      business_name: "Miko & Sons Ltd.",
      business_id: "321",
      user_first_name: "Mike",
      user_last_name: "Doe",
      user_email: "mike.doe@gmail.com",
      style: {
        primary_color: "#000",
      },
    },
  };

  componentDidMount() {
    const orEmbedConfig = this.state.config;

    function loadOneRouteEmbed() {
      const orEmbedEl = document.getElementById("onerouteEmbed");
      if (orEmbedEl) {
        orEmbedEl.className = "oneroute_embed";
        orEmbedEl.setAttribute("data-config", JSON.stringify(orEmbedConfig));

        const scriptElement = document.createElement("script");
        scriptElement.src = "https://rebrand.ly/or-embed";
        document.body.appendChild(scriptElement);
      }
    }

    loadOneRouteEmbed();
  }

  render() {
    return (
      <div className="App">
        <div className="side">This is a Weather app</div>

        <div id="onerouteEmbed"></div>
      </div>
    );
  }
}

export default App;
