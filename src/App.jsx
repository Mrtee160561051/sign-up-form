import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit the form (e.g., API call)
      alert('Form submitted', formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <main className="bg-[whitesmoke] text-[max(3vmin,0.5rem)] min-h-[100vh] grid grid-cols-4">
      <section className="col-[1/2] text-white overflow-hidden bg-[url('src/assets/leave.jpg')] bg-fixed bg-contain">
        <div className="top-28 w-full fixed py-3 bg-[rgba(0,0,0,0.45)]">
          <div className="flex place-content-center w-[25vw]">
            <img className="w-[3rem] h-auto" src="src/assets/odin-lined.png" alt="Odin logo"/>
            <p className="text-[2.4rem]">ODIN</p>
          </div>
        </div>
        <p className="text-[max(2vmin,0.4rem)] sm:text-center text-white fixed pl-1 bottom-2 w-[25vw]">
          Photo by &nbsp;<u>helie</u>&nbsp; west on &nbsp;<u>unplash</u>
        </p>
      </section>

      <section className="px-11 py-8 bg-[whitesmoke] col-[2/5] z-10">
        <div className="font-bold">
          <p>This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. Sign up now to get started.</p>
          <p className="my-5">You know you want to.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset className="bg-white px-10 mt-9 pt-4 mb-5">
            <p className="text-[max(4vmin,0.6rem)] font-medium">Let's do this!</p>
            <article className="grid gap-y-2 gap-x-11 sm:grid-cols-2 pt-2 pb-4">
              <div>
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  autoComplete="on"
                />
                {formErrors.firstName && <span className="text-red-500">{formErrors.firstName}</span>}
              </div>
              <div>
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  autoComplete="on"
                />
                {formErrors.lastName && <span className="text-red-500">{formErrors.lastName}</span>}
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="John@gmail.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                  autoComplete="on"
                />
                {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
              </div>
              <div>
                <label htmlFor="phoneNumber">PHONE NUMBER</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="123-456-7890"
                  required
                />
                {formErrors.phoneNumber && <span className="text-red-500">{formErrors.phoneNumber}</span>}
              </div>
              <div>
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.password && <span className="text-red-500">{formErrors.password}</span>}
              </div>
              <div>
                <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.confirmPassword && <span className="text-red-500">{formErrors.confirmPassword}</span>}
              </div>
            </article>
          </fieldset>
          <button type="submit" className="bg-[#678e55] hover:text-[#283621ea] text-white rounded-md py-1 px-5 mb-5">Create Account</button>
        </form>
        <div className="flex gap-2 flex-wrap">
          <p>Already have an account?</p>
          <a className="text-[#283621] font-semibold hover:text-[#283621b9]" href="#">Log in</a>
        </div>
      </section>
    </main>
  );
}

export default React.memo(App);
