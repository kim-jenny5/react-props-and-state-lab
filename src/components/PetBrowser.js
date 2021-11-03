import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet) => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return (
      <div className="ui cards">
        {/* <Pet pet={this.props.pets} onAdoptPet={this.props.onAdoptPet} /> */}
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
