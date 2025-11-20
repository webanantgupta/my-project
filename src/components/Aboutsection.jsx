import baradariAbout from "../assets/baradarihero1.jpg";



const Aboutsection = () => {
    return <section id="about" className="about_container">
        <div className="about_element flex gap-4 ">
            <div className="about_content basis-2/4 pr-2">
                <h2 className="text-4xl font-semibold text-center text-indigo-800 mb-5">About This Property</h2>
                <h4 className="text-2xl font-medium text-indigo-800 mb-2">Safed Baradari, Lucknow Overview</h4>
                <p className="mb-10">Built by Nawab Wajid Ali Shah, Safed Baradari is a white marbled palace originally constructed as the Nawab's "Palace of Mourning". Located at Maharaja Mahamudabad of Qaiser Bagh, the Safed Baradari houses marble statues of the Anjuman founders Maharajas Man Singh and Balrampur's Digvijay Singh. Initially called Qasr-ul-Aza, this structure further came to be used as a British petitionary court.</p>
                <h4 className="text-2xl font-medium text-indigo-800 mb-2">Safed Baradari Architecture</h4>
                <p>Built by Nawab Wajid Ali Shah in 1854, the Safed Baradari houses an entire royal manifestation in marble. It sites elaborate corridors, halls and well-designed architectural intricacies. This marble palace also hosts two marble statues of the Maharajas in the Baradar's main hall.
                </p>
                <br />
                <p>These kings, Man Singh and Digvijay Singh founded the Anjuman which was later known as the British India Association of Oudh. The Baradari, or the 'Twelve Doored Palace' houses its main entrance on the eastern end which open up to octagonal pillars, further giving way to witnessing marvellous artistry via stucco artworks and bright wallwork</p>
            </div>
            <div className="about_image basis-2/4">
                <img className="w-full object-cover" src={baradariAbout} alt="baradari image" />
            </div>
        </div>
       
    </section>

}

export default Aboutsection;