import React, { useEffect, useState } from 'react';

const Potd = () => {
    const [apod, setApod] = useState(null);

    useEffect(() => {
        const fetchAPOD = async () => {
            const apiKey = 'aNsbyQgR9PpQHwPCFxJAWocvs5r4NEpNmkLxWdZW';
            const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setApod(data);
            } catch (error) {
                console.error("Error fetching APOD data: ", error);
            }
        };

        fetchAPOD();
    }, []);

    return (
        <>
            {apod && (
                <div className="apodContent">
                    <div className="apodBox">
                        <img src={apod.url} alt={apod.title} className="image" />
                        <div className="apodText">
                            <h2 className="title">{apod.title} - {apod.date}</h2>
                            <p className="apodExplanation">{apod.explanation}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Potd;
