import React from 'react'

const Form = ({handleFormSubmit, handleInputChange, handleLocation, street, city, state, zipcode, gender, stalls, level, caption}) => 
    <form>
        <p>   
            <label htmlFor="street">Street</label>
            <input id="street" type="text" value={street} onChange={handleInputChange} />
            <button onClick={handleLocation}>location</button>
        </p>
        <p>   
            <label htmlFor="city">City</label>
            <input id="city" type="text" value={city} onChange={handleInputChange} />
        </p>
        <p>   
            <label htmlFor="state">State</label>
            <select id="state" name="states" value={state} onChange={handleInputChange} >
                <option value="" disabled selected>Select an Option</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
            </select>
        </p>
        <p>   
            <label htmlFor="zipcode">Zipcode</label>
            <input id="zipcode" type="text" value={zipcode} onChange={handleInputChange} />
        </p>
        <p>   
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="genders" value={gender} onChange={handleInputChange}>
                <option value="" disabled selected>Select an Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
            </select>
        </p>
        <p>   
            <label htmlFor="stalls">Number of stalls</label>
            <input id="stalls" type="number" value={stalls} onChange={handleInputChange} />
        </p>
        <p>   
            <label htmlFor="level">Level</label>
            <input id="level" type="number" value={level} onChange={handleInputChange} />
        </p>
        <p>   
            <label htmlFor="caption">Caption</label>
            <input id="caption" type="text" value={caption} onChange={handleInputChange} />
        </p>
        <p>   
            <label htmlFor="image">Image</label>
            <input id="image" type="file" onChange={handleInputChange} />
        </p>
        <button onClick={handleFormSubmit}>Add</button>
    </form>

export default Form