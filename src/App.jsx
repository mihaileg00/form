import React, { useEffect, useState } from "react";
import "./App.css";
import logodark from "./logodark.svg";
import logolight from "./logolight.svg";

function CustomAlert({ message, type, setAlert }) {
  return (
    <div
      className={`relative flex flex-col justify-center border-4 bg-darkblue rounded-3xl items-center w-96 h-56 ${type === 'error' ? "border-red-500" : 'border-green-500'} `}
    >
      <p className="text-white">{message}</p>
      <button className="absolute bottom-6 right-6 mt-4 bg-white text-black px-4 py-2 rounded-md" onClick={() => {setAlert(false); window.location.reload();}}>Close</button>
    </div>
  );
}



function App() {
  const [postCode, setPostCode] = useState("");
  const [postCodeError, setPostCodeError] = useState(false);
  const [houseNumber, setHouseNumber] = useState("");
  const [houseNumberError, setHouseNumberError] = useState(false);
  const [houseNumberAddition, setHouseNumberAddition] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [dataProcessing, setDataProcessing] = useState(false);
  const [dataProcessingError, setDataProcessingError] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const postCodeRegex = new RegExp(
    "^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$",
    "i",
  );
  const houseNumberRegex = new RegExp("^[1-9][0-9]{0,3}[a-z]?$");
  const firstNameRegex = new RegExp("^[a-zA-Z]{2,}$");
  const lastNameRegex = new RegExp("^[a-zA-Z]{2,}$");
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
  );
  const phoneNumberRegex = new RegExp("^[0-9]{10}$");

  const [isFormValid, setIsFormValid] = useState(false);

  const validatePostCode = () => {
    if (postCodeRegex.test(postCode)) {
      setPostCodeError(false);
      return true;
    } else {
      setPostCodeError(true);
      return false;
    }
  };

  const validateHouseNumber = () => {
    if (houseNumberRegex.test(houseNumber)) {
      setHouseNumberError(false);
      return true;
    } else {
      setHouseNumberError(true);
      return false;
    }
  };

  useEffect(() => {
    if (
      postCode !== "" &&
      houseNumber !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      dataProcessing &&
      postCodeError === false &&
      houseNumberError === false &&
      firstNameError === false &&
      lastNameError === false &&
      emailError === false &&
      phoneNumberError === false &&
      dataProcessingError === false
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    postCode,
    houseNumber,
    firstName,
    lastName,
    email,
    phoneNumber,
    dataProcessing,
    postCodeError,
    houseNumberError,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumberError,
    dataProcessingError,
  ]);

  const validateFirstName = () => {
    if (firstNameRegex.test(firstName)) {
      setFirstNameError(false);
      return true;
    } else {
      setFirstNameError(true);
      return false;
    }
  };

  const validateLastName = () => {
    if (lastNameRegex.test(lastName)) {
      setLastNameError(false);
      return true;
    } else {
      setLastNameError(true);
      return false;
    }
  };

  const validateEmail = () => {
    if (emailRegex.test(email)) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError(false);
      return true;
    } else {
      setPhoneNumberError(true);
      return false;
    }
  };

  const validateDataProcessing = () => {
    if (dataProcessing) {
      setDataProcessingError(false);
      return true;
    } else {
      setDataProcessingError(true);
      return false;
    }
  };

  const validateForm = () => {
    if (
      validatePostCode() &&
      validateHouseNumber() &&
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhoneNumber() &&
      validateDataProcessing()
    ) {
      setIsFormValid(true);
      return true;
    } else {
      setIsFormValid(false);
      return false;
    }
  };

  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setAlert(true);
    if (validateForm()) {
      setLoader(true);
      // Send the form data to the server
      const data = {
        postCode: postCode,
        houseNumber: houseNumber,
        houseNumberAddition: houseNumberAddition,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        dataProcessing: dataProcessing,
        newsletter: newsletter,
      };
      //Sample fetch request
      /*
      fetch('https://example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        setLoader(false);
        setAlertData({
          message: "Form submitted successfully",
          type: "success",
        });
        setAlert(true);
        console.log('Success:', data);
      })
      .catch((error) => {
        setLoader(false);
        setAlertData({
          message: "Form submission failed",
          type: "error",
        });
        setAlert(true);
        console.error('Error:', error);
      });
      */

      console.log("Form submitted!");
    } else {
      console.log("Form not submitted!");
    }
  };

  const questionsnAnswers = [
    {
      question: "Is de aansluiting van glasvezel kosteloos?",
      answer:
        "Indien je tijdig akkoord geeft, zorgen wij kosteloos voor de aansluiting van je woning op ons glasvezelnetwerk. Hier zijn geen kosten aan verbonden.",
    },
    {
      question: "Hoe lang duurt het installatieproces doorgaans?",
      answer:
        "Het installatieproces duurt doorgaans enkele uren, afhankelijk van de complexiteit.",
    },
    {
      question:
        "Moet ik mijn huidige telefoon- en internetdiensten behouden tijdens en na de installatie?",
      answer:
        "Ja, we zorgen ervoor dat je bestaande diensten zonder onderbreking blijven functioneren.",
    },
    {
      question:
        "Kan ik mijn dienstverlener kiezen na de installatie van glasvezel? ",
      answer:
        "Zeker, na de installatie kun je een dienstverlener kiezen die bij jouw behoeften past.",
    },
    {
      question:
        "Waarom is mijn toestemming nodig voor de installatie van glasvezel?",
      answer:
        "Je kunt worden aangesloten op het glasvezelnetwerk van Zuse Tech. Dit is kosteloos en er zijn geen verplichtingen achteraf. Om glasvezel te installeren, zijn er werkzaamheden nodig in en/of rondom je woning. Voor deze werkzaamheden hebben we jouw toestemming nodig.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(null);

  return (
    <div className="relative bg-darkblue w-full flex flex-col justify-center">
    {alert &&
      <div className="fixed top-0 right-0 w-full flex justify-center items-center min-h-screen z-50 transparent-bg">
        <CustomAlert  message={alertData.message} type={alertData.type} setAlert={setAlert}/>
      </div>}
      <div className="flex absolute top-0 lg:px-24 xl:left-32 items-center">
        <img
          src={logolight}
          className="w-32 h-32 hidden custom:block"
          alt="logo"
        />
        <h1 className="company-name-light hidden custom:block">Zuse Tech</h1>
      </div>
      <h1 className="hidden custom:block absolute top-0 right-0 w-1/2 custom:pl-4 custom:pr-4 lg:pt-2 xl:pt-4 lg:pl-12 xl:pl-14 lg:pr-20 xl:pr-28 dblue-title z-10">
        Geeft u toestemming voor de installatie van glasvezel?
      </h1>
      <div className="custom:hidden flex items-center sm:px-24">
        <img src={logolight} className="w-24 h-24 " alt="logo" />
        <h1 className="company-name-light">Zuse Tech</h1>
      </div>
      <h1 className="block custom:hidden bblue-title px-4 sm:px-24 my-4">
        Geeft u toestemming voor de installatie van glasvezel?
      </h1>
      <div className="hidden custom:block absolute top-0 right-0 w-1/2 h-full bg-blue"></div>
      <div className="relative w-full flex custom:flex-row justify-center sm:px-24 custom:px-0 lg:px-24 xl:px-32 custom:pt-32 lg:min-h-screen">
        <div className="relative w-full flex flex-col custom:flex-row rounded-3xl overflow-hidden">
          <div className="rounded-3xl drop-shadow-xl custom:rounded-none custom:w-1/2 h-full bg-blue py-8 custom:py-16">
            <form className="flex flex-col space-y-3 px-10 sm:px-20 w-full h-full">
              <h1 className="dblue-title select-none">
                Vul hieronder de benodigde informatie in:
              </h1>
              <div>
                <div className="flex space-x-2">
                  <div className="flex flex-col md:shrink-1">
                    <label htmlFor="postal-code">Postcode*</label>
                    <input
                      className={`input-field w-full ${
                        postCodeError ? "border-2 border-red-500" : ""
                      }`}
                      type="text"
                      id="name"
                      placeholder="1000AA"
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      onBlur={validatePostCode}
                    />
                  </div>
                  <div className="flex flex-col md:shrink-2">
                    <label htmlFor="house-number">Huisnummer*</label>
                    <input
                      className={`input-field w-full ${
                        houseNumberError ? "border-2 border-red-500" : ""
                      }`}
                      type="text"
                      id="house-number"
                      placeholder="1"
                      value={houseNumber}
                      onChange={(e) => setHouseNumber(e.target.value)}
                      onBlur={validateHouseNumber}
                    />
                  </div>
                  <div className="flex flex-col md:shrink-2">
                    <label htmlFor="house-number-addition">Toevoeging</label>
                    <input
                      className="input-field w-full"
                      type="text"
                      id="house-number-addition"
                      placeholder="A"
                      value={houseNumberAddition}
                      onChange={(e) => setHouseNumberAddition(e.target.value)}
                    />
                  </div>
                </div>
                {postCodeError && (
                  <p className="text-red-500">Vul een geldige postcode in</p>
                )}
                {houseNumberError && (
                  <p className="text-red-500">Vul een geldig huisnummer in</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="first-name">Voornaam*</label>
                <input
                  className={`input-field w-full ${
                    firstNameError ? "border-2 border-red-500" : ""
                  }`}
                  type="text"
                  id="first-name"
                  placeholder="Jan"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={validateFirstName}
                />
                {firstNameError && (
                  <p className="text-red-500">Vul een geldige voornaam in</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name">Achternaam*</label>
                <input
                  className={`input-field w-full ${
                    lastNameError ? "border-2 border-red-500" : ""
                  }`}
                  type="text"
                  id="last-name"
                  placeholder="Janssen"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={validateLastName}
                />
                {lastNameError && (
                  <p className="text-red-500">Vul een geldige achternaam in</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">E-mailadres*</label>
                <input
                  className={`input-field w-full ${
                    emailError ? "border-2 border-red-500" : ""
                  }`}
                  type="text"
                  id="email"
                  placeholder="jan@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                {emailError && (
                  <p className="text-red-500">Vul een geldig e-mailadres in</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone-number">Telefoonnummer*</label>
                <input
                  className={`input-field w-full ${
                    phoneNumberError ? "border-2 border-red-500" : ""
                  }`}
                  type="text"
                  id="phone-number"
                  placeholder="0612345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onBlur={validatePhoneNumber}
                />
                {phoneNumberError && (
                  <p className="text-red-500">
                    Vul een geldig telefoonnummer in
                  </p>
                )}
              </div>
              <div className="flex space-x-2 items-start">
                <input
                  className={`mt-1 w-4 h-4 shrink-0 ${dataProcessingError ? "border-4 border-red-500" : ""}`}
                  type="checkbox"
                  id="data-processing"
                  onChange={(e) => setDataProcessing(e.target.checked)}
                  onBlur={validateDataProcessing}
                />
                <label className="check-text" htmlFor="data-processing">
                  Ja, ik stem in met de verwerking van mijn gegevens en met het
                  doorgeven van mijn gegevens aan de entiteit verantwoordelijk
                  voor the connection on behalf of Zuse Tech*
                </label>
              </div>
              {dataProcessingError && ( <p className="text-red-500">Vul een geldige toestemming in</p>)}
              <div className="flex space-x-2 items-start">
                <input
                  className="mt-1 w-4 h-4 shrink-0"
                  type="checkbox"
                  id="newsletter"
                  onChange={(e) => setNewsletter(e.target.checked)}
                />
                <label className="check-text" htmlFor="newsletter">
                  Ja,ik graag ontvang een individueel aanbod voor het benutten
                  van glasvezelinternet.
                </label>
              </div>
              <button
                className={`submit-button flex justify-center items-center transition-all ${
                  isFormValid
                    ? "bg-darkblue hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2"
                    : "bg-dblue cursor-default"
                }  rounded-md py-2 text-white`}
                type="submit"
                onClick={handleSubmit}
              >
              {loader ? <div class="lds-dual-ring"></div> : <p className="form-button-text">Versturen</p>}
              </button>
            </form>
          </div>
          <div className="custom:w-1/2 h-full bg-darkblue flex flex-col justify-between px-4 custom:px-16 py-16">
            <div className="flex flex-col">
              <h1 className="bblue-title mb-6">
                Ontdek supersonische internetverbinding
              </h1>
              <div className="px-2 flex space-x-2 mb-3">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#66FCF1"
                  />
                </svg>
                <h2 className="side-heading inline-block">
                  Onze diensten zijn volledig kosteloos. Er zijn geen kosten aan
                  verbonden
                </h2>
              </div>
              <div className="px-2 flex space-x-2 mb-3">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#66FCF1"
                  />
                </svg>
                <h2 className="side-heading inline-block">
                  Een abonnement afsluiten is niet verplicht
                </h2>
              </div>
              <div className="px-2 flex space-x-2">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="#66FCF1"
                  />
                </svg>
                <h2 className="side-heading inline-block">
                  Je hebt de keuze uit diverse providers
                </h2>
              </div>
            </div>
            <div className=" mt-12 custom:mt-0 flex flex-col">
              <h2 className="side-heading">Jouw gegevens, jouw privacy</h2>
              <h3 className="side-bottom-text mt-2">
                We hebben jouw gegevens nodig om jouw toestemming op te slaan en
                door te geven aan onze partners voor installatie, zodat zij jouw
                adres kunnen aansluiten. Wil je ook op de hoogte blijven via
                onze netwerkupdates? Als dat het geval is, zullen we jouw
                gegevens ook gebruiken om je berichten te sturen.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col custom:flex-row justify-between custom:px-20 lg:px-24 xl:px-36 custom:mt-16">
        <div className="flex flex-col custom:w-2/5 sm:px-20 custom:px-0">
          <h1 className="bblue-title px-6">Frequent gestelde vragen:</h1>
          {questionsnAnswers.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex mx-6 sm:mx-0 mt-3 pt-3 flex-col ${
                  index !== 0 && "border-t border-blue"
                }`}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    if (currentQuestion === index) {
                      setCurrentQuestion(null);
                    } else {
                      setCurrentQuestion(index);
                    }
                  }}
                >
                  <h2 className="side-heading">{item.question}</h2>
                  <svg
                    className={`shrink-0 transform transition-transform duration-500 ${
                      currentQuestion === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M16.586 0.939453L9.293 8.23245L2 0.939453L0.585999 2.35345L9.293 11.0605L18 2.35345L16.586 0.939453Z"
                      fill="#66FCF1"
                    />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden transition-max-h duration-500 ${
                    currentQuestion === index ? "max-h-40 py-3" : "max-h-0 py-0"
                  }`}
                >
                  <p className="side-bottom-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" bg-blue rounded-t-3xl custom:rounded-none relative z-10 flex flex-col px-6 sm:px-20 custom:px-0 custom:w-2/5 mt-16 custom:mt-0 pt-9 custom:pt-0 pb-48">
          <h1 className="dblue-title">Contacten:</h1>
          <div className="iframe-container rounded-md h-72 overflow-hidden mt-6 sm:mt-12">
            <iframe
              loading="lazy"
              allowFullScreen
              width="100%"
              height="100%"
              title="location"
              style={{ filter: "invert(80%)" }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:Ei1HYWx2YW5pc3RyYWF0LCAzMDI5IEFEIFJvdHRlcmRhbSwgTmV0aGVybGFuZHMiLiosChQKEgkjLVb_4zTERxG24UD64_LnLBIUChIJfcRUX2C3xUcRhUtelay7KVI&key=AIzaSyCLSacJxzfGaFZ3rmPYkWHt6H4MHs0oFKc"
            />
          </div>
          <div className="mt-5 flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M10 12C10.6875 12 11.2763 11.7648 11.7663 11.2944C12.2563 10.824 12.5008 10.2592 12.5 9.6C12.5 8.94 12.255 8.3748 11.765 7.9044C11.275 7.434 10.6867 7.1992 10 7.2C9.3125 7.2 8.72375 7.4352 8.23375 7.9056C7.74375 8.376 7.49917 8.9408 7.5 9.6C7.5 10.26 7.745 10.8252 8.235 11.2956C8.725 11.766 9.31333 12.0008 10 12ZM10 24C6.64583 21.26 4.14083 18.7152 2.485 16.3656C0.829167 14.016 0.000833333 11.8408 0 9.84C0 6.84 1.00542 4.45 3.01625 2.67C5.02708 0.89 7.355 0 10 0C12.6458 0 14.9742 0.89 16.985 2.67C18.9958 4.45 20.0008 6.84 20 9.84C20 11.84 19.1717 14.0152 17.515 16.3656C15.8583 18.716 13.3533 21.2608 10 24Z"
                fill="#202833"
              />
            </svg>
            <h3 className="contacts-text">
              Glasvezelstraat 1029, 3029 AD, Rotterdam
            </h3>
          </div>
          <div className="mt-3 flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M22 2.2C22 0.99 21.01 0 19.8 0H2.2C0.99 0 0 0.99 0 2.2V15.4C0 16.61 0.99 17.6 2.2 17.6H19.8C21.01 17.6 22 16.61 22 15.4V2.2ZM19.8 2.2L11 7.7L2.2 2.2H19.8ZM19.8 15.4H2.2V4.4L11 9.9L19.8 4.4V15.4Z"
                fill="#202833"
              />
            </svg>
            <h3 className="contacts-text">werkenbij@zuse-tech.nl</h3>
          </div>
        </div>
      </div>
      <div className="absolute flex w-full custom:w-1/2 flex-col sm:flex-row custom:flex-col justify-between custom:justify-normal items-end bottom-0 right-4 z-20">
        <div className="flex items-center mr-2">
          <img src={logodark} className="w-20 h-20 sm:w-28 sm:h-28 " alt="logo" />
          <h1 className="company-name-dark text-blue">Zuse Tech</h1>
        </div>
        <p className="copywrite-text text-right">
          Copyright 2023 © Zuse Tech <br className="lg:hidden" />| All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default App;
