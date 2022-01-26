
import { useState } from 'react';
import { useEffect } from 'react';

const Oppening = () => {

    const [oppening, setOppening] = useState(true);

    useEffect(() => {
        setOppening(false);
    }, [])

    return (
        <div className={`${oppening ? 'opacity-100 z-40' : 'opacity-0 -z-50'} bg-white absolute top-0 left-0 h-screen w-screen transition-all duration-1000`}>

        </div>
    )
}

export default Oppening;