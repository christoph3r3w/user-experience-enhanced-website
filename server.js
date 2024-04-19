// Importeer het npm pakket express uit de node_modules map
import express from 'express'


// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'


// Stel het basis endpoint in
const apiUrl = 'https://redpers.nl/wp-json/wp/v2';


// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('./public/'))

app.use(express.urlencoded({extended:true}))

// keeps stores the page cound 
app.locals.pageViews = {}

// hardcoded categories 
app.locals.hardcodedCategories = {
    'binnenland': 9,
    'buitenland': 1010,
    'column' : 7164,
    'economie':6,
    'kunst-media':4,
    'podcast':3211,
    'politiek':63,
    'wetenschap':94
  }

  app.get('/', function (request, response) {
	// Haal alle personen uit de WHOIS API op
	const postsUrl = `${apiUrl}/posts?per_page=50`;
	const usersUrl = `${apiUrl}/users`;
	const categoriesUrl = `${apiUrl}/posts?per_page=99&_fields[]=title&_fields[]=categories&_fields[]=id&_fields[]=slug&_fields[]=date&_fields[]=yoast_head_json`;

   
	// Foreach categories key, fetch the next URL, 
	// https://redpers.nl/wp-json/wp/v2/posts?categories=7164&per_page=3
	// And put the response of that fetch inside categories[...].posts
	  // https://redpers.nl/wp-json/wp/v2/posts?categories=9&per_page=3
  
  
	Promise.all([fetchJson(postsUrl), fetchJson(usersUrl),fetchJson(categoriesUrl)])
	.then(([postsData, usersData, categoryData]) => {
	
		//  hardcoded catefgory data
	  const categories = [
		{
		  slug: 'binnenland',
		  id: 9,
		  name: 'Binnenland',
		  posts: []
		},
		{
		  slug: 'buitenland',
		  id: 1010,
		  name: 'Buitenland',
		  posts: []
		},
		{
		  slug: 'column',
		  id: 7164,
		  name: 'column',
		  posts: []
		},
		{
		  slug: 'economie',
		  id: 6,
		  name: 'economie',
		  posts: []
		},
		{
		  slug: 'kunst-media',
		  id: 4,
		  name: 'Kunst-media',
		  posts: []
		},
		{
		  slug: 'podcast',
		  id: 3211,
		  name: 'Podcast',
		  posts: []
		},
		{
		  slug: 'politiek',
		  id: 63,
		  name: 'Politiek',
		  posts: []
		},
		{
		  slug: 'wetenschap',
		  id: 94,
		  name: 'Wetenschap',
		  posts: []
		}
	  ]
		// Render index.ejs and pass the fetched data as 'posts' and 'users' variables
		// let catA = `${postsData}&categories=${categoryData[0].id}`
		categories.map(cat => {
		  let count = 0;
		  categoryData.forEach((post => {
			if (post.categories.includes(cat.id) && count < 3) {
			  count = count + 1
			  post.title.rendered = post.title.rendered.replace('<b>', '').replace('</b>', '').replace('<b/>', '')
			  cat.posts.push(post)
			}
		  }))
		  return cat
		})
  
		// copied code for date parsing
		for (var i=0; i < postsData.length; i++) {
		  const parsedDate = new Date(postsData[i].date), // Haal de string date van de post op
		  day = parsedDate.getDate(), // Haal de dag uit de string
		  options = {month: "short"}, // De maand moet kort geschreven zijn
		  month = Intl.DateTimeFormat("nl-NL", options).format(parsedDate), // Haal de maand op en zet het in woordvorm in de taal nederlands
		  newDate = day + ' ' + month; // Maak een nieuwe datum met "dag maand"
		  postsData[i].title.rendered = postsData[i].title.rendered.replace('<b>', '').replace('</b>', '').replace('<b/>', '')
		  postsData[i].date = newDate // Zet waarde van de datum naar de nieuwe datum
		  categoryData[i].date = newDate
		}
  
		// console.log(categories[3])
		response.render('index.ejs', { posts: postsData, users: usersData, categories});
		console.log("home success")
	})
  
	.catch((error) => {
	  // Handle error if fetching data fails
	  console.error('Error fetching data:', error);
	  response.status(500).send('Error fetching data');
	});
  
  })
	const categoriesUrl = `${apiUrl}/categories?per_page=100`;
		fetchJson(`${directus_url}?filter[id][_eq]=${request.params.id}`),

  app.get('/author/:id',function(req,res){
				direct: directusData.data.length ? directusData.data[0] : false
	// the data i need for this page
	const postsUrl = `${apiUrl}/posts?author=${req.params.id}`;
	const usersUrl = `${apiUrl}/users?include=${req.params.id}`;
	const categoriesUrl = `${apiUrl}/categories?per_page=100`;
  
	Promise.all([
	  fetchJson(postsUrl),
	  fetchJson(usersUrl),
	  fetchJson(categoriesUrl),
	  // fetchJson(`${apiUrl}/author/${usersUrl}`),
	])
	.then(([
	  postsData,
	  usersData,
	  categoriesData
	]) => {
		// Render colofon.ejs and pass the fetched data as 'posts' and 'users' variables
		console.log('author', usersData)
		res.render('author.ejs', { posts: postsData, users: usersData[0], categories: categoriesData });
	})
  
	// Handle error if fetching data fails
	.catch((error) => {
	  console.error('Error fetching data:', error);
	  res.status(500).send('Error fetching data');
	});
  
  })

  app.get('/categories/:slug',function(req,res){
	// the data i need for this page
	// const categoriesUrl  = `${apiUrl}/categories=${req.params.id}`;
	// const category = categoriesData.find((category) => category.slug == request.params.slug);
	// const categoriesUrl  = `${apiUrl}/categories?include=${req.params.id}`;
	const categoriesUrl  = `${apiUrl}/categories?slug=${req.params.slug}`;
  
	fetchJson(categoriesUrl)
	.then((categoriesData) => {
	  fetchJson(`${apiUrl}/posts?per_page=50&categories=${categoriesData[0].id}`)
	  .then((postsData) => {
		// console.log("user", usersData, "posts", postsData)
  
  
  
		// copied code for date parsing
		for (var i=0; i < postsData.length; i++) {
		  const parsedDate = new Date(postsData[i].date), // Haal de string date van de post op
		  day = parsedDate.getDate(), // Haal de dag uit de string
		  options = {month: "long"}, // De maand moet kort geschreven zijn
		  month = Intl.DateTimeFormat("nl-NL", options).format(parsedDate), // Haal de maand op en zet het in woordvorm in de taal nederlands
		  year = parsedDate.getFullYear(), // Haal het jaar uit de string
		  newDate = day + ' ' + month + ' ' + year; // Maak een nieuwe datum met "dag maand jaar"        
		  postsData[i].date = newDate // Zet waarde van de datum naar de nieuwe datum
		  
		}
		res.render('categories.ejs', { 
			posts: postsData, 
		  });
	  })
	})
  
	
  
	// Handle error if fetching data fails
	.catch((error) => {
	  console.error('Error fetching data:', error);
	  res.status(500).send('Error fetching data');
	});
  
  })

  app.post('/posts/:id', function (request, response) {
	// Er is nog geen afhandeling van POST, redirect naar GET op /
  
	console.log(request.body)
	console.log("yes1")
   
  
	// fetch('https://fdnd.directus.app/items/person/' + request.params.id, {
	//     method: 'PATCH',
	//     body: JSON.stringify({
	//       custom: apiResponse.data.custom
	//     }),
	//     headers: {
	//       'Content-type': 'application/json; charset=UTF-8'
	//     }
	//   }).then((patchResponse) => {
	//     // Redirect naar de persoon pagina
	//     response.redirect(303, '/detail/' + request.params.id)
	//   })
	// })
	
  
	response.redirect(303, '/');
  });

  // Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8006)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log('Server is running on port 8005')
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
