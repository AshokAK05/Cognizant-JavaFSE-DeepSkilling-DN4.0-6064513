import React, { useState } from 'react';

function CurrencyConverter() {
    const [rupees, setRupees] = useState('');
    const [euro, setEuro] = useState('');
    const exchangeRate = 0.011; // Approx 1 INR = 0.011 EUR (as of July 2025, for demonstration)

    const handleRupeesChange = (e) => {
        setRupees(e.target.value);
    };

    const handleSubmit = () => { // Handle the Click event of the button to invoke the handleSubmit event and handle the conversion of the euro to rupees. 
        if (rupees) {
            const convertedEuro = parseFloat(rupees) * exchangeRate;
            setEuro(convertedEuro.toFixed(2)); // Convert Indian Rupees to Euro 
        } else {
            setEuro('');
        }
    };

    return (
        <div>
            <h2>Currency Convertor</h2>
            <div>
                <label>Indian Rupees (INR): </label>
                <input
                    type="number"
                    value={rupees}
                    onChange={handleRupeesChange}
                    placeholder="Enter amount in INR"
                />
            </div>
            <br />
            {/* Handle the Click event of the button to invoke the handleSubmit event  */}
            <button onClick={handleSubmit}>Convert to Euro</button>
            <br /><br />
            <div>
                <label>Euro (EUR): </label>
                <span>{euro}</span>
            </div>
        </div>
    );
}

export default CurrencyConverter;