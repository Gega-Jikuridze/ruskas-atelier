

const Contact = ({onClose,submit} ) => {




    return <div className="overlay">
        <div className="contact-form">
        <i className='bx bx-x-circle' onClick={onClose}></i>
             <h1>დატოვეთ თქვენი  <br />საკონტაქტო ინფორმაცია</h1>
             <form onSubmit={submit}>
                <input type="text" placeholder="სახელი" required/>
                <input type="text" placeholder="გვარი" required/>
                <input type="tel" placeholder="ტელეფონი" required/>
                <input type="email" placeholder="მეილი" required/>
                <input type="submit" value="შენახვა" className="contact-submit"/>
             </form>
        </div>
    </div>
}


export default Contact