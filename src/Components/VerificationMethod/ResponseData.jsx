import Card from "./Card";

const ResponseData = ({ responseData }) => {
  return (
    <>
      {responseData && typeof responseData === "object" ? (
        <Card>
          <div className="mt-4 mx-auto overflow-auto">
            <h2>{responseData.verdict}</h2>{" "}
            {/* Display verdict as heading */}
            <ul>
              {responseData.why.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
            <p>{responseData.detailed_analysis}</p>
            {/* Pretty print JSON */}
          </div>
        </Card>
      ) : (
        <div className="mt-4  mx-auto "></div>
      )}
    </>
  );
};

export default ResponseData;
