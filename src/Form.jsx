import React, { useState } from 'react'


const Form = () => {
    let [name, setName] = useState("");
    let [mobile, setMobile] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [address, setAddress] = useState("");
    let [gender, setGender] = useState("");
    const [skill, setSkill] = useState({
        language: []
    });

    const handleChange = (e) => {

        const { value, checked } = e.target;
        const { language } = skill;

        if (checked) {
            setSkill({
                language: [...language, value],
            });
        }
        else {
            setSkill({
                language: language.filter((e) => e !== value),
            });
        }
    }

    return (
        <>
            <h3>User Info</h3>

            <div className="formdiv" >

                <div className='flexbox'>
                    <form>

                        <input type="text" className='txbox' placeholder='Your Name' onChange={(e) => setName(e.target.value)} ></input><br />
                        <input type="number" className='txbox' placeholder='Your Mobile No' onChange={(e) => setMobile(e.target.value)} ></input><br />
                        <input type="text" className='txbox' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} ></input><br />
                        <input type="password" className='txbox' placeholder='Password' onChange={(e) => setPassword(e.target.value)} ></input><br />
                        <input type="text" className='txbox' placeholder='Address' onChange={(e) => setAddress(e.target.value)}></input><br />
                        <span className='tag' >Gender:</span>
                        <input type="radio" id="rdfemale" value="Male" name='gender' onChange={(e) => setGender(e.target.value)} />
                        <label for="rdfemale">Male</label>
                        <input type="radio" id="rdfemale" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                        <label for="rdfemale">Female</label><br />
                        <div>
                            <span className='tag' >Skills:</span>
                            <input type="checkbox" id="chreact" value="React" name="skill" onChange={handleChange} /><label for="chreact">React</label><br />
                            <input type="checkbox" id="chnode" value="Node" name="skill" onChange={handleChange} /><label for="chnode">Node</label><br />
                            <input type="checkbox" id="changular" value="Angular" name="skill" onChange={handleChange} /><label for="changular">Angular</label><br />
                            <input type="checkbox" id="chflutter" name="skill" value="Flutter" onChange={handleChange} /><label for="chflutter">Flutter</label>
                        </div>
                    </form>
                </div>
                <dvi className="divinfo flexbox" >
                    <div style={{ display: name.length > 0 ? 'block' : 'none' }} ><h4>Name:</h4>  {name}</div>
                    <div style={{ display: mobile.length > 0 ? 'block' : 'none' }}><h4>Mobile:</h4>  {mobile}</div>
                    <div style={{ display: email.length > 0 ? 'block' : 'none' }}><h4>Email:</h4>  {email}</div>
                    <div style={{ display: password.length > 0 ? 'block' : 'none' }}><h4>Password:</h4>  {password}</div>
                    <div style={{ display: address.length > 0 ? 'block' : 'none' }}><h4>Address:</h4>  {address}</div>
                    <div style={{ display: gender.length > 0 ? 'block' : 'none' }}><h4>Gender:</h4>  {gender}</div>
                    <div style={{ display: skill.language.length > 0 ? 'block' : 'none' }} ><h4>Skills:</h4>  {skill.language.join(",")}</div>


                </dvi>
            </div>
        </>
    )
}

export default Form