const url = 'https://api-open.data.gov.sg/v2/real-time/api/four-day-outlook';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}