
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Niko", 
      animal: "Dog", 
      breed: "Staffordshire Terrier"
    }),
    React.createElement(Pet, {
      name: "Nahla", 
      animal: "Dog", 
      breed: "Staffordshire Terrier / Labrador Retriever"
    }),
    React.createElement(Pet, {
      name: "Puppies", 
      animal: "Dog", 
      breed: "Staffordshire Terrier / Labrador Retriever"
    })
  ]);
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);