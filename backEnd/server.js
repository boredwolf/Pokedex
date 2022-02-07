require("dotenv").config();

const express = require("express");
const app = express();
const port = 3001;
const db = require("./db");
const cors = require("cors");
const session = require("express-session");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    name: "poke",
    secret: "Y&yD%8(P[M+h43L6FNc!c!Jn++?q(&Nz",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      await db.user.create({
        data: {
          username: username,
          password: password,
          email: email,
        },
      });
      res.status(201).send("created");
    }
  } catch (e) {
    res.status(500).send("register failed");
    console.log(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.user.findFirst({
      where: {
        email: email,
        password: password,
      },
      include: {
        pokemon: true,
      },
    });

    if (!user) {
      return res.status(401).send("wrong credentials");
    }
    
    // Stock le user en session
    req.session.user = user;

    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(401).send("wrong credentials");
  }
});

app.get("/logout", async (req, res) => {
  req.session.destroy();
});

app.post("/catchPokemon", async (req, res) => {
  const { pokeId, userId } = req.body;

  try {
    const result = await db.userPokemon.findFirst({
      where: {
        userId: userId,
        pokeId: pokeId,
      },
    });

    if (!result) {
      await db.userPokemon.create({
        data: {
          userId: userId,
          pokeId: pokeId,
        },
      });

      return res.status(201).send("created");
    }

    res.status(200).send("already caught !");
  } catch (e) {
    res.status(500).send("error");
    console.log(e);
  }
});

app.get('/me', (req, res) => {
  try {
    res.send(req.session.user);
  } catch (e) {
    res.status(401).send('unauthorized');
  }
})

app.post("/me", async (req, res) => {
  const { id } = req.body;

  try {
   const user = await db.user.findUnique({
     where:{
       id : parseInt(id)
     }, include:{
       pokemon: true
     }
   })
   console.log(user)
   res.status(200).send(user)
  }
  catch(e){
    console.log(e)
    res.status(500).send('not found')
  }
});
