
const generatePage = templateData => {
    console.log(templateData);

    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>
  </head>
  <body>
    <header>
      <div>
        <h1>Our Team</h1>
      </div>
    </header>
    <main class="container">
        **ADD EMPLOYEES HERE**
    </main>
  </body>
  </html>
    `;
};

module.exports = generatePage;