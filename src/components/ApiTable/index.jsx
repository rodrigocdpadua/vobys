import React, {useState, useEffect} from 'react';
import getCountries from '../../api/api_req';
import '../styles.css';

const ApiTable = () => {
    const [listCountries, setListCountries] = useState([]);

    useEffect(() => {
        setCountries();
    },[]);

    async function setCountries() {
        setListCountries(await getCountries());
    }

    return(
        <div className='api-side'>
            <h2>API</h2>
            <div className='api-container'>
                <table className='countries-table'>
                    <thead>
                        <tr>
                            <th>CODE</th>
                            <th>ACRONYM</th>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listCountries.map((country) =>
                                <tr className='item-country' key={country.id.M49}>
                                    <td>{country.id.M49}</td>
                                    <td>{country.id['ISO-3166-1-ALPHA-2']}</td>
                                    <td>{country.nome.abreviado}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ApiTable;