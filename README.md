<!DOCTYPE html>
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <meta name="description" content="A cool thing made with Glitch">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <h1>
      Image Search Abstraction Api
    </h1>
    <div>
      <p>
        A full stack JavaScript app that allows you to search for images 
      </p>
    </div>
    <div>
      <h2>
        User Stories:
      </h2>
        <ul>
          <li>I can get the image URLs, alt text and page urls for a set of images relating to a given search string.</li>
          <li>I can paginate through the responses by adding a ?offset=10 parameter to the URL.</li>
          <li>I can get a list of the most recently submitted search strings.</li>
        </ul>
      <h2>
        Example Usage:
      </h2>
      <p>
        <code>https://common-judge.glitch.me/image/HarshVardhanKumar</code>
        <br>
        <code>https://common-judge.glitch.me/image/HarshVardhanKumar?offset=20</code>
        <br>
        <br>
      </p>
      <h2>
        Example Output:
      </h2>
      <p><code>
        [{"imageurl":"https://avatars1.githubusercontent.com/u/13112792?v=4&s=460","altText":"HarshVardhanKumar (Harsh Kumar) · GitHub","pageurl":"https://github.com/HarshVardhanKumar"},{"imageurl":"https://i.ytimg.com/vi/SqbC9AbjIiI/hqdefault.jpg","altText":"Shalini Kumari Harshvardhan Kumar Bigan Bigha Daudnagar 824143 ...","pageurl":"https://www.youtube.com/watch?v=SqbC9AbjIiI"},{"imageurl":"https://image.slidesharecdn.com/5e7d8000-828f-4ca1-8c4d-53cf7f5e050a-161227065108/95/harshvardhan-kumar-1-638.jpg?cb=1482821496","altText":"Harshvardhan kumar","pageurl":"https://www.slideshare.net/HarshvardhanKumar5/harshvardhan-kumar-70461056"},{"imageurl":"https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/0f1/005/3c0da48.jpg","altText":"TCS | Harshvardhan Kumar Shanu | Pulse | LinkedIn","pageurl":"https://www.linkedin.com/pulse/career-4-online-naukri-fraud-recruiter-harshvardhan-kumar-shanu"},{"imageurl":"https://image.slidesharecdn.com/5e7d8000-828f-4ca1-8c4d-53cf7f5e050a-161227065108/95/harshvardhan-kumar-2-638.jpg?cb=1482821496","altText":"Harshvardhan kumar","pageurl":"https://www.slideshare.net/HarshvardhanKumar5/harshvardhan-kumar-70461056"},{"imageurl":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAJUAAAAJGVjMTdkMGUyLTgwYzktNGQ1OS05YTUzLTE4Y2E5ZTgxMzBkYg.jpg","altText":"Harshvardhan Kumar | LinkedIn","pageurl":"https://in.linkedin.com/in/harshvardhan-kumar-a494486b"},{"imageurl":"https://i.ytimg.com/vi/E6RJNB4yI3Y/maxresdefault.jpg","altText":"Rajat Anand Grand Son Smt. Kamla Devi Bigan Bigha Daudnagar ...","pageurl":"https://www.youtube.com/watch?v=E6RJNB4yI3Y"},{"imageurl":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAWtAAAAJDFkYmYxNDY0LTZlMmItNDA0NC1iNTU2LTI5MTMyOWIzMDk2YQ.jpg","altText":"Harshvardhan Kumar | Professional Profile","pageurl":"https://in.linkedin.com/in/harshvardhan-kumar-303a013"},{"imageurl":"https://avatars1.githubusercontent.com/u/8065352?v=3&s=400","altText":"kumar-harshvardhan (Kumar Harshvardhan) · GitHub","pageurl":"https://github.com/kumar-harshvardhan"},{"imageurl":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAqBAAAAJGE2NDZiNDdmLWVjMjktNDU5NC1hYmI1LTQ5NDM4Y2Y5MzdkNg.jpg","altText":"Harshvardhan Kumar | LinkedIn","pageurl":"https://in.linkedin.com/in/harshvardhan-kumar-15707533"}]
        </code>
      </p>
    </div>
    <!-- Your web-app is https, so your scripts need to be too -->
     </body>
</html>
