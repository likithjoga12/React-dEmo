import React from 'react'
// import { Link } from "gatsby"


export const Footer2 = () => {
  return (
    <div>
        <footer>
            <section className="footer-top">
                <h3><a href="#">Contact Us</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quos doloremque nemo fuga voluptatum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <form action="">
                    <input type="text" placeholder="<NAME>" />
                    <br/>
                    <input type="email" placeholder="Email Address"/>
                    <button  >Submit</button>
                    </form>
                    </section>
                    <hr style={{marginTop: "10px"}}/>
                    <section class="footer-bottom">
                        <ul id="socials">
                            <li ><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            </ul>
                            <span>&copy; Copyright 2023 | All Rights Reserved by <b>designed by me</b>.</span>
                            <small>&copy; Copyright 2023 | All Rights Reserved</small>
                            </section>
        </footer>
    </div>
  )
}
