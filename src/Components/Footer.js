export default function Footer() {
    let date = new Date()
    return (
        <footer class="text-center lg:text-left bg-[#343E49] text-white">
            <div class="mx-3 xl:mx-12 xl:mr-60 lg:pt-10 text-center lg:text-left">
                <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex w-full justify-center lg:justify-start mt-12 lg:self-end lg:absolute lg:left-6 gap-x-4 text-sm lg:w-[29rem]">
                        <p>Copyright &copy;{date.getFullYear()}. Tous droits réservés</p>
                    </div>
                    <div class="">
                        <h6 class="
                  uppercase
                  font-semibold
                  lg:mb-4
                  flex
                  self-end absolute left-0
                  justify-center
                  lg:justify-start
                ">

                        </h6>
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold lg:mb-4 flex justify-center lg:justify-start">
                            Suivez-Nous
                        </h6>
                        <div className="flex justify-center lg:justify-start">
                            <p class="lg:mb-4">
                                <a href="#!" class="text-gray-600"><img className="h-12 mx-1 my-2" src="/facebook.png"></img></a>
                            </p>
                            <p class="lg:mb-4">
                                <a href="#!" class="text-gray-600"> <img className="h-12 mx-1 my-2" src="/instagram.png"></img></a>
                            </p>
                            <p class="lg:mb-4">
                                <a href="#!" class="text-gray-600"><img className="h-12 mx-1 my-2" src="/youtube.png"></img></a>
                            </p>
                        </div>
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold lg:mb-4 flex justify-center lg:justify-start">
                            Appelez-Nous
                        </h6>
                        <p class="flex items-center justify-center lg:justify-start lg:mb-4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                                class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                </path>
                            </svg>
                            +(212) 5-22-29-60-18
                        </p>
                        <p class="flex items-center justify-center lg:justify-start">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
                                class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                                </path>
                            </svg>
                            +(212) 5-22-29-90-44
                        </p>
                    </div>
                    <div class="">
                        <h6 class="uppercase font-semibold lg:mb-4 flex justify-center lg:justify-start">
                            Visitez-Nous
                        </h6>
                        <p class="flex items-center justify-center lg:justify-start lg:mb-4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                                class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                </path>
                            </svg>
                            22 Boulevard Denis Papin Local N1 <br></br>Bourgogne - Casablanca
                        </p>
                    </div>
                    <div className="w-full flex self-end justify-center lg:absolute right-6 gap-x-4 text-sm lg:w-[29rem]">
                        <a href="#">
                            Qui Sommes-Nous
                        </a>
                        <a href="#">
                            Nos Produits
                        </a>
                        <a href="#">
                            Espace Éducateur
                        </a>
                        <a href="#">
                            Contactez Nous
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}