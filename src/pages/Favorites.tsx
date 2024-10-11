import StickyBar from "../components/StickyBar.tsx";
import { getPreferences } from '../utils/api.tsx';
import { useState, useEffect } from 'react';

function Favorites() {
    const [preferences, setPreferences] = useState([]);

    // currently preferences is requiring the user ID to be passed in

    useEffect(() => {
        const getPreferences = async () => {
            try {
                const data = await getPreferences();
                setPreferences(data ?? []);
            } catch (error) {
                console.error(error);
            }
        };

        getPreferences();
    }, []);

    return (
        <>
            <StickyBar/>
            <h2>Favorites</h2>
            {preferences.length > 0 ? (
                <ul>
                    {preferences.map((pref, index) => (
                        <li key={index}>{pref}</li>
                    ))}
                </ul>
            ) : (
                <p>No favorites found.</p>
            )}        </>
    )
}

export default Favorites
