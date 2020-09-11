
import style from './navigation-bar.module.scss';
import classNames from 'classnames';

export default function NavigationBar() {
    return (
        <>
            <nav id={style['navigation-bar']} className={classNames("row flex-row bg-light")}>
                <div id={style['logo-section']} className={classNames("col row align-items-center brand-logo")}>
                    <a href="/">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" id={style['j-logo']} width="182.000000pt" height="266.000000pt"
                            viewBox="0 0 182.000000 266.000000" preserveAspectRatio="xMidYMid meet"
                            alphabetic="Rich Joshua Alzate | Full-Stack Developer, Musician, Photographer">
                            <g id="stroke" transform="translate(0.000000,266.000000) scale(0.100000,-0.100000)" fill="#000000"
                                stroke="none">
                                <path d="M1503 2545 c-161 -45 -398 -209 -615 -428 -324 -326 -516 -695 -440
                                -847 23 -48 55 -62 120 -55 118 12 264 97 403 235 86 86 129 153 129 204 0 41
                                -21 28 -48 -29 -34 -70 -107 -160 -184 -225 -96 -81 -157 -111 -234 -118 -60
                                -4 -64 -3 -93 26 -75 75 -22 254 149 497 245 350 651 685 830 685 84 0 124
                                -83 94 -197 -26 -104 -86 -243 -221 -513 -134 -268 -147 -294 -262 -498 l-63
                                -113 -92 -43 c-256 -119 -530 -363 -702 -623 -131 -198 -183 -357 -138 -421
                                12 -17 25 -22 58 -22 132 0 401 298 796 881 l131 194 77 17 c102 22 186 23
                                206 2 32 -31 15 -115 -33 -158 -27 -25 -18 -37 21 -26 39 12 65 35 88 80 28
                                56 35 106 17 133 -30 46 -139 59 -256 32 -35 -9 -66 -13 -69 -11 -2 3 38 76
                                90 163 209 347 383 687 438 852 81 242 -3 380 -197 326z m-493 -1463 c0 -22
                                -244 -389 -389 -585 -169 -227 -297 -343 -374 -335 -29 3 -32 6 -35 41 -11
                                127 154 387 382 603 124 119 201 176 319 239 84 46 97 51 97 37z" />
                            </g>
                        </svg>
                    </a>
                </div>

                <div id={style['hello-section']} className={classNames("col row align-items-center justify-content-end")}>
                    <button id={style['hello-button']} className={classNames("justify-content-center align-items-center")}>
                        <span>
                            Say Hello
                        </span>
                    </button>
                </div>

            </nav>
        </>
    )
}