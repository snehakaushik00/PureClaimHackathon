import React, { useState } from "react";
import Card from "./Card";
// import ResponseData from "./ResponseData";

const ManualForm = () => {
  const [claims, setClaims] = useState("");
  const [ingredients, setIngredients] = useState("");
  // const [responseData, setResponseData] = useState(null);

  // Function to fetch data from the API
  // const fetchData = async (claim, ingredients) => {
  //   const encodedClaim = encodeURIComponent(claim);
  //   const encodedIngredients = encodeURIComponent(ingredients);
  //   const apiUrl = `https://cwbackend-a3332a655e1f.herokuapp.com/claims/analyze?claim=${encodedClaim}&ingredients=${encodedIngredients}`;

  //   const response = await fetch(apiUrl, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   // Check if the response is a JSON object or string
  //   const responseText = await response.text();
  //   try {
  //     // Parse the response if it's JSON
  //     return JSON.parse(responseText);
  //   } catch (error) {
  //     // Return the raw response if parsing fails
  //     return responseText;
  //   }
  // };

  // // Submit handler for the form
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent form from refreshing the page
  //   try {
  //     const data = await fetchData(claims, ingredients);
  //     const parsedData = typeof data === "string" ? JSON.parse(data) : data;
  //     setResponseData(parsedData); // Set the response data
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <>
      <Card>
        <form // onSubmit= {handleSubmit}
          className="w-75 mx-auto">
          <div className="mb-3">
            <label htmlFor="claimsInput" className="form-label">
              Claims
            </label>
            <input
              id="claimsInput"
              type="text"
              className="form-control"
              placeholder="Enter Claims"
              value={claims}
              onChange={(e) => setClaims(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ingredientsInput" className="form-label">
              Ingredients
            </label>
            <input
              id="ingredientsInput"
              type="text"
              className="form-control"
              placeholder="Enter Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </Card>
      {/* <ResponseData responseData={responseData} /> */}
    </>
  );
};

export default ManualForm;
