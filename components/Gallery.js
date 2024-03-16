import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

export const Gallery = () => {
  return (
    <div>
      <section className='courses'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
         
        <div className="bx-shadow">
                        <img src="https://th.bing.com/th/id/OIP.Qo9KF1LVsZkGxx2lbMOp7wHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                        <h6>Python Fullstack</h6>
                    </div>
        </div>
        <div className='col-md-3'>
        <div className="bx-shadow">
                        <img src="https://th.bing.com/th/id/OIP.mdKJwxRwCN2eGwRGig4l6wHaEK?pid=ImgDet&rs=1" alt="" />
                        <h6>webdesign</h6>
                    </div>
        
        </div>
        <div className='col-md-3'>
        <div className="bx-shadow">
                        <img src="https://th.bing.com/th/id/R.ffaf9d270f48b64e2ae37478d465450f?rik=mxWJ6sQ1lYyOdA&riu=http%3a%2f%2fwww.iceiweb.org%2fimages%2fphpmysql.jpg&ehk=h7ND1RhvM7coub4GIlvYnqUKXSUz0GhYYXhGhtrsk%2f0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                        <h6>phpmysql</h6>
                    </div>
        
        </div>
        <div className='col-md-3'>
        <div className="bx-shadow">
                        <img src="https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg" alt="" />
                        <h6>full-stack-dev</h6>
                    </div>
        </div>
      </div>
    </div>
    </section>
   </div>
  )
}
