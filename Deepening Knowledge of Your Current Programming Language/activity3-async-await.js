// ==========================================
// Activity 3: Understanding Async/Await
// Language: JavaScript
// Objective: Practice asynchronous programming
// ==========================================


// ---------- Basic Promise Example ----------
// This function simulates fetching data
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received successfully");
    }, 1000);
  });
}


// ---------- Using Async/Await ----------
// async allows use of await inside the function
async function getData() {
  try {
    const data = await fetchData();
    console.log("Fetch Result:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


// ---------- Practice Implementation ----------
// Simulating a login process using async/await
async function simulateLogin() {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Login successful");
      }, 1000);
    });

    console.log(response);

  } catch (error) {
    console.error("Login failed");
  }
}


// ---------- Run Examples ----------
getData();
simulateLogin();