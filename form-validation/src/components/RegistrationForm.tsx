import { useState } from "react";
import { FormData } from "../types/form";

const RegistrationForm = ()=>{
    const [Form, setForm] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = ()=>{
        const newErrors: Partial<FormData> = {};
        if(!Form.name) newErrors.name = "Name is required";
        if(!Form.email) newErrors.email = "Email is required";
        else if(!/\S+@\S+\.\S+/ .test(Form.email)) newErrors.email = "Invalid email";
        if(Form.password.length < 8) newErrors.password = "Password must be at least 8 characters";
        if(Form.confirmPassword !== Form.password) newErrors.confirmPassword = "passwords must match";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...Form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            setSubmitted(true);
        }
    };

    return(
        <form onSubmit={handleSubmit} noValidate>
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Name"  onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}

            <input type="email" name="email" placeholder="Email"  onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <input type="password" name="password" placeholder="Password"  onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}

            <input type="password" name="confirmPassword" placeholder="Confirm Password"  onChange={handleChange} />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

            <button type="submit">Submit</button>
            {submitted && <p>Form submitted successfully!</p>}
        </form>
    )
}

export default RegistrationForm;

