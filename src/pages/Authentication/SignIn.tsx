import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
//import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '/logo-capnumerique.jpg';

const SignIn = () => {
  
  const [userEmail, setUserEmail] = useState();
  const [userPasswd, setUserPasswd] = useState();
  const navigate = useNavigate();

  const testAuthData = {
    userEmail: 'capnumerique@formationbtp.fr',
    userPasswd: 'Capnum123',
  }; 

  const authenticateUser = (username, password) => {
    if (username === testAuthData.userEmail && password === testAuthData.userPasswd) { 
      const userData = {
        username,
        password,
      };
      const expirationTime = new Date(new Date().getTime() + 60000);
      Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
      return true;
    }
    return false;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isAuthenticated = authenticateUser(userEmail, userPasswd);
    if (isAuthenticated) {
      toast.error('Problème de connexion')
      navigate('/');
      window.location.reload();
    } else {
      // Show error message or perform other actions for failed authentication
      toast.error('Problème de connexion')
    }
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="dark:block" src={Logo} alt="Logo" />
              </Link>

              <p className="2xl:px-20 text-center">
                Le portail de gestion des organismes de formation spécialisés
              </p>

              <span className="mt-15 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="540" height="575" fill="none"><g clip-path="url(#a)"><path fill="#FFF9F1" d="M0 50C0 22.386 22.386 0 50 0h1140c27.61 0 50 22.386 50 50v475c0 27.614-22.39 50-50 50H50c-27.614 0-50-22.386-50-50V50z"/><g filter="url(#b)"><path stroke="#EC8915" stroke-width="2" d="M360.53 583.991c2.634 176.498-145.812 321.911-331.673 324.685-185.861 2.774-338.579-138.145-341.213-314.643-2.634-176.498 145.811-321.911 331.672-324.685 185.861-2.774 338.58 138.145 341.214 314.643z" shape-rendering="crispEdges"/></g><g filter="url(#c)"><path stroke="#EC8915" stroke-width="2" d="M349.56 409.55c-54.387-77.386-108.219-120.284-197.999-157.882-13.028-5.456-13.836-24.025-1.105-30.142L427.453 88.432c12.135-5.83 25.642 5 22.534 18.099l-70.653 297.698c-3.267 13.765-21.64 16.896-29.774 5.321z" shape-rendering="crispEdges"/></g><g filter="url(#d)"><ellipse cx=".48" cy="555.017" fill="url(#e)" rx="337.48" ry="320.7"/></g><g filter="url(#f)"><path fill="url(#g)" d="M328.594 380.431c-53.226-78.189-106.412-121.885-195.621-160.819-12.945-5.649-13.476-24.229-.655-30.155L411.271 60.512c12.22-5.649 25.564 5.382 22.26 18.433l-75.087 296.61c-3.472 13.715-21.889 16.571-29.85 4.876z"/></g></g><defs><filter id="b" width="714.955" height="681.409" x="-328.391" y="260.308" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="5" dy="12"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_418_608"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_418_608" result="shape"/></filter><filter id="c" width="351.105" height="371.839" x="125.335" y="77.813" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="5" dy="12"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.5 0 0 0 0 0.270202 0 0 0 0 0 0 0 0 0.3 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_418_608"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_418_608" result="shape"/></filter><filter id="d" width="714.961" height="681.399" x="-352" y="226.317" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="5" dy="12"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_418_608"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_418_608" result="shape"/></filter><filter id="f" width="351.063" height="368.744" x="107.979" y="50.996" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="5" dy="12"/><feGaussianBlur stdDeviation="10"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.5 0 0 0 0 0.270202 0 0 0 0 0 0 0 0 0.3 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_418_608"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_418_608" result="shape"/></filter><linearGradient id="e" x1="230.439" x2="-87.153" y1="316.15" y2="694.65" gradientUnits="userSpaceOnUse"><stop stop-color="#FF9820"/><stop offset="1" stop-color="#C76C01"/></linearGradient><linearGradient id="g" x1="251.561" x2="392.287" y1="132.806" y2="248.662" gradientUnits="userSpaceOnUse"><stop stop-color="#FF981F"/><stop offset="1" stop-color="#C76B00"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 50C0 22.386 22.386 0 50 0h1140c27.61 0 50 22.386 50 50v475c0 27.614-22.39 50-50 50H50c-27.614 0-50-22.386-50-50V50z"/></clipPath></defs></svg>
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Accès membre</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Connexion au portail
              </h2>

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Adresse email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="userEmail"
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
                      placeholder="Entrer votre email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="userPasswd"
                      onChange={(e) => setUserPasswd(e.target.value)}
                      value={userPasswd}
                      placeholder="8+ Caractères, 1 Majuscule"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                            fill=""
                          />
                          <path
                            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Se connecter"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_191_13499)">
                        <path
                          d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_191_13499">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Se connecter avec Google
                </button>

                <div className="mt-6 text-center">
                  <p>
                    Pas encore de compte ? {' '}
                    <Link to="/auth/signup" className="text-primary">
                      S'inscrire
                    </Link>
                  </p>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
