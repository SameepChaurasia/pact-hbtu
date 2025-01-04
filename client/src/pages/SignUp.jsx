import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 min-h-screen pt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row">

            <div className="flex-1">
                <Link to='/'> 
                    <div className="">
                        <img src="pact-header-logo-new-removebg.png" className="h-12 w-48"/>
                    </div>
                </Link>
                <p className="font-serif font-bold ">You can sign up with your email and password or with google</p>
            </div>

            <div className="flex-1">
                <form className="flex flex-col gap-3">
                        <div>
                        <Label value='Your username' />
                        <TextInput
                            type='text'
                            placeholder='Username'
                            id='username'
                           
                        />
                        </div>
                        <div>
                        <Label value='Your email' />
                        <TextInput
                            type='email'
                            placeholder='name@company.com'
                            id='email'
                            
                        />
                        </div>
                        <div>
                        <Label value='Your password' />
                        <TextInput
                            type='password'
                            placeholder='Password'
                            id='password'
                            
                        />
                        </div>
                        <Button gradientDuoTone="purpleToPink" type="submit">
                            Sign Up
                        </Button>
                </form>
                <div className="flex gap-2 text-sm mt-5">
                    <span>Have an account?</span>
                    <Link to='/sign-in' className="text-cyan-600">Sign In</Link>
                </div>
            </div>

        </div>
    </div>
  )
}
