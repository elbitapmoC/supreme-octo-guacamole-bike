import "./style.css";

// READ DATA
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("ERR!"));

// UPDATE DATA - We want to create a new users at this API.
fetch("https://reqres.in/api/users", {
  //  options section
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  //  The data that we want to send, we pass it as JSON.
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log("✅");
      return res.json();
    } else {
      console.log("❌");
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("ERR!"));
