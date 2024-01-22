import React from 'react';
import contact from "../images/ContactUs.png";
const Form=()=>{
    return (
        <section style={styles.contactSection}>
            <div className="w-[40%]">
            <img
            style={{marginLeft:'25%',marginTop:'10%'}}
          src={contact}
          width="100%"
          height="100%"
          padding="3rem"
        //   className="d-inline-block align-top mt-1 mr-2"
        //   style={{ marginLeft: "10px" }}
          alt=""
        />
            </div>
          <div style={styles.contactContainer}>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <p style={styles.sectionSubtitle}>
              Have any question or query? Get in touch with us.
            </p>
            <form style={styles.contactForm}>
              <input
                type="text"
                placeholder="Your Name"
                style={styles.inputField}
                // onChange={(e) => setName(e.target.value)}
                // value={name}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                style={styles.inputField}
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                style={styles.textareaField}
                // onChange={(e) => setMessage(e.target.value)}
                // value={message}
                required
              ></textarea>
              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </section>
      );
    };
    
    const styles = {
      contactSection: {
        padding: "80px 0",
        background: "#f5f5f5",
        textAlign: "center",
        display:"flex"
      },
      contactContainer: {
        maxWidth: "600px",
        margin: "0 auto",
        
      },
      sectionTitle: {
        fontSize: "2.5rem",
        marginBottom: "20px",
        color: "#333",
      },
      sectionSubtitle: {
        fontSize: "1.2rem",
        marginBottom: "40px",
        color: "#555",
      },
      contactForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      inputField: {
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "1rem",
      },
      textareaField: {
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "1rem",
      },
      submitButton: {
        padding: "10px 30px",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem",
        color: "#fff",
        background: "#007bff",
        cursor: "pointer",
        transition: "background 0.3s ease",
      },
    };
    
    export default Form;
    