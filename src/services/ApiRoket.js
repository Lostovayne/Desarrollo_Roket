const APIURL = "https://aqh.fitsnr.com/api/aqh/objects";

const FetchApiRocket = async () => {
    const response = await fetch(APIURL, {
        method: "GET",
        headers: {
            "X-token": "5Dt4y4fN1Eh8lX1cFKtO",
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};

export default FetchApiRocket;
