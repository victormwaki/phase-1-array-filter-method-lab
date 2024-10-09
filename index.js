const drivers = [
    { name: "Alice", hometown: "New York" },
    { name: "Bob", hometown: "Los Angeles" },
    { name: "Charlie", hometown: "Chicago" },
    { name: "alice", hometown: "San Francisco" }, // Case insensitive match
    { name: "David", hometown: "Miami" },
    { name: "Bobby", hometown: "Houston" }
  ];
  
  // Function to find matching driver names (case insensitive)
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the given string
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  // Function to match driver objects by name
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example usage:
  console.log(findMatching(drivers.map(driver => driver.name), "Alice")); // Output: ['Alice', 'alice']
  console.log(fuzzyMatch(drivers.map(driver => driver.name), "Bo")); // Output: ['Bob', 'Bobby']
  console.log(matchName(drivers, "Alice")); // Output: [{ name: "Alice", hometown: "New York" }]
  