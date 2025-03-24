# Meet-The-Artist

An app that provides an easier way for art galleries to find artists.

## Description

This application is a prototype designed to facilitate communication between art galleries and active artists by providing an accessible platform to view and manage artist information.
The application serves as a bridge, allowing galleries to easily access key details about artists, including their names, bio, contact information, and art portfolio (will be an art photo link).
its a prototype, the application will utilize a manual JSON file as a data source, enabling testing and refinement before integrating real artist information.
This application aims to enhance collaboration opportunities. Later iteration will include adding a commenting and rating feature for Art Galleries to leave on the artist information.

## Getting Started

### Dependencies

Ubuntu needs to be installed.
Then node v22.13.0

### Installing

The program must be downloaded in an empty folder.
No modifications need to be made.

### How it works?

-Render happens based on state changes:

```
  const [artistsState, setArtists] = useState(data);
  const [selectedValue, setSelectedValue] = useState("Option 0");
  const [currentArtists, setCurrentArtists] = useState([]);
  const [page, setPage] = useState(1);
```

-Along with using useEffect to fetch data from components:

```
 useEffect(() => {
    // Dropmenu filter based on the artists profession
    const filteredArtists = artistsState.filter((artist))})
```

### Executing program

- How to run the program

```
npm run start
```

## Help

Common problems.
-if the defualt data artist's information is not showing at all. Check the component's card details.
-Note when using the form and your submission don't show in the filter check to see if you choose the options mentioned and capitalized the fisrt letter options.

## Authors

Sherill Braynen

## Version History

- 0.3
  - Prototype is ready
- 0.2
  - Work in progress
- 0.1
  - Initial Release 2025
