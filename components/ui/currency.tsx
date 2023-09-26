"use client";

import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "INR"
  });

interface CurrencyProps {
    value?: string | number;
}

const Currency:React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return ( 
        <div className="dont-semibold">
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency
