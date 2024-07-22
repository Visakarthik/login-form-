fetch("https://dummyjson.com/auth/me", { 
      
  // Adding method type 
  method: "POST", 
  body: JSON.stringify({ 
      username: "emilys", 
      password: "emilyspass"
  }), 
    
  // Adding headers to the request 
  headers: { 
      "Content-type": "application/json"
  } 
}) 

// Converting to JSON 
.then(response => response.json()) 
.then(json => console.log(json));
