import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields.');
        }
        try{
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signup' ,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if(res.ok) {
                navigate('/sign-in');
            }
        } catch(error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 min-h-screen pt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row">

            <div className="flex-1">
                <Link to='/'> 
                    <div className="">
                        <img src="pact-header-logo-new-removebg.png" className="h-12 w-48"/>
                    </div>
                </Link>
                <p className="font-serif font-bold ">You can sign up with your email and password or with google</p><br/>
                <p>(The passwords are bcrypted and cannot be accessed by anyone including owners also.So it is completely secured)</p>
            </div>

            <div className="flex-1">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div>
                        <Label value='Your username' />
                        <TextInput
                            type='text'
                            placeholder='Username'
                            id='username'
                            onChange={handleChange}
                        />
                        </div>
                        <div>
                        <Label value='Your email' />
                        <TextInput
                            type='email'
                            placeholder='name@company.com'
                            id='email'
                            onChange={handleChange}
                        />
                        </div>
                        <div>
                        <Label value='Your password' />
                        <TextInput
                            type='password'
                            placeholder='Password'
                            id='password'
                            onChange={handleChange}
                        />
                        </div>
                        <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size="sm"/>
                                        <span className="pl-3">Loading...</span>
                                    </>
                                ): 'Sign Up'
                            }
                        </Button>
                        <OAuth/>
                </form>
                <div className="flex gap-2 text-base font-bold font-serif mt-5">
                    <span>Have an account?</span>
                    <Link to='/sign-in' className="text-cyan-600">Sign In</Link>
                </div>
                {
                    errorMessage && (
                        <Alert color="failure" icon={HiInformationCircle}>
                            {errorMessage}
                        </Alert>
                    )
                }
            </div>

        </div>
    </div>
  )
}
