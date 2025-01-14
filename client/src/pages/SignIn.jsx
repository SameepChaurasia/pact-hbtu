import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
    const [formData, setFormData] = useState({});
    const {loading, error: errorMessage} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if( !formData.email || !formData.password) {
            return dispatch(signInFailure('Please fill out all fields.'));
        }
        try{
           dispatch(signInStart());
            const res = await fetch('/api/auth/signin' ,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                dispatch(signInFailure(data.message));
            }
            if(res.ok) {
              dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch(error) {
            dispatch(signInFailure(error.message));
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
                <p className="font-serif font-bold ">You can sign in with your email and password or with google</p><br/>
                <p>(After beign re-directed to home page means you are signed in ...theres an internal error due to which you profile not showing after sign-in but is signed and the error will be fixed soon)</p>
            </div>

            <div className="flex-1">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
                                ): 'Sign In'
                            }
                        </Button>
                        <OAuth/>
                </form>
                <div className="flex gap-2 text-base font-bold font-serif mt-5">
                    <span>Dont have an account?</span>
                    <Link to='/sign-up' className="text-cyan-600">Sign Up</Link>
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
