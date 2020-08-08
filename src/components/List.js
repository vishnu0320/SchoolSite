import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faFlag,
  faGlobe,
  faBook,
  faLaptop,
  faChessBishop,
  faSchool,
  faSignal,
  faWonSign,
  fsUser,
} from '@fortawesome/free-solid-svg-icons';

function List() {
  return (
    <div className='slideBar'>
      <div className='List'>
        <h3>___ We are Proud of ___</h3>
        <div className='gridDemoMain'>
          <div className='gridDemo'>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faCoffee} />
              </div>
              <div>Growing Network</div>
            </div>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <div>State of the art Infrastructure</div>
            </div>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faChessBishop} />
              </div>
              <div>Unmatched Safety measures</div>
            </div>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faSchool} />
              </div>
              <div>Holistic Development</div>
            </div>
          </div>
          <div className='gridDemo'>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <div>Smart Class</div>
            </div>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faBook} />
              </div>
              <div>Teacher Student Ratio</div>
            </div>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faSignal} />
              </div>
              <div>IPC Curriculam</div>
            </div>
            <div className='listF'>
              <div className='icon'>
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div>Global Curriculum</div>
            </div>
            {/* <div className='listF'>
            <div className='icon'>
              <FontAwesomeIcon icon={faWonSign} />
            </div>
            <div>Academics Result</div>
          </div> */}
          </div>
        </div>
      </div>
      <div className='List2'>
        <h3>___ Enquire Form ___</h3>
        <form>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Name</label>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              placeholder='Enter Name'
            ></input>
          </div>

          <div class='form-group'>
            <label for='exampleInputEmail3'>Contact No.</label>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail4'
              placeholder='Enter Contact'
            />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>City</label>
            <input
              type='text'
              class='form-control'
              id='exampleInputPassword1'
              placeholder='City'
            />
          </div>
          <div class='form-group'>
            <label for='exampleFormControlTextarea1'>Any Question</label>
            <textarea
              class='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default List;
