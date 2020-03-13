import React, {useState, useEffect, useRef} from 'react';
import './register-form.scss';
import {Grid, Box, TextField, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import CustomButton from '../CustomButton/CustomButton';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {countries} from 'country-data-list';
import avatar from '../../assets/images/avatar.jpg';
import { validateEmail, validateName, validatePassword } from '../../helpers/validations';

const LoginForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [birthday, setBirthday] = useState(new Date())
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [LastNameError, setLastNameError] = useState(false)
    const inputLabel = React.useRef(null);

    console.log(countries.all)

    useEffect(() => {
        document.title = "Registeration Form"
    }, [])

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
        if(validateName(e.target.value)){
            setFirstNameError(false)
        } else {
            setFirstNameError(true)
        }
    }
    const onLastNameChange = (e) => {
        setLastName(e.target.value)
        if(validateName(e.target.value)){
            setLastNameError(false)
        } else {
            setLastNameError(true)
        }
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
        if(validateEmail(e.target.value)){
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
        if(validatePassword(e.target.value)){
            setPasswordError(false)
        } else{
            setPasswordError(true)
        }
    }

    const avatarChange = (e) => {
        let file = e.target.files[0];
        setProfileImage(file)
        var reader = new FileReader();
        reader.onloadend = function() {
            setProfileImage(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const handleSubmit = () => {

    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            handleSubmit()
        }
    }

    return (
        <Grid container justify="space-between" className="register-form">
            <Grid item={8} container spacing={2} justify="flex-start" wrap="wrap" className="form">
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        className="custom-input"
                        error={firstNameError}
                        type="text"
                        label="First Name"
                        value={firstName}
                        variant="outlined"
                        onChange={onFirstNameChange}
                        onKeyDown={handleKeyDown} />
                    {firstNameError && <span className="error-text">First Name Should be atleast 3 Characters</span>}
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        className="custom-input"
                        error={LastNameError}
                        type="text"
                        label="Last Name"
                        value={lastName}
                        variant="outlined"
                        onChange={onLastNameChange}
                        onKeyDown={handleKeyDown} />
                    {LastNameError && <span className="error-text">First Name Should be atleast 3 Characters</span>}
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        className="custom-input"
                        error={emailError}
                        type="email"
                        label="Email"
                        value={email}
                        variant="outlined"
                        onChange={onEmailChange}
                        onKeyDown={handleKeyDown} />
                    {emailError && <span className="error-text">Email is required and should be valid</span>}
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        className="custom-input"
                        error={passwordError}
                        type="password"
                        label="Password"
                        value={password}
                        variant="outlined"
                        onChange={onPasswordChange}
                        onKeyDown={handleKeyDown} />
                    {passwordError && <span className="error-text">Password is required, at least 8 Characters, 1 uppercase, 1 number and 1 special character</span>}
                </Grid>
                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className="custom-input date"
                            variant="inline"
                            format="MM/dd/yyyy"
                            label="Birthday Date"
                            value={birthday}
                            onChange={(e, val) => setBirthday(val)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        className="custom-input"
                        type="text"
                        label="Phone Number"
                        value={phone}
                        variant="outlined"
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyDown={handleKeyDown} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        className="custom-input"
                        type="text"
                        label="City"
                        value={city}
                        variant="outlined"
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleKeyDown} />
                </Grid>
                <Grid item xs={6}>
                    <FormControl variant="outlined" className="select-input custom-input">
                        <InputLabel ref={inputLabel} id="country-label">Country</InputLabel>
                        <Select
                            labelId="country-label"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            labelWidth={60}>
                            {countries && countries.all && countries.all.map((item, index) =>
                                <MenuItem key={index} value={item.name}> {item.name} </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item container justify="center" xs={3}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="image-upload">
                    <img src={profileImage ? profileImage : avatar} alt="test app" className="avatar" />
                    <Box className="image-upload-actions">
                        <label htmlFor="profile-image">Upload Profile Image</label>
                        <input type="file" id="profile-image" accept="image/gif, image/jpeg, image/png" onChange={avatarChange} />
                    </Box>
                </Box>
            </Grid>
            <Grid item container justify="center" xs={12}>
                <CustomButton loading={props.loading} disabled={props.loading} className="submit-btn" onClick={handleSubmit}>Sign up</CustomButton>
            </Grid>
        </Grid>
    )
}

export default LoginForm;
