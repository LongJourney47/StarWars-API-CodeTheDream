// for luke file   ///////////////////////////////////////
fetch("https://www.swapi.tech/api/people/1")
  .then((response) => {
    if (!response.ok) throw new Error(`Code Status ${response.status}`);

    return response.json();
  })
  .then((data) => {
    // console.log(data);

    console.log(data.result.properties);
    const lukeBIO = [];
    const bY = "Date Of Birth: " + data.result.properties["birth_year"];
    const eyeColor = "Eye Color: " + data.result.properties["eye_color"];
    const skinColor = "Skin Color: " + data.result.properties["skin_color"];
    const gender = "Gender: " + data.result.properties["gender"];
    const fullName = data.result.properties["name"];
    const height = "Height: " + data.result.properties["height"];
    const hairColor = "Hair Color: " + data.result.properties["hair_color"];

    lukeBIO.push(bY, eyeColor, skinColor, hairColor, gender, height);

    // console.log(lukeBIO);

    const hLS = document.querySelector(".hls");
    hLS.innerHTML = fullName;

    const ul = document.querySelector(".infolist-lu");

    for (i = 0; i < lukeBIO.length; i++) {
      const li = document.createElement("li");

      li.innerHTML = lukeBIO[i];
      ul.appendChild(li);
    }
  })

  .catch((error) => {
    console.log(error, "Failure in Progress");
  });
// for luke file   ///////////////////////////////////////

// for film file   ///////////////////////////////////////
fetch("https://www.swapi.tech/api/films/1")
  .then((response) => {
    if (!response.ok) throw new Error(`Code Status ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log(data.result.properties);

    const synopis = [];
    const title = data.result.properties.title;
    const releaseDate =
      "Release Date: " + data.result.properties["release_date"];
    const episode4 = "Episode: " + data.result.properties["episode_id"];
    const director = "Director: " + data.result.properties.director;
    const producers = "Producers: " + data.result.properties.producer;

    synopis.push(director, producers, episode4, releaseDate);

    const titleHead = document.querySelector(".hanh");
    titleHead.innerHTML = title;

    const ulANewHope = document.querySelector(".infolist-anh");

    for (i = 0; i < synopis.length; i++) {
      const li = document.createElement("li");

      li.innerHTML = synopis[i];
      ulANewHope.appendChild(li);
    }
  })

  .catch((error) => {
    console.log(error, "Failure in Progress");
  });
// for film file   ///////////////////////////////////////

// for mentor file   ///////////////////////////////////////
fetch("https://www.swapi.tech/api/people/10")
  .then((response) => {
    if (!response.ok) throw new Error(`Code Status ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log(data.result.properties);

    const obiWanBIO = [];
    const bY1 = "Date Of Birth: " + data.result.properties["birth_year"];
    const eyeColor1 = "Eye Color: " + data.result.properties["eye_color"];
    const skinColor1 = "Skin Color: " + data.result.properties["skin_color"];
    const gender1 = "Gender: " + data.result.properties["gender"];
    const fullName1 = data.result.properties["name"];
    const height1 = "Height: " + data.result.properties["height"];
    const hairColor1 = "Hair Color: " + data.result.properties["hair_color"];

    obiWanBIO.push(bY1, eyeColor1, skinColor1, hairColor1, gender1, height1);

    // console.log(lukeBIO);

    const hOW = document.querySelector(".how");
    hOW.innerHTML = fullName1;

    const ulOBI = document.querySelector(".infolist-ow");

    for (i = 0; i < obiWanBIO.length; i++) {
      const li = document.createElement("li");

      li.innerHTML = obiWanBIO[i];
      ulOBI.appendChild(li);
    }
  });
console.log(data.result.properties).catch((error) => {
  console.log(error, "Failure in Progress");
});
// for mentor file   ///////////////////////////////////////
