import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  changingType = (e) => {
    this.setState({
      filters: { ...this.state.filters, type: e.target.value },
    });
  };

  findingPets = () => {
    let url =
      this.state.filters.type === "all"
        ? "/api/pets"
        : `/api/pets?type=${this.state.filters.type}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        // this.setState({ pets: data }, () => {
        //   console.log(this.state);
        // })
        this.setState({ pets: data })
      );
  };

  adoptingPet = (id) => {
    const pet = this.state.pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });

    // this.setState({ pets: pet }, () => {
    //   console.log(this.state);
    // });

    this.setState({ pets: pet });
    // const pet = this.state.pets.filter((pet) => pet.id === id);
    // console.log(pet);
    // pet.state.isAdopted = true;
    // this.setState({ ...this.state, isAdopted: true });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changingType}
                onFindPetsClick={this.findingPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptingPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
