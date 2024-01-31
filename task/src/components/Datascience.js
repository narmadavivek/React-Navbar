import React from 'react';
import './Card.css';

function DataScience  ()  {
    return (
      <div class="row">
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mMfMupZ8PPJ0MryMxNaJL-qQbGoVRsCgRQ&usqp=CAU' alt=""></img>
          <div class="card-body">
            <h5 class="card-title">Html & CSS </h5>
            <p class="card-text">With supporting  content.</p>
            <p className="card-price">$9.99</p>
                <div className="card-rating">⭐⭐⭐⭐⭐</div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
        <img src='https://media.swipepages.com/2021/11/5fcde7acf64f9100108c719e/z44.svg' alt=""></img>
          <div class="card-body">
            <h5 class="card-title">cybersecurity</h5>
            <p class="card-text">With supporting content</p>
            <p className="card-price">$9.99</p>
                <div className="card-rating">⭐⭐⭐⭐⭐</div>
            <a href="#" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKGHBbwidYOV0Jp3hGbeBpLmfVeXuffed6A&usqp=CAU' alt=""></img>
          <div class="card-body">
            <h5 class="card-title">Full stack developement</h5>
            <p class="card-text">With supporting additional content.</p>
            <p className="card-price">$9.99</p>
                <div className="card-rating">⭐⭐⭐⭐⭐</div>
            <a href="#" class="btn btn-primary">Go & learn</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
        <img src='https://static.guvi.in/course-thumbnail/webps/applicationdevelopmentmicrostamil.webp' alt=""></img>
          <div class="card-body">
            <h5 class="card-title">Data Science</h5>
            <p class="card-text">learn the latest programming</p>
            <p className="card-price">$9.99</p>
                <div className="card-rating">⭐⭐⭐⭐⭐</div>
            <a href="#" class="btn btn-primary">click</a>
          </div>
        </div>
      </div>
    </div>
    );
}

export default DataScience;
