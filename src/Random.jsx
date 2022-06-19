import React, { useState } from 'react'

function Random() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(1);
    const [char, setChar] = useState();
    const [randomNumber, setrandomNumber] = useState(0);

    const Min = (prop) => {
        setMin(prop);
    }

    const Max = (prop) => {
        setMax(prop);
    }

    const Char = (props) => {
        setChar(props);
    }

    const GenerateRandomNumber = () => {
        let rand =  Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min));
        setrandomNumber(rand);
    }

  return (
    <React.Fragment>
      <section className="container-fluid">
        <div className="d-flex flex-row flex-wrap flex-1 justify-content-center align-items-center vh-100 container">
          <div className="card shadow-sm">
            <div className="card-body">
                <div className='row col-12'>
                    <div className="col-12">
                        <h5 className="card-title text-center">Generated number</h5>
                    </div>
                    <div className="col-12">
                        <h6 id='random-number' className="col-12 card-subtitle mb-2 text-muted text-center bg-dark px-2 py-2">{randomNumber}</h6>
                    </div>
                </div>
                <form>
                    <div className='row col-12'>
                        <div className="col-6">
                            <label className="form-label">Min</label>
                            <input className='form-control' type='number' placeholder='1' min='1' max='1000' required onChange={(e) => Min(e.target.value)}></input>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Max</label>
                            <input className='form-control' type='number' placeholder='1000' min='1' max='1000' required onChange={(e) => Max(e.target.value)}></input>
                        </div>
                        <div className='col-12 pt-3'>
                            <button type='button' className='col-12 btn btn-primary rounded' onClick={() => GenerateRandomNumber()}>Generate random number</button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Random