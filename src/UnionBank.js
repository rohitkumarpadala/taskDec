import AndhraBank from './AndhraBank.js';
import CorporationBank from './CorporationBank.js';


function UnionBank(){
    return (
        <div>
            <h2>This is Parent component</h2>
            <AndhraBank bankname='AndhraBank' location='Vizag' />
            <CorporationBank bankname='CorporationBank' location='Vizag' />
        </div>
    )

}

export default UnionBank;