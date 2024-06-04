import './index.css'

const Fourthpage=()=>{
    return(
        <div>
            <img src="lastimage.png" alt="lastimage" className="lastimage"/>
            <div className="lastpage">
                <div>
                <div className="rowalignment">
                    <img src="Frame.png" alt="Frame" className="Frame"/>
                    <h1 className="headlogo">Uifry<sup className="sup">TM</sup></h1>
                </div>
                <div className="rowalignment">
                <img src="Vector.png" alt="message" className="message"/>
                    <p className="messagetext">Help@Frybix.Com</p>
                </div>
                <div className="rowalignment">
                    <img src="Vector (1).png" alt="call" className="call"/>
                    <p className="number">+1234 456 678 89</p>
                </div>
                </div>
                <div className="column">
                    <h1 className="bottomhead">
                        Links
                    </h1>
                    <p className="bottomtext">
                        Home
                    </p>
                    <p className="bottomtext">
                        About Us
                    </p>
                    <p className="bottomtext">
                        Bookings
                    </p>
                    <p className="bottomtext">
                        Blog
                    </p>
                </div>
                <div className="column">
                    <h1 className="bottomhead">
                        Legal
                    </h1>
                    <p className="bottomtext">
                        Terms of Use
                    </p>
                    <p className="bottomtext">
                        Privacy Policy
                    </p>
                    <p className="bottomtext">
                        Cookie Policy
                    </p>
                </div>
                <div className="column">
                    <h1 className="bottomhead">
                        Product
                    </h1>
                    <p className="bottomtext">
                        Take Tour
                    </p>
                    <p className="bottomtext">
                        Live Chat
                    </p>
                    <p className="bottomtext">
                        Reviews
                    </p>
                </div>
                <div className="columnlast">
                    <h1 className="bottomheadlast">
                        Newsletter
                    </h1>
                    <p className="bottomtextlast">
                        Stay Up To Date
                    </p>
                    <div className="subscribediv">
                        <input
                            placeholder="Your email" type="input" className="email"/>
                        <button className="subscribebutton">
                            <p className="subscribetext">Subscribe</p>
                        </button>
                    </div>
                </div>
                
            </div>
            <hr/>
            <p className="copyright">
            Copyright 2022 uifry.com all rights reserved
            </p>
        </div>
    )
}
export default Fourthpage