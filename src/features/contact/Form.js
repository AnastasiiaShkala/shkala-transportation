
function Form() {
    return (
        <div>
            <div className="contact-form">
                <form action="https://formspree.io/f/xaygaaok" method="POST">
                    <label>
                        Your name:
                        <br />
                        <input type="text" name="name" className="write" />
                    </label>
                    <label>
                        Your phone number:
                        <br />
                        <input type="phone" name="phone" className="write" />
                    </label>
                    <label>
                        Your email:
                        <br />
                        <input type="email" name="email" className="write" />
                    </label>
                    <label>
                        Your message:
                        <br />
                        <textarea name="message" className="write"></textarea>
                    </label>
                    <button className='home-btn form' type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Form;