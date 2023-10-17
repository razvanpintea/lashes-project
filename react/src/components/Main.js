

import Home from './Home'
import Map from './Map'
import Contact from "./Contact";
import BookingModal from './BookingModal.js';



function Main() {

    return (
        <>
            <Home />
            <Map />
            <Contact />
            <BookingModal />

            <div style={{ textAlign: 'center', backgroundColor: "black", height: '5rem' }}>
                <p style={{ color: "white", paddingTop: "1rem" }}>Copyright</p>
            </div>
        </>
    )
}
export default Main;