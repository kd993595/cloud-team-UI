import React from "react";

type SharedContextType = {
    username: string | null,
    setUsername: (username: string | null) => void
}

const sharedContext = React.createContext<SharedContextType>({
    username: null,
    setUsername: () => {}
});

export default sharedContext;