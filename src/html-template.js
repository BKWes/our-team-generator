const generateCard = (name, id, title, email, other) => {
  return `
  <div class="card"
    <div class="card-header">
      <h3>${name}</h3>
      <h4>${title}</h4>
    </div>
    <div class="card-body">
      <p>${id}</p>
      <p>Email: ${email}</p>
      <p>${other}</p>
    </div>
  </div>
  `;
};

const cardLoop = data => {
  let dataString = ``

  for (let i=0; i<data.length; i++) {
    const employeeData = generateCard(data[i].name, data[i].id, data[i].title, data[i].email, data[i].other)
    dataString = dataString + employeeData;
  };
  return dataString;
}

const generatePage = templateData => {
    console.log(templateData);

    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profiles</title>
  </head>
  <body>
    <header>
      <h1 class="text-center text-white bg-dark p-5">Our Team</h1>
    </header>
    <main class="container">
        <div class="row text-center justify-content-center">
        ${cardLoop(templateData)}
        </div>
    </main>
  </body>
  </html>
    `;
};

module.exports = generatePage;