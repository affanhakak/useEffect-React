import { useState, useEffect } from "react";
const Random_Quote_Url = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchQuote();
  }, []);
  async function fetchQuote() {
    const response = await fetch(Random_Quote_Url);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    setIsLoading(false);
  }
  return (
    <div>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>

      <h2>{quote.text}</h2>
      <h3>{quote.author}</h3>
      <button onClick={fetchQuote}>Get Quote using handler</button>
    </div>
  );
}

export default QuoteFetcher;
