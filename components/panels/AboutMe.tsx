const AboutMe = () => {
    return (
        <div className="writing-style-box">
            <div className="img-box">
                <svg stroke="currentColor" fill="#37a987"
                    strokeWidth="0" viewBox="0 0 24 24"
                    className="flex-shrink-0" height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="#37a987" stroke="#000"
                        strokeWidth="2"
                        d="M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"
                    >
                    </path>
                </svg>
            </div>
            <div className="writing-style-dis">
                <div className="about-me">
                    <div className="sub-heading">
                        <h4>About Me</h4>
                        <p>
                            This information will help us
                            tailor
                            ChatSpot&apos;s responses to your
                            needs!
                        </p>
                    </div>
                    <form>
                        <div className="row pad">
                            <div className="col-lg-6 left">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text" id="name"
                                    placeholder="Your name"
                                    name="name"
                                    className="p-2 rounded-3"
                                    defaultValue=""
                                />
                            </div>
                            <div className="col-lg-6 right">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="Enter your location"
                                    className="p-2 rounded-3"
                                    defaultValue="" />
                            </div>
                        </div>
                        <div className="row pad">
                            <div className="col-lg-12">
                                <label htmlFor="company-website">Company
                                    Website</label>
                                <input
                                    type="text"
                                    id="company-website"
                                    name="website"
                                    placeholder="Your company website"
                                    className="p-2 rounded-3"
                                    defaultValue="" />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="my_offer">Enter your offer in the text box</label>
                                <textarea
                                    id="my_offer"
                                    name="my_offer"
                                    placeholder="Type your offer here"
                                    className="p-2 rounded-3"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
