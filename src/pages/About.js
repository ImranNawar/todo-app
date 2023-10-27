import React from 'react';
import NavbarC from '../components/NavbarC';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <NavbarC />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-center fw-bold">Welcome to Our Todo App!</h2>
            <p className="mb-4">
              Maximize your productivity with our efficient Todo App. Whether you're a student, a professional, or anyone looking to stay organized, our app can help you manage your tasks, set priorities, and meet deadlines.
            </p>
            <p className="mb-4">
              With an easy-to-use interface and powerful features, you'll be able to streamline your workflow and accomplish more in less time.
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default About;
