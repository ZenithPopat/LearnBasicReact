import { useState, useEffect } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // Track form submission success

  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false); // Track if user interacted

  useEffect(() => {
    if (isTouched) {
      setIsValid(validate());
    }
  }, [user, isTouched]); // Runs when user updates OR after first interaction

  const validate = () => {
    let newErrors = {};

    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!user.age || isNaN(user.age) || user.age < 1) newErrors.age = "Enter a valid age";
    if (!user.email.includes("@")) newErrors.email = "Enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  
    if (!isTouched) {
      setIsTouched(true); // Mark form as interacted
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      console.log("Valid User Data:", user);
      setUser({ name: "", age: "", email: "" }); // Reset form
      setErrors({});
    }
  };

  // useEffect to hide success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup function
    }
  }, [success]); // Runs only when `success` changes

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Form</h2>

        {/* Success Message */}
        {success && <p className="text-green-600 text-sm font-bold mb-2">✅ Form submitted successfully!</p>}

        {/* Name Input */}
        <label className="block text-gray-700 font-medium mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Age Input */}
        <label className="block text-gray-700 font-medium mt-4 mb-2">Age:</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

        {/* Email Input */}
        <label className="block text-gray-700 font-medium mt-4 mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Submit Button */}
       
        <button
            type="submit"
            className={`w-full text-white font-bold py-2 px-4 rounded-md mt-4 transition ${
                isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isValid}
            >
            Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;



// import { useState } from "react";

// function UserForm() {
//     // State for User Form
//     const defaultData = {name: "", age: 0, email: "", gender: "male", termsAccepted: false}
//     const [formData, setFormData] = useState(defaultData);

//     const [submittedData, setSubmittedData] = useState(null);
//     const [errors, setErrors] = useState({}); // Store validation errors

//     // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value
//     }));
//     // console.log("Updated State:", formData);  // See state updates in console
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.age || isNaN(formData.age) || formData.age < 18) {
//       newErrors.age = "Age must be a number and at least 18";
//     }

//     if (!formData.email.includes("@")) {
//       newErrors.email = "Enter a valid email";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//     // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (validate()) {
//         alert(`Form submitted successfully! Welcome, ${formData.name}!`);
//         setSubmittedData(formData);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         {errors.name && <p className="text-red-500">{errors.name}</p>}
//         <br />

//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         {errors.email && <p className="text-red-500">{errors.email}</p>}
//         <br />

//         <label>
//           Age:
//           <input type="number" name="age" value={formData.age} onChange={handleChange} required />
//         </label>
//         {errors.age && <p className="text-red-500">{errors.age}</p>}
//         <br />

//         <label>
//           Gender:
//           <select name="gender" value={formData.gender} onChange={handleChange}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </label>
//         <br />

//         <label>
//           <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
//           Accept Terms & Conditions
//         </label>
//         <br />

//         <button type="submit" disabled={!formData.termsAccepted}>Register</button>
//         </form>

//         {/* Display Submitted Data */}
//       {submittedData && (
//         <div className="mt-6 p-4 bg-gray-100 rounded">
//           <h3 className="text-lg font-bold">Submitted Data:</h3>
//           <pre className="text-sm">{JSON.stringify(submittedData, null, 2)}</pre>
//         </div>
//       )}

//     </div>
//   )
// }

// export default UserForm;